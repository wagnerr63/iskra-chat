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

export const Login = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            width: 100%;
            padding: 1rem;
            border-radius: 20px;
            border: none;
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            font-size: 16px;
            outline: none;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        button {
            width: 100%;
            padding: 1rem;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            background: #ef233c;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            outline: none;
        }
        

    }
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


