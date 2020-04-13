import React from 'react'
import CheckBox from './CheckBox'


class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
    this.deletHander = this.deletHander.bind(this)
  }

  render() {
    const listItem = this.props.list
    const styleCompleted = {
      textDecoration: "line-through",
      color: "#696969"
    }
    const styleNoCompleted = {
      textDecoration: "none",
      color: "#000"
    }
    return (
      <div>
        <ul>
          {listItem.map(item => <li key={item.id}>
            <CheckBox onChange={this.changeHander.bind(this,item.id)}/>
            <span style={item.completed ? styleCompleted : styleNoCompleted}>
              {item.title}
            </span>
            <a onClick={this.deletHander.bind(this,item.id)}>删除</a>
          </li>)}
        </ul>
      </div>
    )
  }
  deletHander(id, event) {
    const { deletItem } = this.props
    deletItem(id)
  }
  changeHander(id, e) {
    const {list, toggleCompleted } = this.props
    toggleCompleted(id)
  }
}

export default List
