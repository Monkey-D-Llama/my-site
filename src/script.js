const innerCont = document.querySelector('.inner-content');
const homebtn = document.querySelector('#homebtn');
homebtn.addEventListener('click', () => {
    console.log('click');
    innerCont.innerHTML = dispHome();
});
const dispHome = () => {
    let ele = document.createElement('div')
    ele.innerHTML = '';
    let a = document.createElement('p');
    a.innerHTML="<strong>Hello, My my name is Liam O'Brien</strong>";
    ele.appendChild(a);
    let p = document.createElement('p');
    p.innerHTML = 'I am a computer science and IT student with a passion for web development and network security.  Thank you for visiting my site';
    ele.appendChild(p);
    console.log(p.innerHTML);
    return ele.innerHTML;
};

const dispAbout = (ele) => {

};

const dispResume = (ele) => {

};

