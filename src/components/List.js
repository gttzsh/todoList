import React from 'react'


class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const listItem = this.props.list
    console.log("list.js", listItem);
    return (
      <div>
        <ul>
          {listItem.map(item => <li key={item.id}><input type="checkbox"/>{item.title}<span>删除</span></li>)}
        </ul>
      </div>
    )

  }
}

export default List
