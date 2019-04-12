import React, { Component } from 'react';

class DisplayTodoListItem extends Component{
    createTasks(item){
        return <li key={item.key}>{item.text}</li>
    }

    render(){
        var todoItemList = this.props.items;
        var finalItems = todoItemList.map(this.createTasks);

      return(
        <ul>
          {finalItems}
        </ul>
      );
    }
  }

  export default DisplayTodoListItem;