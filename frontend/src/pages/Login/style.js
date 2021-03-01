import styled from 'styled-components';

export const LoginContainer = styled.div`
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