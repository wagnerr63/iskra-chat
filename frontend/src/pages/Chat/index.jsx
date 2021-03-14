import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
 
import socketIOClient from "socket.io-client";

import SendIcon from './send.svg';
import LogoutIcon from './logout.ico';

import { ChatConteiner, Content, ContentHeader, Messages, InputArea } from './style';

import Message from '../../components/Message';

const ENDPOINT = "http://localhost:3030";
const socket = socketIOClient(ENDPOINT);

export default function Chat() {

    const [messages, setMessage] = useState([]);
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    let history = useHistory();
    useEffect( () => {

        socket.on('previousMessages', (messages) => { 
            console.log('antigas', messages);
            setMessage(messages);
        });
    
    },[]);
    
    if (!userName) {
        history.push('/');
    }


    const handleLogout = () => {
        localStorage.setItem('userName', '' );
        setUserName('');
    }

    socket.on("receivedMessage", (newMessage) => {
        const newObj = [...messages];
        newObj.push(newMessage);    

        setMessage(newObj);
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
                </Content>
            </ChatConteiner>
        </div>
    );
}