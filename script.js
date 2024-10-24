//Seleccionar un numero al azar
let numAzar = Math.floor(Math.random()*100) +1
let numEntrada = document.getElementById('num_pantalla')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chekearRes(){
   
        let numIngresado = parseInt(numEntrada.value)
    if(intentos < 10){

        if(numIngresado < 1 || numIngresado > 100 || isNaN(numIngresado)){
            mensaje.textContent = 'Por favor ingrese un numero valido entre 1 y 100'
            mensaje.style.color = 'red'
            return
        }
        if(numIngresado === numAzar){
            mensaje.textContent = 'FELICITACIONES!!! ADIVINASTE EN NUMERO'
            mensaje.style.color = 'green'
            numEntrada.disabled = true
        
        }else if(numIngresado < numAzar){
            mensaje.textContent = '¡Más alto! El número es mayor al que ingresaste'
            mensaje.style.color = 'red'
        }else {
            mensaje.textContent = ' ¡Mas bajo! El numero es mejor al que ingresaste'
            mensaje.style.color = 'red'
        }
        intentos++     
        intento.textContent = intentos
  }else{
    console.log('Perdiste!!')
    mensaje.textContent = 'Lo sentimos tus intentos terminaron '
    mensaje.style.color = 'red'
  }

  
}