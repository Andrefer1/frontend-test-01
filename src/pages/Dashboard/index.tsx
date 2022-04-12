import { useState } from "react";
import { AddCircle } from '@mui/icons-material';

import { Chart } from "../../components/Chart";
import { TChart } from '../../@types'

import { Container, Content } from './styles'

let newChart = {
    id: '1',
    dataName: 'aapl-c',
    titleText: 'AAPL Stock Price',
    seriesName: 'AAPL'
}

export default function Dashboard() {
    const [charts, setChart] = useState<TChart[]>([newChart])

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
                {charts.map((chart: TChart) =>
                    <Chart
                        key={chart.id}
                        chart={chart}
                    />
                )}

                <AddCircle id='addChart' color='success' onClick={addChart} />
            </Content>
        </Container>
    )
}