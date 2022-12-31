// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="list-item">
      <img src={currencyLogo} alt={currencyName} className="currency-logo" />
      <p className="currency-name">{currencyName}</p>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
