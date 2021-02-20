import React, { useState } from 'react';

import socketIOClient from "socket.io-client";

import SendIcon from './send.svg';
import LogoutIcon from './logout.ico';

import { ChatConteiner, Content, ContentHeader, Messages, InputArea, Login } from './style';

import Message from '../../components/Message';

const ENDPOINT = "http://localhost:3030";
const socket = socketIOClient(ENDPOINT);

export default function Chat() {

    const [messages, setMessage] = useState([]);
    const [userName, setUserName] = useState(localStorage.getItem('userName'));

    const handleLogin = (event) => {
        event.preventDefault();
        const form = document.forms.login;

        const username = form.username.value;
        if (username) {
            localStorage.setItem('userName', username );
            setUserName(username);
        }

    };

    const handleLogout = () => {
        localStorage.setItem('userName', '' );
        setUserName('');
    }

    if (userName && userName!=="") {
    
        socket.on("receivedMessage", (newMessage) => {
            const newObj = [...messages];
            newObj.push(newMessage);
    
            setMessage(newObj);
        });
    }

    socket.on('previousMessages', (messages) => { 
        console.log('antigas', messages);
        setMessage(messages);
    });

    const messagesBox = messages.map( (msg, index) => (
        <Message key={index} user={msg.user_name} message={msg.content} />
    ) );

    function handleSubmit (event) {
        event.preventDefault();
        const form = document.forms.chat;

        const user = form.username.value;
        const message = form.message.value;

        if(user && message) {
            const messageObj = {
                user_name: user,
                content: message
            };

            const newMessages = [...messages];
            newMessages.push(messageObj);

            form.message.value="";
            setMessage(newMessages);
            socket.emit('sendMessage', messageObj);
        }

    }
    
    return(
        <div>
            <ChatConteiner>
                <Content>
                   {userName
                        ? // if condition
                            <>
                                <ContentHeader>
                                    <h1>Iskra Chat</h1>
                                    <span>
                                        <button type="button" onClick={handleLogout}>
                                            {userName} <img src={LogoutIcon} alt="Ícone de Logout"/>
                                        </button>
                                    </span>
                                </ContentHeader>
                                <Messages>
                                    {messagesBox}
                                </Messages>

                                <InputArea>
                                    <form name="chat">
                                        <input type="hidden" name="username" value={userName}/>
                                        <input type="text" name="message" placeholder="Digite sua mensagem"/>

                                        <button type="submit" onClick={handleSubmit}><img src={SendIcon}/></button>
                                    </form>
                                </InputArea>
                            </>
                        : // else condition
                        <>
                            <Login>
                                <form name="login" onSubmit={handleLogin}>
                                    <h1>Iskra Chat</h1>
                                    <input type="text" name="username" placeholder="Informe seu nome"/>
                                    <button type="submit">Entrar</button>
                                </form>
                            </Login>
                        </> 
                        
                   }
                </Content>
            </ChatConteiner>
        </div>
    );
}