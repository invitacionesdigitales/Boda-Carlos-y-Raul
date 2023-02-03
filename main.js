
    const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $finalMessage = document.querySelector('.final-sms');
    let boton = document.querySelector("#btn")

    boton.addEventListener("click", () => {

        Swal.fire({
          title: '<strong>VER LA UBICACION<u></u></strong>',
          icon: 'success',
          html:
            'INGRESÁ' +
            '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d819.1458661178114!2d-56.27245400000001!3d-34.79126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d3c0768b0dc7%3A0x4128b3d844f4edff!2sChacra%20La%20Rinconada!5e0!3m2!1ses!2sar!4v1675425114951!5m2!1ses!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
            'Podes ampliar el mapa',
            
            
        })
      });


    
    
    //Fecha a futuro
const countdownDate = new Date('April 1 2023 18:43:30 GMT-0300').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);