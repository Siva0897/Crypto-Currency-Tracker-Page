// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptocurrenciesList: []}

  componentDidMount = () => {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({cryptocurrenciesList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptocurrenciesList} = this.state
    return isLoading ? (
      <div>
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="bg-container">
        <CryptocurrenciesList cryptocurrenciesList={cryptocurrenciesList} />
      </div>
    )
  }
}
export default CryptocurrencyTracker
