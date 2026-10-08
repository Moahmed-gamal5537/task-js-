const productName = "phone"
let unitPrice = 2000
let quantity = 0.25
let memberStatus = true
let subtotal = unitPrice *  quantity
let discount= 0
let afterDiscount
let shippingfee = 0
let finalTotal
if(unitPrice <= 0 || quantity <= 0){
    console.log("Invalid order" )
}
else{
    if(subtotal>=1000){
       discount=subtotal*0.10
   }
}
  afterDiscount = subtotal - discount
 if( afterDiscount <= 500){
    shippingfee = 50
}
 finalTotal = afterDiscount +shippingfee
 console.log("productname =", productName )
 console.log("unit price = " ,unitPrice)
 console.log("Quantity =" , quantity  )
 console.log("Membar status = " , memberStatus)
 console.log("Subtotal = " , subtotal)
 console.log("Discount = " , discount)
 console.log("shippingfee" , shippingfee)
 console.log("Afterdiscount = " , afterDiscount)
 console.log("Finaltotal = " , finalTotal)


