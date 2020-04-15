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
    return (
      <div className="todolist">
          <header>TodoList Demo</header>
          <section>
            <InputItem addItem={this.addItem} />
            <List
              list={this.state.list}
              deletItem={this.deletItem}
              toggleCompleted={this.toggleCompleted}
            />
          </section>
      </div>
    );
  }
  //新增一项
  addItem = (title) => {
    if(title == ''){
      alert('list不能为空')
      return
    }
    const list = this.state.list
    this.setState({
      list: list.concat({
        id: Number(Math.random().toString().slice(-5)),
        title,
        completed: false
      })
    })
  }
  //删除
  deletItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id != id)
    })
  }
  //标记已读
  toggleCompleted = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        const completed = item.id === id ? !item.completed : item.completed
        return {
          ...item,
          completed
        }
      })
    })
  }
}


export default App;
