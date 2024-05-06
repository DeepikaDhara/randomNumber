// Write your code here
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component {
  state = {
    value: 0,
  }
  onClickGenerator = () => {
    const randomNumber =  Math.ceil(Math.random() * 100)
    this.setState({
      value:randomNumber,
    })
  }
  render() {
    const {value} = this.state
    return (
      <div className="container">
        <h1 className="heading">Random Number</h1>
        <p className="Paragraph">Generate a random number in the range of 0 to 100</p>
        <button
          className="button"
          type="button"
          onClick={this.onClickGenerator}
        >
          Generate
        </button>
        <h1 className="number">{value}</h1>
      </div>
    )
  }
}
export default RandomNumberGenerator
