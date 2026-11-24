function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var horas = document.getElementById('horas')
    var data = new Date()
    var hora = data.getHours()

    horas.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 6){
        msg.innerHTML = 'Boa madrugada!'
        img.src = 'madrugada.jpg'
        msg.style.color = 'darkorange'
        horas.style.color = 'darkorange'
        document.body.style.background = 'darkorange'
    } else if (hora >= 6 && hora < 12){
        msg.innerHTML = 'Bom dia!'
        img.src = 'manha.jpg'
        msg.style.color = '#5dade2'
        horas.style.color = '#5dade2'
        document.body.style.background = '#5dade2'
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML = 'Boa tarde!'
        img.src = 'tarde.jpg'
        msg.style.color = 'orange'
        horas.style.color = 'orange'
        document.body.style.background = 'orange'
    }else if (hora >= 18 && hora <= 23){
        msg.innerHTML = 'Boa noite!'
        img.src = 'noite.jpg'
        msg.style.color = 'navy'
        horas.style.color = 'navy'
        document.body.style.background = 'navy'
    }
    }
