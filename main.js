const qr = qrcode(0, "L")

const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener('click', () =>{
  const url = input.value
   // ADD DATA TO QR CODE 
  qr.addData(url)

  //CREATE QR CODE

  qr.make()

  //GENERATE QR IMAGE 
  const imageQr = qr.createDataURL()

  document.querySelector('img').src = imageQr

 
})
