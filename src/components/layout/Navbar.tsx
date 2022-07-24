import { Logo } from "../Logo"
import { Text } from "../Text"
import { Separator } from "../Separator"
import { Flex } from "./Flex"
import styled from "styled-components"

const NavbarContainer = styled.nav`
    width: 100%;
    padding: 0 2rem;
`;

export const Navbar = () => {
    return (
        <NavbarContainer>
            <Flex>
                <Logo />
                <Text>Zarejestrowane przez: <br />DSJ24.PL</Text>
            </Flex>
            <Separator />
        </NavbarContainer>
    )
}