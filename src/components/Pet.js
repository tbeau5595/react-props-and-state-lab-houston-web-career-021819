import React from 'react'

class Pet extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.gender === 'male') ? '♂': '♀'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button disabled={!this.props.isAdopted} className="ui button">Already adopted</button>
          <button onClick={() => this.props.adopt(this.props.id)} disabled={this.props.isAdopted} className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
