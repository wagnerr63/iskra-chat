import styled from 'styled-components';

export const ChatConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background: #2b2d42;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 60%;
    height: 80%;
    background: #edf2f4;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`;

export const ContentHeader = styled.div`
    width: 100%;
    border-radius: 8px 8px 0 0;
    background: #8d99ae;
    display: flex;
    align-items: center;
    padding-right: 1rem;

    h1{
        width: 58%;
        display: flex;
        justify-content: flex-end;
    }

    span{
        width: 42%;
        display: flex;
        justify-content: flex-end;

        button {
            background: #ef233c;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            color: #edf2f4;
            text-transform: uppercase;
            padding: .5rem 1.5rem;
            font-weight: bold;
            outline: none;

            display: flex;
            align-items: center;
            justify-content: center;

            img {
                margin-left: 3px;
            }
        }
    }

`;

export const Messages = styled.div`
    width: 100%;
    height: calc(100% - 50px + 1rem);
    padding: 0 5%;
    padding-top: 2%;
    background: #edf2f4;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: auto;

     &::-webkit-scrollbar {
        width: 10px;
        border: none;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #edf2f4;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #8d99ae;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: none;  /* creates padding around scroll thumb */
    }


`;

export const InputArea = styled.div`
    width: 100%;
    height: 50px + 1rem;
    background: #edf2f4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    form {
        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        input {
            width: calc(97% - 60px);
            height: 100%;
            padding: 1rem;
            border-radius: 20px;
            border: none;
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            font-size: 16px;
            outline: none;
        }
    
        button {
            width: 60px;
            height: 100%;
            background: #ef233c;
            border-radius: 20px;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;

            img {
                width: 60%;
                height: 60%;
            }
        }
    }
`;


