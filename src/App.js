import React, { Component } from "react";
import imagen from './norris.jpg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      categories:[],
      jokes: {},
    }
  }

  componentDidMount() {
    fetch(`https://api.chucknorris.io/jokes/categories`).then((response)=>response.json()).then((data)=>this.setState({categories:data}));
  }

  handleChange=(e)=>{
    const caty = e.target.value;
    const url = `https://api.chucknorris.io/jokes/random?category=` + caty;

    fetch(url).then((response)=>response.json()).then((data)=>this.setState({ jokes:data}));
  }

  render() {
    return (
      <div className='contenedor'>
        <nav className='menu'>
          <h1 className='titulo'>By Abraham Gutierrez</h1>
        </nav>
        
        <div className = 'caja'>
          <div className = 'caja-imagen'>
            <img src={imagen} className= 'foto-norris'/>
            <h3 className = 'nombre'>Chuck Norris</h3>
          </div>

          <div className = 'caja-texto'>
            <select className='lista' onChange={this.handleChange}>
              <option>Selecione una Opcion</option>
              {this.state.categories.map((category)=>(<option key={category}>{category}</option>))}
            </select>

            <div className = 'comentario'>
              <h1 className="palabra">{this.state.jokes.value}</h1>
            </div>

          </div>
        </div>

        
      </div>

    );
  }
}



export default App;
