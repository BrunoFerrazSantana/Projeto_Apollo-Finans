import React, {useState, useMemo, useCallback} from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';
import DevCredits from '../../components/DevCredits';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonth from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import atentImg from '../../assets/atent.svg';
import zeroImg from '../../assets/zero.svg';

import {Container, Content} from './styles';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);

    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

//Caixa com o total de saídas
    const totalExpenses = useMemo(() => {

        let total : number = 0;

        expenses.forEach(item =>{
            
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }
                catch(error){

                    throw new Error('Invalid amount! Amount must be number.');
                }
            }
        });

        return total;

    },[monthSelected, yearSelected]);

//Caixa com o total de entradas
    const totalGains = useMemo(() => {

        let total : number = 0;

        gains.forEach(item =>{
            
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }
                catch(error){

                    throw new Error('Invalid amount! Amount must be number.');
                }
            }
        });

        return total;

    },[monthSelected, yearSelected]);

//Caixa com saldo
    const totalBalance = useMemo(() => {

        return totalGains - totalExpenses;
    },[totalGains, totalExpenses]);

//Caixa de mensagem baseado no saldo
    const message = useMemo(() =>{

        if(totalBalance < 0){
            return{
                title : "Que triste!",
                description : "Neste mês, você gastou mais do que deveria.",
                footerText : "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon : sadImg
            }
        }
        else if(totalGains === 0 && totalExpenses ===0){
            return{
                title : "Ops...!",
                description : "Neste mês, não há registros de entradas e saídas.",
                footerText : "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon : zeroImg
            }
        }
        else if(totalBalance === 0){
            return{
                title : "Ufaaaa!",
                description : "Neste mês, você gastou exatamente o que ganhou.",
                footerText : "Tenha cuidado. No próximo mês tente poupar o seu dinheiro.",
                icon : atentImg
            }
        }
        else{
            return{
                title : "Muito bem!",
                description : "Sua carteira está positiva!",
                footerText : "Continue assim. Considere investir seu saldo.",
                icon : happyImg
            }
        }
    },[totalBalance, totalGains, totalExpenses]);

//Gráfico de pizza
    const relationExpensesVersusGains = useMemo (() => {

        const total = totalGains + totalExpenses;
        
        const percentGains = Number(((totalGains / total) * 100).toFixed(0));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(0));

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: '#1E90FF'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#DC143C'
            },
        ];

        return data;

    },[totalGains, totalExpenses]);

//Gráfico de histórico de saldo anual
    const historyData = useMemo(() => {
        return listOfMonth
        
        .map((_, month) =>{
            
            let amountEntry = 0;
            gains.forEach(gain =>{
                const date = new Date(gain.date);
                const gainsMonth = date.getMonth();
                const gainYear = date.getFullYear();
    
                if(gainsMonth === month && gainYear === yearSelected){
                    
                    try{
                        amountEntry += Number(gain.amount);
                    }
                    catch(error){
                        throw new Error("amountEntry is invalid. amountEntry must be valid number.");
                        
                    }
                }
            });
    
            let amountOutput = 0;
            expenses.forEach(expense =>{
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();
    
                if(expenseMonth === month && expenseYear === yearSelected){
                    
                    try{
                        amountOutput += Number(expense.amount);
                    }
                    catch(error){
                        throw new Error("amountOutput is invalid. amountOutput must be valid number.");
                        
                    }
                }
            });
    
            return{
                monthNumber: month,
                month: listOfMonth[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item => {

            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return(yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        });
        
    },[yearSelected]);

    const years = useMemo(() => {
        
        let uniqueYears: number[] = []; 

        [...expenses, ...gains].forEach(item => {

            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {

            return{
                value: year,
                label: year,
            }
        });

    },[]);

    const months = useMemo(() => {

        return listOfMonth.map((month, index) => {

            return{
                value: index + 1,
                label: month,
            }
        });

},[]);

//Gráfico de relação de entradas com base em recorrentes ou eventuais.
const relationGainsRecurrentVersusEventual = useMemo(() => {

    let amountRecurrent = 0;
    let amountEventual = 0;

    gains.filter((gain) => {

        const date = new Date(gain.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return month === monthSelected && year === yearSelected;
    })
    
    .forEach((gain) => {

        if(gain.frequency === 'recorrente'){
            return amountRecurrent += Number(gain.amount);
        }
        if(gain.frequency === 'eventual'){
            return amountEventual += Number(gain.amount);
        }
    });

    const total = amountRecurrent + amountEventual;

    const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(0));
    const eventualPercent = Number(((amountEventual / total) * 100).toFixed(0));

    return[
        {
            name: 'Fixas',
            amount: amountRecurrent,
            percent: recurrentPercent ? recurrentPercent : 0,
            color: "#A020F0"
        },
        {
            name: 'Eventuais',
            amount: amountEventual,
            percent: eventualPercent ? eventualPercent : 0,
            color: "#FF4500"
        }
    ];

},[monthSelected, yearSelected]);

//Gráfico de relação de saídas com base em recorrentes ou eventuais.
    const relationExpensevesRecurrentVersusEventual = useMemo(() => {

        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {

            const date = new Date(expense.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected;
        })
        
        .forEach((expense) => {

            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }
            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;

        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(0));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(0));

        return[
            {
                name: 'Fixas',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#A020F0"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#FF4500"
            }
        ];

    },[monthSelected, yearSelected]);

    const handleMonthSelected = useCallback((month: string) =>{

        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch(error){
            throw new Error("Invalid month value. Is accept 0 - 12.")
            
        }
    },[]);

    const handleYearSelected = useCallback((year: string) =>{
        try{
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch(error){
            throw new Error("Invalid year value. Is accept integer number.")
            
        }
    },[]);

    return(
        <Container>
            <ContentHeader title = "Dashboard" lineColor = "#00FA9A">
                <SelectInput 
                    options = {months} 
                    onChange = {(e) => handleMonthSelected (e.target.value)} 
                    defaultValue = {monthSelected}
                />
                <SelectInput 
                    options = {years} 
                    onChange = {(e) => handleYearSelected (e.target.value)} 
                    defaultValue = {yearSelected}
                /> 
            </ContentHeader>
            <Content>
                <WalletBox 
                    title = "SALDO"
                    color = "#2F4F4F"
                    amount = {totalBalance}
                    footerlabel = "Atualizado com base nas entradas e saídas."
                    icon = "dolar"
                />

                <WalletBox 
                    title = "ENTRADAS"
                    color = "#1E90FF"
                    amount = {totalGains}
                    footerlabel = "Atualizado com base nas entradas e saídas."
                    icon = "arrowUp"
                />

                <WalletBox 
                    title = "SAÍDAS"
                    color = "#DC143C"
                    amount = {totalExpenses}
                    footerlabel = "Atualizado com base nas entradas e saídas."
                    icon = "arrowDown"
                />

                <MessageBox 
                    title = {message.title}
                    description = {message.description}
                    footerText = {message.footerText}
                    icon = {message.icon}
                />

                <PieChartBox data = {relationExpensesVersusGains}/>

                <HistoryBox 
                    data = {historyData}
                    lineColorAmountEntry = "#1E90FF"
                    lineColorAmountOutput = "#DC143C"
                />
                
                <BarChartBox 
                    title = "Entradas"
                    data = {relationGainsRecurrentVersusEventual}
                />

                <BarChartBox 
                    title = "Saídas"
                    data = {relationExpensevesRecurrentVersusEventual}
                />
                
                <DevCredits />
            </Content>
        </ Container>
    );
}

export default Dashboard;