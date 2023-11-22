/*
5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

*/
let d = document
let horasInput = d.getElementById('horasInput')
let minutosInput = d.getElementById('minutosInput')
let segundosInput = d.getElementById('segundosInput')
let setearCronometro = d.getElementById('setearCronometro')


let startBtn = d.getElementById('start')
let pauseBtn = d.getElementById('pause')
let resetBtn = d.getElementById('reset')

let segundosEl = d.getElementById('segundos')
let minutosEl = d.getElementById('minutos')
let horasEl = d.getElementById('horas')


let minutos = 0;
let segundos = 0;
let horas = 0;


let intervalo;

d.addEventListener('click',(e)=>{
    
    if(e.target === startBtn){
        console.log('Start')
        startCro(segundos,minutos,horas)
    }else if(e.target === pauseBtn){
        clearInterval(intervalo)
        console.log(minutos,segundos,horas)
    }else if(e.target === resetBtn){
        clearInterval(intervalo)
        horas = 0
        minutos = 0
        segundos = 0

        minutosEl.innerHTML = '00:'
        horasEl.innerHTML = '00:'
        segundosEl.innerHTML = '00'
    }else if(e.target === setearCronometro){
        minutos = parseInt(minutosInput.value) || 59
        segundos = parseInt(segundosInput.value) || 59
        horas = parseInt(horasInput.value) || 0
        
        segundosEl.innerHTML = `${segundos < 10 ? '0' : ''}${segundos}`
        minutosEl.innerHTML = `${minutos < 10 ? '0' : ''}${minutos}:`
        horas.innerHTML = `${horas < 10 ? '0' : ''}${horas}:`
    }
})

let startCro = () => {
    intervalo = setInterval(()=>{
        segundosEl.innerHTML = `${segundos < 10 ? '0' : ''}${segundos}`
        if(segundos !== 0){
            segundos -= 1
        }else{
            segundos = 59
            
            if(minutos !== 0){
                minutos -= 1
                minutosEl.innerHTML = `${minutos < 10 ? '0' : ''}${minutos}:`
            }else{
                minutos = 0

                if(horas !== 0){
                    horas -= 1
                    horas.innerHTML = `${horas < 10 ? '0' : ''}${horas}:`
                }else{
                    horas = 0;
                }
            }
        }
    },1000)
    
}

