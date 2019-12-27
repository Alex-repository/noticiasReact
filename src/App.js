import React, { Component } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Categoria from "./components/Categoria";
class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria= "technology") => {
    const url = `
https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=4eae8c04e8664b7ebf286a0a4cdb1a24`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  };
  render() {
    return (
      <>
        <Header titulo=" Noticias React API" />

        <div className=" container white contenedor-noticias ">
          <Categoria consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </>
    );
  }
}

export default App;
