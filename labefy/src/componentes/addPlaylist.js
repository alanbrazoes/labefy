import React from "react";
import styled from "styled-components";
import axios from "axios"

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `

const Button = styled.button`
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

const Input = styled.input`
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

export default class AddPlaylist extends React.Component {

    state = {
        inputPlaylist:''
    }

    addPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.inputPlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'alan-sena-banu'
            }
        })
        .then((res) => {
            alert('Playlist criada com sucesso.')
            this.setState({inputPlaylist: ''})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onChangePlaylist = (e) => {
        this.setState({ inputPlaylist: e.target.value })
    }

    render () {
        return (
                <Div>
                    <label>Adicionar Playlist</label>
                    <Input
                        onChange={this.onChangePlaylist}
                        value={this.state.inputPlaylist}
                    ></Input>
                    <Button onClick={this.addPlaylist}> Adicionar </Button>
                </Div>
        )
    }
}