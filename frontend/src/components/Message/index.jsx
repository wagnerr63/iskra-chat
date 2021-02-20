import React from 'react';

import { MessageBox } from './style';

export default function Message (props) {
    const {user, message, color} = props;
    return(
        <MessageBox>
            <strong style={{color:`#${color}`}}>{user}</strong>: {message}
        </MessageBox>
    );
}