import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.onChangeType('all')

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  adopt = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if(pet.id == id){
          return {
            ...pet, isAdopted: !pet.isAdopted
          }
        } else {
          return pet
        }
      })
    })
  }

  onChangeType = (value) => {
    if(value === 'all'){
      fetch('/api/pets')
      .then((res)=>{
        return res.json()
      })
      .then((pets)=>{
        return this.setState ({
          pets: pets,
          filters: {
            type: value
          }
        })
      })
    } else {
      fetch(`/api/pets?type=${value}`)
      .then((res)=>{
        return res.json()
      })
      .then((pets)=>{
        return this.setState ({
          pets: pets,
          filters: {
            type: value
          }
        })
      })
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser adopt={this.adopt} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
