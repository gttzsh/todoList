import React from 'react'

class InputItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

  }
  render() {
    return (
      <div>
        <input className="inputItem" value={this.state.title} onChange={this.changeHander}/>
        <button onClick={this.clickHander}>新增</button>
      </div>
    )
  }
  changeHander = (e) => {
    const newTitle = e.target.value
    this.setState({
      title: newTitle
    })
    //console.log("title",this.state.title);
  }
  clickHander = () => {
    //console.log("InputItem",this.props)
    const { addItem } = this.props
    addItem(this.state.title)

    this.setState({
      title: ''
    })


  }
}

export default InputItem
