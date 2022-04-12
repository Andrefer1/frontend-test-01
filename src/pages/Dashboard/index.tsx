import { useState } from "react";
import { AddCircle } from '@mui/icons-material';

import { Chart } from "../../components/Chart";
import { TChart } from '../../@types'

import { Container, Content } from './styles'

let newChart = {
    id: 1,
    dataName: 'aapl-c',
    titleText: 'AAPL Stock Price',
    seriesName: 'AAPL',
}

export default function Dashboard() {
    const [charts, setChart] = useState<TChart[]>([newChart])

    function addChart(): void {
        // Create random data

        const listData = ['aapl-c', 'aapl-v']
        const randomIndex = Math.floor(Math.random() * 2)
        console.log(randomIndex)

        newChart = {
            id: charts.length + 1,
            dataName: listData[randomIndex],
            titleText: randomIndex === 0
                ? 'AAPL Stock Price'
                : 'AAPL Amount Stock',
            seriesName: 'AAPL',
        }

        setChart([...charts, newChart])
    }

    function deleteChart(id: number): void {
        const chartIndex = charts.findIndex(chart => chart.id === id)

        if (chartIndex < 0) {
            throw new Error('Chart not found')
        }

        const newCharts = [...charts]

        newCharts.splice(chartIndex, 1)

        setChart(newCharts)
    }

    return (
        <Container>
            <Content>
                {charts.map((chart: TChart) =>
                    <Chart
                        key={chart.id}
                        chart={chart}
                        deleteChart={deleteChart}
                    />
                )}

                <AddCircle id='addChart' color='success' onClick={addChart} />
            </Content>
        </Container>
    )
}