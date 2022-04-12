import { AddCircle } from '@mui/icons-material';

import { Chart } from "../../components/Chart";

import { Container, Content } from './styles'

export default function Dashboard() {

    return (
        <Container>
            <Content>
                <Chart />
                <AddCircle id='addChart' color='success' />
            </Content>
        </Container>
    )
}