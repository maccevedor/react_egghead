//import React, {Component} from 'react';
import React from 'react';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      txt: 'this is super',
      cat: 0
    }
    this.fnChange = this.fnChange.bind(this)

  }

  componentWillMount(){
    { this.fnChange() }
  }


  fnChange(){
    this.setState({
      valor: 20
    })
    console.log(this.state.valor)
  }
 update(e){
   console.log(e.target);
   this.setState({txt: e.target.value})
 }
  render(){
    let txt = this.props.txt

    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <p>
          Este es el valor { this.state.valor }
        </p>
        <p>
          {this.props.proppapa}
        </p>
        <Button> <Heart />React</Button>
      </div>
    )
  }
}

//const App = () => <h1>hello consts</h1>

App.PropTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "defaul value"
}

const Widget = (propiedades) => {
  <input type="text" onChange={propiedades.update}/>
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

export default App
