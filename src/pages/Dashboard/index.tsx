import { useState } from "react";
import { AddCircle } from '@mui/icons-material';

import { Chart } from "../../components/Chart";

import { Container, Content } from './styles'

export type TChart = {
    id: string
    dataName: string
    titleText: string
    seriesName: string
}

let newChart = {
    id: '1',
    dataName: 'aapl-c',
    titleText: 'AAPL Stock Price',
    seriesName: 'AAPL'
}

export default function Dashboard() {
    const [charts, setChart] = useState([newChart] as TChart[])

    function addChart(): void {
        newChart = {
            id: '2',
            dataName: 'aapl-v',
            titleText: 'AAPL Amount Stock ',
            seriesName: 'AAPL'
        }

        setChart([...charts, newChart])
    }

    return (
        <Container>
            <Content>
                {charts.map(({ id, dataName, titleText, seriesName }: TChart) =>
                    <Chart
                        key={id}
                        id={id}
                        dataName={dataName}
                        titleText={titleText}
                        seriesName={seriesName}
                    />
                )}

                <AddCircle id='addChart' color='success' onClick={addChart} />
            </Content>
        </Container>
    )
}