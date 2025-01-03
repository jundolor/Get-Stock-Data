export default function getStockData() {
    return {
        name: 'JunTech Consultancy',
        sym: 'QTA',
        price: function(){
            return (Math.random()*5).toFixed(2)
        } , 
        time: function(){
            return new Date().toLocaleTimeString()
        } 
    }
}
  