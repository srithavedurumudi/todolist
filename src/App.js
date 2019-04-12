import React, { Component } from 'react';
import logo from './logo.svg';
import DisplayTodoListItem from './DisplayTodoListItem.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
    this.addTodoListItem = this.addTodoListItem.bind(this);
  }
  
  addTodoListItem(e){
    e.preventDefault();
    if(this.inputElement.value!==""){
      var newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };
       this.setState((prevState)=>{
        return{
          items:prevState.items.concat(newItem)
        }
      });
    }
    this.inputElement.value="";
  }
  render(){
    return(
      <div>
        <h1>My TODO List</h1>
        <form onSubmit={this.addTodoListItem}>
          <input ref={item=> this.inputElement=item}
            type="text" name="TodoList"/>
          <button type="submit">Add</button>
        </form>
        <DisplayTodoListItem items={this.state.items} />
      </div>
    );
  }
}


export default App;
