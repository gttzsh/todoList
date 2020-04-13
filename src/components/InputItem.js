import React from 'react'

class InputItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

  }
  render() {
    console.log("InputItem.js", this.props);
    return (
      <div><input type="text"/><button>新增</button></div>
    )
  }
}

export default InputItem
