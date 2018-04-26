import React from 'react'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions'

import HarryPotter from './HarryPotter'

class LoadHarryPotter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      character: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (e) {
    e.preventDefault()
    this.setState({
      character: e.currentTarget.value
    })
  }
  render () {
    return (
      <div>
        <p>Enter a character</p>
        <input onChange={this.handleOnChange}></input>
        <button onClick={() => this.props.dispatch(fetchCharacters(this.state.character))}>
          Fetch Character
        </button>
        <HarryPotter targetChar={this.state.character} />
      </div>
    )
  }
}

export default connect()(LoadHarryPotter)
