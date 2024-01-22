document.addEventListener('DOMContentLoaded',()=>{
    const first = document.getElementsByClassName('container')
    const second = document.getElementsByClassName('container2')
    const third = document.getElementsByClassName('container3')
    const fourth = document.getElementsByClassName('container4')
    const spank = document.getElementById('btn')
    const free = document.getElementById('free')
    const busy = document.getElementById('busy')
    const sure = document.getElementById('sure')
    const nope = document.getElementById('nope')
    const busyText = document.getElementById('busytxt')
    const naughty = document.getElementById('naughty')

    spank.addEventListener('click',(e)=>{
        first[0].style.display = 'none';
        second[0].style.display = 'block';
    })
    free.addEventListener('click',(e)=>{
        second[0].style.display = 'none';
        third[0].style.display = 'block';
    })
    sure.addEventListener('click',(e)=>{
        third[0].style.display = 'none';
        fourth[0].style.display = 'block';
    })
    busy.addEventListener('mouseover',(e)=>{
        busyText.innerHTML = 'No You are NOT. Just CLick FREE 🤨'
        busy.style.cursor = 'not-allowed'
        busyText.style.cursor = 'not-allowed'
        busyText.style.backgroundColor = 'black'
        busyText.style.color = 'white'
    })
    busy.addEventListener('mouseout',(e)=>{
        busyText.innerHTML = 'BUSY'
        busyText.style.backgroundColor = 'white'
        busyText.style.color = 'rgb(0,30,54)'
    })
    nope.addEventListener('mouseover',(e)=>{
        nope.style.display = 'none'
        naughty.style.display = 'block'
        nope.style.cursor = 'not-allowed'
        naughty.style.cursor = 'not-allowed'
    })
    naughty.addEventListener('mouseout',(e)=>{
        nope.style.display = 'block'
        naughty.style.display = 'none'
    })
})
