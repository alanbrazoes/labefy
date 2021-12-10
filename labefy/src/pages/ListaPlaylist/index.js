import axios from "axios";
import React from "react";
import ReactPlayer from "react-player";

import { AiOutlineDelete, AiOutlineCloseSquare } from "react-icons/ai"
import { CgDetailsMore } from "react-icons/cg"
import { Geral, List, PlaylistCard, PlaylistMusic, Playlist, Button, MusicName, Input, MusicCard } from './style'

export default class ListaPlaylist extends React.Component {
    state = {
      playlists: [],
      playlistAtual: [],
      playlist:'',
      inputMusic:'',
      tracks: [],
      inputArtista:'',
      inputLink:''
    }

    componentDidMount() {
      this.getPlaylists()
    }

    componentDidUpdate(prevProp, prevState) {
      if(prevState.playlistAtual !== this.state.playlistAtual){
        this.getTracksPlaylist(this.state.playlistAtual.id)
      }
    }

    getPlaylists = () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
      axios.get(url, {
        headers: {
          Authorization: 'alan-sena-banu'
        }
      })
      .then((res) => {
        this.setState({playlists: res.data.result.list})
      }).catch((err) => {
        console.log(err)
      })
    }

    getTracksPlaylist = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistAtual.id}/tracks`

      axios.get(url, {
        headers:{
          Authorization: 'alan-sena-banu'
        }
        })
        .then((res) => {
          this.setState({tracks: res.data.result.tracks})
        })
        .catch((err) => {
          console.log(err.response)
      })
    }
    
    addMusic = (e) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistAtual.id}/tracks`
      const body = {
        name: this.state.inputMusic,
        artist: this.state.inputArtista,
        url: this.state.inputLink
      }

      axios.post(url, body, {
        headers: {
          Authorization: 'alan-sena-banu'
        }
      })
      .then((res) => {
        this.setState({inputMusic:'', inputArtista:'', inputLink:''})
        this.getTracksPlaylist()
      })
      .catch((err) => {
        console.log(err)
      })

    }

    deletePlaylist = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      axios.delete(url, {
        headers: {
          Authorization: 'alan-sena-banu'
        }
      })
      .then((res) => {
        this.getPlaylists()
      })
      .catch((err) => {
        console.log('não apagou!!!')
      })
    }

    deleteTrack = (e) => {
      console.log('aqui')
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistAtual.id}/tracks/${e}`

      axios.delete(url, {
        headers:{
          Authorization: 'alan-sena-banu'
        }
      })
      .then((res) => {this.getTracksPlaylist()})
      .catch((err) => console.log(err.response))
    }

    renderPlay = (e) => {
        this.setState({playlistAtual: e})
        this.setState({playlist: e.name})
        this.setState({trackk: true})
    }

    onChangeMusic = (e) => {
        this.setState({inputMusic: e.target.value})
    }
    
    onChangeArtista = (e) => {
        this.setState({inputArtista: e.target.value})
    }
    
    onChangeLink = (e) => {
        this.setState({inputLink: e.target.value})
    }
    
    renderMusicCard = () => {
      const card = this.state.tracks.map((value, i) => {
        return <MusicCard key={i}>
          <MusicName>
            <h3>Música: {value.name}</h3>
            <h4>Artista: {value.artist}</h4>
            <AiOutlineCloseSquare 
              onClick={() => this.deleteTrack(value.id)}
              size="1.5rem"
              cursor={"pointer"}
            />
          </MusicName>
          
          <ReactPlayer 
            url={value.url}
            width="90%"
            height= "50px"
            playing={false}
            controls={true}
          />
        </MusicCard>
      })
      return card
    }

    playAtual = () => {
      if(this.state.playlistAtual.name === this.state.playlist) {
        return (<div>
          <h2>{this.state.playlistAtual.name}</h2>
            <PlaylistMusic>
              <label>Nome da Música</label>
              <Input onChange={this.onChangeMusic} value={this.state.inputMusic}></Input>
              <label>Nome do artista</label>
              <Input onChange={this.onChangeArtista} value={this.state.inputArtista}></Input>
              <label>Link da música</label>
              <Input onChange={this.onChangeLink} value={this.state.inputLink}></Input>
              <Button onClick={this.addMusic}>Adicionar</Button>

              {this.renderMusicCard()}
            </PlaylistMusic>
        </div>
        )
        } else {
          return <h2>Selecione uma playlist ou adicione</h2>
        }
        
    }
    
    render() {
      const renderPlaylist = this.state.playlists.map((playlist, i) => {
        return (
          <PlaylistCard key={i}>
            {playlist.name}
              <div>
                <AiOutlineDelete 
                  onClick={() => {this.deletePlaylist(playlist.id)}}
                  size="1.5rem"
                  cursor={'pointer'}
                />
                <CgDetailsMore 
                  onClick={() => {this.renderPlay(playlist)}} 
                  size="1.5rem"
                  color="green"
                  cursor={'pointer'}
                />
              </div>
          </PlaylistCard>
        )
      })

      return(
        <Geral>
          <List>
            <h1> Lista de playlists </h1>
            {renderPlaylist}
          </List>
          <Playlist>
            <div>{this.playAtual()}</div>
          </Playlist>
        </Geral>
      )
    }
}