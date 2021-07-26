import React from 'react';
import {ResponsiveContainer,
        LineChart,
        Line,
        XAxis,
        CartesianGrid,
        Tooltip
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {Container, 
        ChartContainer,
        Header,
        LegendContainer,
        Legend
} from './styles';

interface IHistoryBoxProps {

    data:{
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({

    data, lineColorAmountEntry, lineColorAmountOutput
}) => (

    <Container>
        <Header>
            <h2>HISTÓRICO DE SALDO <span>ANUAL</span></h2>
            
            <LegendContainer>
                <Legend color = {lineColorAmountEntry}>
                    <div></div>
                    <span>Entradas</span>
                </Legend>
                <Legend color = {lineColorAmountOutput}>
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>       

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data = {data}>
                    <CartesianGrid strokeDasharray = "3 3" stroke = "#A020F0"/>
                    <XAxis dataKey = "month" stroke = "#FF1493"/>
                    <Tooltip formatter = {formatCurrency}/>

                    <Line 
                        type = "monotone"
                        dataKey = "amountEntry"
                        name = "Entradas"
                        stroke = {lineColorAmountEntry}
                        strokeWidth = {5}
                        dot = {{r: 5}}
                        activeDot = {{r: 8}}
                    />

                    <Line 
                        type = "monotone"
                        dataKey = "amountOutput"
                        name = "Saídas"
                        stroke = {lineColorAmountOutput}
                        strokeWidth = {5}
                        dot = {{r: 5}}
                        activeDot = {{r: 8}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;