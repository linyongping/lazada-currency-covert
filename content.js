const [salePrice, originalPrice, discount] = document.querySelectorAll('#module_product_price_1  div  div  span')
let price = { };
if(salePrice) {
    const priceContent = salePrice.innerHTML;
    // 获取货币符号
    price.currency = priceContent.split(/\d+/)[0]
    // 获取货币数字
    price.number = priceContent.split(/[A-Za-z]+/)[1]
}

console.log('price', price);