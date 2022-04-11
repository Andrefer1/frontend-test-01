import { Search } from "./Search"

import DelfosLogo from '../../assets/images/delfosLogo.png'

import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={DelfosLogo} alt="Delfos IM Logo" />
                <Search />
            </Content>
        </Container>
    )
}