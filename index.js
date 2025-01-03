import  getStockData  from './fakeStockAPI.js'
console.log(getStockData)

const startGetStockData = document.getElementById("start-get-stock-data")
const endGetStockData = document.getElementById("end-get-stock-data")

let stockTicker = null
let prevPrice = null


startGetStockData.addEventListener("click", function(){
  let updatedStockData = getStockData()
  renderStockTicker(updatedStockData)//initial update
  stockTicker = setInterval(renderStockTicker, 5000, updatedStockData)
})

endGetStockData.addEventListener("click", function(){
  console.log('stop')
  clearInterval(stockTicker)
})

function renderStockTicker(stockData) {
    const { name, sym, price, time } = stockData
 
    const updatedPrice = Number(price())
    console.log(typeof updatedPrice)

    const priceDirection = updatedPrice < prevPrice ? '⬇️': updatedPrice > prevPrice ? '⬆️': '⏸️'

    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    stockDisplayName.textContent = name
    stockDisplaySymbol.textContent = sym
    stockDisplayPrice.textContent = updatedPrice
    stockDisplayPriceIcon.textContent = priceDirection
    stockDisplayTime.textContent = time()


    prevPrice = updatedPrice
}

