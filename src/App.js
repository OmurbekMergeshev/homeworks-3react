import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Geeks',
      age: 15,
    }
  }

  handleClick = () => {
    this.setState({
      isFinite: true,
    })
  }

render() {
  const {name, age, isFinite} = this.state
  return (
    <div>
      {isFinite ? (
        <p>Имя:{name}, Возраст: {age}</p>
      ) : null }
      <button onClick={this.handleClick}>Нажми меня</button>
    </div>
  )
 }
}

export default MyComponent