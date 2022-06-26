const innerCont = document.querySelector('.inner-content');
const homebtn = document.querySelector('#homebtn');
const aboutbtn = document.querySelector('#aboutbtn');
const resumebtn = document.querySelector('#resumebtn');
const contactInfoBtn = document.querySelector('#contactinfobtn');




resumebtn.addEventListener('click', () => {
    dispResume(innerCont);
});

contactInfoBtn.addEventListener('click', () =>{
    dispContactInfo(innerCont);
});

homebtn.addEventListener('click', () => {
    dispHome(innerCont);
});

aboutbtn.addEventListener('click', () => {
    dispAbout(innerCont);
});


const dispHome = (ele) => {

    ele.innerHTML = '';
    ele.className = 'inner-content';
    let a = document.createElement('p');
    a.innerHTML="<strong>Hello, My my name is Liam O'Brien</strong>";
    ele.appendChild(a);
    let p = document.createElement('p');
    p.innerHTML = 'I am a computer science and IT student with a passion for web development and network security.  Thank you for visiting my site';
    ele.appendChild(p);
    console.log(p.innerHTML);
    
};

const dispAbout = (ele) => {
    ele.innerHTML = '';
    ele.className = 'about-content';
    let h2 = document.createElement('h2');
    h2.innerHTML ='About Me';
    ele.appendChild(h2);
    let a = document.createElement('a');
    a.innerHTML = '<strong>Personal: </strong>';
    ele.appendChild(a);
    let p = document.createElement('p');
    p.innerHTML = "Thanks for stopping by my site, I am Liam O'Brien.  " + 
    "I am a husband, father, programmer, gamer, " +
     "and climber with a passion pentesting." + 
    "I am also a huge foodie and coffee addict with a real love for cooking";
    ele.appendChild(p);
    ele.appendChild(document.createElement('div'));
    a = document.createElement('a');
    a.innerHTML = '<strong>Professional: </strong>';
    ele.appendChild(a);
    p = document.createElement('p');
    p.innerHTML = "I have been working in web development since 2017 " +
    "starting with my work with Mutual Benefit Group.  " +
    "I have worked two years as help desk service rep with Lincoln Financial " +
    "working directly with end users helping them troubleshoot web issues. ";
    ele.appendChild(p);
    ele.appendChild(document.createElement('div'));
    a = document.createElement('a');
    a.innerHTML = '<strong>Education: </strong>'
    ele.appendChild(a);
    p = document.createElement('p');
    p.innerHTML = 'I spent 3 years in the Computer Science program at Temple ' +
    'before switching to an IT major with a Cyber Security certification.  ' +
    'I left school when the pandemic hit and have continued to persue education on my own.  '+
    'Most recently I have began training for a CCNA and completed the Odin Project.';
    ele.appendChild(p);


};

const dispResume = (ele) => {
    
};

const dispContactInfo = (ele) => {

    ele.innerHTML = '';
    ele.className = 'inner-content'
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Contact Me';
    ele.appendChild(h2);
    let a = document.createElement('a');
    a.innerHTML = '<strong>Email: </strong>liam.d.obrien1998@gmail.com'
    ele.appendChild(a);
};
