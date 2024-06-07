import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' />
                    Reactivites
                </Menu.Item>
                <Menu.Item name='Activites' />
                <Menu.Item>
                    <Button positive content='Create Actvity' />
                </Menu.Item>
            </Container>
        </Menu>
    );
}