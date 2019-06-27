import React from 'react';

import Auth from '../auth/auth.js';

import styles from './todo.module.scss';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      toDoItems: []
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    e.target.reset();
    let item = { title:this.state.item, status:false };
    this.setState({toDoItems:[...this.state.toDoItems, item]});
  };

  handleChange = (e) => {
    this.setState( {item:e.target.value} );
  }

  toggle = (e,id) => {
    e.preventDefault();
    let toDoItems = this.state.toDoItems.map( (item,idx) =>
      idx === id ? {title:item.title, status:!item.status} : item
    );
    this.setState({toDoItems});
  };

  render() {
    return (
      <section className={styles.todo}>

        <Auth capability="read">
          {this.state.toDoItems.map((item, idx) =>
            <div key={idx} onClick={(e) => this.toggle(e, idx)}>
              <span className={styles[`complete-${item.status}`]}> {item.title} </span>
            </div>
          )}
        </Auth>

        <Auth capability="create">
          <form onSubmit={this.handleForm}>
            <input
              onChange={this.handleChange}
              name="item"
              placeholder="Add To Do List Item Here"
            />
          </form>
        </Auth>

      </section>
    );
  }
};

export default Todo;
