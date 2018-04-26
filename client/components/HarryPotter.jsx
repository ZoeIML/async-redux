import React from 'react'
import {connect} from 'react-redux'

const HarryPotter = ({characters, targetChar}) => (
  <div>
    {characters.map(character => {
      if (character.name === targetChar) {
        return <p key={character.name}>{character.name} {character.species}</p>
      }
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default connect(
  mapStateToProps
)(HarryPotter)
