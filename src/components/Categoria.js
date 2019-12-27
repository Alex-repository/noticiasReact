import React, { Component } from "react";
import PropTypes from 'prop-types';

class Categoria extends Component {
  state = {
    categoria: ""
  };

  handleChange = e => {
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        this.props.consultarNoticias(this.state.categoria);
      }
    );
  };

  render() {
    return (
      <div className="buscardor row">
        <div className=" col s12 m8 offset-m2">
          <form>
            <h2>Encuentra noticias por categoría</h2>
            <div className=" input-field col m10 offset-m2 ">
              <select onChange={this.handleChange}>
                <option value="technology">Tecnología</option>
                <option value="general">General</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="sports">Deportes</option>
                <option value="business">Negocios</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Categoria.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};
export default Categoria;
