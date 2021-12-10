import React from "react";
import axios from "axios"
import { Div, Button, Input } from './style'

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