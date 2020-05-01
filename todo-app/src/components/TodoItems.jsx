import React, { Component } from 'react';

class TodoItems extends Component {
  render() {
      const {data} = this.props;
    return (
      <div>
        {data.map(item => <div key='{item.id}'>{item.title}</div>)}
      </div>
    );
  }
}

export default TodoItems;
