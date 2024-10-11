import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const filteredCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )
    return filteredCountry.country
  }

  renderCapitals = () => {
    const {activeCapitalId} = this.state

    return (
      <>
        <select
          className="country-capital-selector"
          id="capitals"
          onChange={this.onChangeCapital}
          value={activeCapitalId}
        >
          {countryAndCapitalsList.map(capital => (
            <option key={capital.id} value={capital.id}>
              {capital.capitalDisplayText}
            </option>
          ))}
        </select>
        <label htmlFor="capitals" className="selector-label">
          is capital of which country?
        </label>
      </>
    )
  }

  render() {
    const country = this.getCountry()

    return (
      <div className="capitals-app-container">
        <div className="capitals-card-container">
          <h1 className="card-heading">Countries And Capitals</h1>
          {this.renderCapitals()}
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
