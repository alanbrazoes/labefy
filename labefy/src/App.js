import React from "react";
import styled from "styled-components"

import AddPlaylist from "./componentes/addPlaylist";
import ListaPlaylist from "./componentes/listaPlaylist";

const Geral = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 75vw;
  height: 10vh;
`

const Main = styled.main`
  display: flex;
  padding: 20px;
  height: 75vh;
  width: 75vw;
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


class App extends React.Component {
  state = {
    inicio: 'addPlaylist'
  }

  telaInicial = () => {
    switch (this.state.inicio) {
      case 'addPlaylist':
        return <AddPlaylist />
      
      case 'listPlaylist':
        return <ListaPlaylist />
    
      default:
        return <ListaPlaylist />
    }
  }

  mudaBotao = () => {
    if(this.state.inicio === 'addPlaylist') {
      return (
        <Button onClick={this.renderPlaylist}>Ver minhas Playlists</Button>
      )
    } else {
      return (
        <Button onClick={this.renderAddPlaylist}>Adcionar Playlist</Button>
      )
    }
  }

  renderAddPlaylist = () => {
    this.setState({inicio: 'addPlaylist'})
  }
  
  renderPlaylist = () => {
    this.setState({inicio: 'listPlaylist'})
  }

  render () {
    return (
      <Geral>
        <Cabecalho>
          <h1>LABEFY</h1>
          {this.mudaBotao()}
        </Cabecalho>

        <Main>
          {this.telaInicial()}
        </Main>

      </Geral>
    )
  }
  
}

export default App;