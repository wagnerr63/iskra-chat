import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { LoginContainer } from './style';

import { ChatConteiner, Content } from '../Chat/style';

export default function Login () {

    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    let history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = document.forms.login;

        const username = form.username.value;
        if (username) {
            localStorage.setItem('userName', username );
            setUserName(username);
            history.push('/chat');
        }

    };

    return (
        <>
            <ChatConteiner>
                <Content>
                    <LoginContainer>
                        <form name="login" onSubmit={handleLogin}>
                            <h1>Iskra Chat</h1>
                            <input type="text" name="username" placeholder="Informe seu nome"/>
                            <button type="submit">Entrar</button>
                        </form>
                    </LoginContainer>
                </Content>
            </ChatConteiner>
        </>
    );
}