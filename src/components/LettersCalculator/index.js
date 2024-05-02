import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, input: ''}

  changer = event => {
    console.log(event.target.value)
    const input = event.target.value
    this.setState({input, count: input.length})
  }

  render() {
    const {count, input} = this.state

    return (
      <div className="con">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phraseInput">Enter the phrase</label>
          <input
            id="phraseInput"
            value={input}
            placeholder="Enter the phrase"
            type="search"
            onChange={this.changer}
          />
          <div className="letter">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="logo"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
