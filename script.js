const darkbtn = document.querySelector('.darkmode-btn');
const body = document.querySelector('body');
const logo = document.querySelector('#logo-img');

darkLoad();

darkbtn.addEventListener('click', e =>{
    body.classList.toggle('darkmode')
    let darkStatus = body.classList.contains('darkmode');
    darkStore(darkStatus);
    if(!darkStatus){
        //cambiar a logo light
        logo.src="./assets/logo-black.png";
    }else{
        //cambiar a logo dark
        logo.src="./assets/logo.png";
    }

});

function darkLoad(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        darkStore('false');
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
        logo.src="./assets/logo.png"
    }
}

function darkStore(value){
    localStorage.setItem('darkmode', value)
}