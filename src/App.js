//import React, {Component} from 'react';
import React from 'react';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      txt: 'thi',
      cat: 0
    }
    this.fnChange = this.fnChange.bind(this)

  }



  fnChange(){
    this.setState({
      valor: 20
    })
  }
 update(e){
   console.log(e.target);
   this.setState({txt: e.target.value})
 }
  render(){
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
        <Title text="123454784"/>
      </div>
    )
  }
}

//const App = () => <h1>hello consts</h1>

App.PropTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}



const Widget = (propiedades) => {
  return(
  <input type="text" onChange={propiedades.update}/>
)
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

const Title = (prop) => <h1>Title: {prop.text}</h1>

Title.propTypes = {
  //text: React.PropTypes.string.isRequired
  text(prop, propName,component){

    //console.log(prop.propName);

      if(!(propName in prop)){
        return new Error(`missing ${propName}`)
      }
      if(prop[propName].length<6){
      return new Error(`${propName} was to short`)
      }
  }
}

export default App
