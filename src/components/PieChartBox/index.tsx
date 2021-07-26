import React from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';

import {Container,
        SideLeft,
        LegendContainer,
        Legend,
        SideRight} from './styles';

interface IPieProps{
    data:{
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieChartBox: React.FC<IPieProps> = ({data}) => (
    <Container>
        <SideLeft>
            <h2>Porcentagem</h2>
            <LegendContainer>
                {
                    data.map((indicator) =>(

                        <Legend key={indicator.name} color = {indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data = {data} dataKey = "percent">
                        {
                            data.map((indicator) => (

                                <Cell key = {indicator.name} fill = {indicator.color}/>
                            ))
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        <SideRight>
            
        </SideRight>
    </Container>
);

export default PieChartBox;