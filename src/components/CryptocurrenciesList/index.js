// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesList} = props
  console.log(cryptocurrenciesList)
  return (
    <div className="currency-card">
      <h1 className="title">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="currency-image"
      />
      <ul className="currency-list-container">
        <div className="currency-table">
          <p className="table-column">CoinType</p>
          <div className="end-columns-container">
            <p className="table-column">USD</p>
            <p className="table-column">EURO</p>
          </div>
        </div>
        {cryptocurrenciesList.map(each => (
          <CryptocurrencyItem currencyDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}
export default CryptocurrenciesList
