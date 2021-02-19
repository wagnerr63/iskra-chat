import React from 'react';

import { ChatConteiner, Content, Messages, InputArea } from './style';

export default function Chat() {
    
    return(
        <div>
            <ChatConteiner>
                <Content>
                    <Messages />
                    <InputArea>
                        <form>
                            <input type="hidden" name="username" value="Wagner"/>
                            <input type="text" name="message"/>

                            <button type="submit">Enviar</button>
                        </form>
                    </InputArea>
                </Content>
            </ChatConteiner>
        </div>
    );
}