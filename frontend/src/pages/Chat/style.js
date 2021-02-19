import styled from 'styled-components';

export const ChatConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 60%;
    height: 80%;
    background: #272727;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`;

export const Messages = styled.div`
    width: 100%;
    height: calc(100% - 30px + 1rem);
    background: #f2f2f2;
    display: flex;
`;

export const InputArea = styled.div`
    width: 100%;
    height: 30px + 1rem;
    background: #fff;
    display: flex;

    form {
        width: 100%;
        height: 100%;

        input {
            width: calc(100% - 60px);
            height: 100%;
            padding: 1rem;
        }
    
        button {
            width: 60px;
            height: 100%;
        }
    }
`;


