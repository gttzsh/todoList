import React from 'react'
import './style.css'
import InputItem from './components/InputItem'
import List from './components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          title: '标题一',
          completed: false
        },
        {
          id: 2,
          title: '标题二',
          completed: false
        },
        {
          id: 3,
          title: '标题三',
          completed: false
        }
      ]
    }
  }

  render() {
    console.log("app.js", this.props);
    console.log("app.js", this.state.list);
    return (
      <div className="todolist">
          <header>TodoList Demo</header>
          <section>
            <InputItem addItem={this.addItem} />
            <List list={this.state.list}/>
          </section>
      </div>
    );
  }
  //新增一项
  addItem = () => {
    const list = this.state.listItem
    console.log(list);
  }
}


export default App;
