import React from 'react'

class CheckBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }

  }
  render() {
    return(
        <input type="checkbox" checked={this.state.checked} onChange={this.checkHander}/>
    )
  }
  checkHander = () => {
    const newChecked = !this.state.checked
    this.setState({
      checked: newChecked
    })
    this.props.onChange(newChecked)
  }
}

export default CheckBox
