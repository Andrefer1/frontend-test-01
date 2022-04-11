import { Search as SearhcIcon } from '@mui/icons-material'

import { Container, Content } from './styles'

export function Search() {
    return (
        <Container>
            <Content>
                <SearhcIcon />

                <input type="text" placeholder="Search..." />
            </Content>
        </Container>
    )
}