import styled from "styled-components";

export const Geral = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
`

export const PlaylistCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: 4px;
    padding: 4px;
    border: 1px solid #fff;
`

export const PlaylistMusic = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const Playlist = styled.div`
    flex-grow: 1;
    padding: 10px;
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

export const MusicName = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    border: 1px solid #fff;
    padding: 4px;
    margin: 0 0 8px 0;
    &:focus{
        border: 1px solid #14740b;
        outline: none;
    }
    &:hover{
        border: 1px solid #14740b;
        color: #14740b;
    }
`
export const MusicCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #fff;
    padding: 8px;
    margin: 4px;
`