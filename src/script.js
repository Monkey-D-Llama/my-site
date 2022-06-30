import main from './snake/game.js';



const innerCont = document.querySelector('.inner-content');
const homebtn = document.querySelector('#homebtn');
const aboutbtn = document.querySelector('#aboutbtn');
const resumebtn = document.querySelector('#resumebtn');
const contactInfoBtn = document.querySelector('#contactinfobtn');
const appsbtn = document.querySelector('#appsbtn');

let apps = [
            {
                name: 'snake',
                type: 'game',
                img: '',
                click: (ele) => {
                    
                    ele.innerHTML = ''
                    let div = document.createElement('div');
                    ele.className = 'snake-container';
                    div.id = 'game-board';
                    ele.appendChild(div);
                    window.requestAnimationFrame(main);
                    }
            },
            ];





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

appsbtn.addEventListener('click', () => {
    dispApps(innerCont);
});


const dispHome = (ele) => {

    ele.innerHTML = '';
    ele.className = 'inner-content';
    let h2 = document.createElement('h2');
    h2.innerHTML = 'HOME';
    ele.appendChild(h2);
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
    a.innerHTML = '<strong>Professional: </strong>';
    ele.appendChild(a);
    let p = document.createElement('p');
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


    ele.appendChild(document.createElement('div'));
    a = document.createElement('a');
    a.innerHTML = '<strong>Personal: </strong>';
    ele.appendChild(a);
    p = document.createElement('p');
    p.innerHTML = "Thanks for stopping by my site, I am Liam O'Brien.  " + 
    "I am a husband, father, programmer, gamer, " +
     "and climber with a passion pentesting." + 
    "I am also a massive foodie and coffee connoisseur with a real love for cooking";
    ele.appendChild(p);


};

const dispResume = (ele) => {
    ele.innerHTML = '';
    ele.className = 'resume';
    let div = document.createElement('div')
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Resume';
    div.appendChild(h1);
    ele.appendChild(div);
    let h3 = document.createElement('h3');
    h3.innerHTML = 'OVERVIEW';
    ele.appendChild(h3);
    let p = document.createElement('p');
    p.innerHTML = 'Quick learner with a technical aptitude toward hardware, networking, machinery and software.  '+
    'Skilled in problem solving and comfortable working with others and individually.  '+
    'Willing to work evenings, weekends and extended hours as needed.';
    ele.appendChild(p);
    ele.appendChild(document.createElement('div'));
    h3 = document.createElement('h3');
    h3.innerHTML = 'EXPERIENCE';
    ele.appendChild(h3);
    div = document.createElement('div');
    let a = document.createElement('a');
    a.innerHTML = '<strong>Lincoln Financial, Radnor, PA </strong>'+
    '- Support Desk Technician';
    div.appendChild(a);


    let list = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = 'First line of support for customers experiencing technical '+
    'issues accessing or using their on-line account';
    list.appendChild(li);


    li = document.createElement('li');
    li.innerHTML = 'Adept at conversing with customers with varying levels of knowledge '+
    'to assist them in a positive and supportive manner';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'Working with third party brokers to establish online accounts';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'ADT, ARDIS, WFM, JIRA, Converge3';
    list.appendChild(li);

    div.appendChild(list);
    ele.appendChild(div);

    div = document.createElement('div');

    a = document.createElement('a');
    a.innerHTML = '<strong>Mutual Benefit Group, Huntingdon, PA </strong>'+
    '- .NET web developer';
    div.appendChild(a);

    list = document.createElement('ul');


    li = document.createElement('li');
    li.innerHTML = 'Seasonal employment over four consecutive summers, and one winter';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'Translating company website backend from Visual Basic to C#';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'Employee web page developement, created a gui for employees to interact with SQL and AS400 information';
    list.appendChild(li);
    
    li = document.createElement('li');
    li.innerHTML = 'Design, coding and testing of api for data coming in from autoinsurance companies '+
    'to internal SQL databases that we were tasked with maintaining';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'Developed a web page for insurance agents to access and edit insurance files using HTML forms';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'Training and support of end users on systems I developed';
    list.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = 'Reviewing and presenting options and giving recommendations for solutions when '+
    'given a project or task, including demonstrating advantages and disadvantages of options set before us';
    list.appendChild(li);


    div.appendChild(list);
    ele.appendChild(div);

    h3 = document.createElement('h3');
    h3.innerHTML = 'EDUCATION';
    ele.appendChild(h3);


    div = document.createElement('div');
    a = document.createElement('a');
    a.innerHTML = '<strong>Temple University, Philadelphia PA </strong>'+
    '- College of Science and Technology';

    div.appendChild(a);
    list = document.createElement('ul');
    li = document.createElement('li');
    li.innerHTML = 'Completed 86 credits as part-time student towars a '+
    'Bachelor of Science in Information Technology and Science '+
    'with a focus on cyber security.';
    list.appendChild(li);
    div.appendChild(list);
    ele.appendChild(div);


    h3 = document.createElement('h3');
    h3.innerHTML = 'TECHNICAL SKILLS';
    ele.appendChild(h3);
    

    div = document.createElement('div');
    //create the table here (gonna be fun)
    ele.appendChild(div);

    a = document.createElement('a');
    a.href = './src/LO Resume.pdf';
    a.innerHTML = 'download pdf';
    ele.appendChild(a);
};

const dispContactInfo = (ele) => {

    ele.innerHTML = '';
    ele.className = 'contact-info';
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Contact Me';
    ele.appendChild(h2);
    let a = document.createElement('a');
    a.innerHTML = '<strong>Email: </strong>liam.d.obrien1998@gmail.com'
    ele.appendChild(a);
};

const dispApps = (ele) => {
    ele.innerHTML = '';
    ele.className = 'apps';
    let div = document.createElement('div');
    div.addEventListener('click', () => {
        apps[0].click(ele)
    });
    let a = document.createElement('a');
    a.innerHTML = apps[0].name;
    div.appendChild(a);
    ele.appendChild(div);
}

    








dispHome(innerCont);
