
  import React from 'react'
  class TodoList extends React.Component{
    constructor(props){
      super (props);
  this.state = {
  tasks:[
      {
        title:'get a shopping cart',
        completed: false,
        id: 123456789
      },
      {
        title:'Buy milk',
        completed: false,
        id: 54545454
      }
  ],
  newTask:''
  } 
    
  this.handleInput=this.handleInput.bind(this);
  this.handleClick=this.handleClick.bind(this);
    }

  handleInput(e){

  }
  handleClick(e){
  }
  render() {
    return(
      <form>  
        <input type="text"/>
        <button type="button" >add</button>
      </form>
    )
  }
  }
export default TodoList;