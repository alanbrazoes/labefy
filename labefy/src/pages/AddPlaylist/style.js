import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Button = styled.button`
    margin: 4px;
    border: 2px solid #fff;
    padding: 4px;
    cursor: pointer;
    &:hover{
        border: 2px solid #14740b;
        color: #14740b;
        transition: 0.2s;
    }
`

export const Input = styled.input`
    border: 2px solid #fff;
    padding: 4px;
    
    &:focus{
        border: 2px solid #14740b;
        outline: none;
    }
    &:hover{
        border: 2px solid #14740b;
        color: #14740b;
    }
`