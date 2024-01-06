const questions=[{
    question:" Inside which HTML element do we put the JavaScript?",
    options:["javascript","script","js","scripting"],
    answer:["script"]
},
{
    question:" Which command creates a new button?",
    options:['let button = document.new("button");',"let button = document.createElement('');","let button = document.createElement('button');","let button = document.makeElement('{button}');"],
    answer:["let button = document.createElement('button');"]
},
{
    question:" Which command adds the button element  we just created to the DOM?",
    options:["document.body.appendChild(button);","document.insert(button);","window.appendChild(button);","document.insertBefore(button);"],
    answer:["document.body.appendChild(button);"]
},
{
    question:" Which method selects the first matching element in the document?",
    options:["document.querySelectorAll()","document.getElementsByClass()","document.querySelector()","document.getElementsByTagName()"],
    answer:["document.querySelector()"]
},
{
    question:" Every node in the DOM represents what?",
    options:["a link","a section","a view","an HTML element"],
    answer:["an HTML element"]
},
{
    question:" What method allows us to add an attribute to a DOM element?",
    options:["element.getAttribute()","element.createAttribute()","element.setAttribute()","element.makeAttribute()"],
    answer:["element.setAttribute()"]
},
{
    question:" What prefix indicates that an HTML attribute is intended to store information for computing?",
    options:["info-","db-","data-","query-"],
    answer:["data-"]
},
{
    question:" Which event is related to the keyboard?",
    options:["onfocus","onclick","onkeydown","onkeypress"],
    answer:["onkeypress"]
},
{
    question:" How can we access the data attributes of an HTML element from within JavaScript?",
    options:["element.getData()","element.dataset","element.getAttribute","element.fetchData()"],
    answer:["element.dataset"]
},
{
    question:" How to check the number of elements inside the HTML form?",
    options:["document.form.elements.count","document.form.count","document.form.length","document.form.elements.length"],
    answer:["document.form.elements.length"]
}]


let score=0;
let currentQuestionNumber=1;
const question= document.getElementById('question');
const quesnum = document.getElementById('quesno')
const op1= document.getElementById('o1');
const op2= document.getElementById('o2');
const op3= document.getElementById('o3');
const op4= document.getElementById('o4');
const progress = document.getElementById('Progress');
const Score= document.getElementById('Score') ;
const wordProgress = document.getElementById('wordProgress');
const wordScore = document.getElementById('wordScore');
const wordQ = document.getElementById('wordQ');
const webQuiz= document.getElementById('webQuiz')


const nextques = (Qno)=>{
    if (Qno>questions.length){
        const elementList = [op1, op2, op3, op4, progress, Score, wordProgress, wordScore, wordQ ];

        for (let i = 0; i < elementList.length; i++) {
            elementList[i].style.display = 'none';
        }
        webQuiz.innerText= `Quiz completed with a score of ${score}`;

        // progress.innerText='';
        // Score.innerText='';


    }else{
        clearFormat()
        questionData = questions[currentQuestionNumber-1];
        question.innerText= questionData.question;
        quesnum.innerText= currentQuestionNumber;
        op1.innerText= questionData.options[0];
        op2.innerText= questionData.options[1];
        op3.innerText= questionData.options[2];
        op4.innerText= questionData.options[3];
        progress.innerText= currentQuestionNumber;
        Score.innerText=score;
        enable()
    }
}



const clearFormat=()=>{
    const buttonList = [op1, op2, op3, op4];

    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].style.backgroundColor = 'white';
    }
}

const disable = () => {
    const buttonList = [op1, op2, op3, op4];

    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].disabled = true;
    }
};
const enable = () => {
    const buttonList = [op1, op2, op3, op4];

    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].disabled = false;
    }
};

const myTimeout=()=>{
    setTimeout(()=>nextques(currentQuestionNumber),1000)
}


const check = (event) => {
    if (event.target.textContent == questionData.answer){
        event.target.style.backgroundColor='green';
        score+=10
        currentQuestionNumber+=1
        disable()
        myTimeout()

    }else{
        event.target.style.backgroundColor='red';
        currentQuestionNumber+=1
        disable()
        myTimeout()
    }
}
op1.addEventListener('click', (e)=> check(e));
op2.addEventListener('click', (ev)=>check(ev));
op3.addEventListener('click', (eve)=>check(eve));
op4.addEventListener('click', (even)=>check(even));


nextques(currentQuestionNumber)


// let current1 = document.getElementById('o1');
// current1.addEventListener('click', function(e) {
//     const clickedElement = e.target;
//     if (clickedElement.innerText==questionData.answer){
//         clickedElement.style.backgroundColor='green';
//         score=score+10

//     }else{
//         clickedElement.style.backgroundColor='red';
//     }
//     console.log(clickedElement);
// });
// let current2 = document.getElementById('o2');
// current2.addEventListener('click', function(ev) {
//     const clickedElement = ev.target;
//     if (clickedElement.innerText==questionData.answer){
//         clickedElement.style.backgroundColor='green';
//         score=score+10
//     }else{
//         clickedElement.style.backgroundColor='red';
//     }
//     console.log(clickedElement);
// });
// let current3 = document.getElementById('o3');
// current3.addEventListener('click', function(eve) {
//     const clickedElement = eve.target;
//     if (clickedElement.innerText==questionData.answer){
//         clickedElement.style.backgroundColor='green';
//         score=score+10
//         Score.innerText=score;
//     }else{
//         clickedElement.style.backgroundColor='red';
//     }
//     console.log(clickedElement);
// });
// let current4 = document.getElementById('o4');
// current4.addEventListener('click', function(even) {
//     const clickedElement = even.target;
//     if (clickedElement.innerText==questionData.answer){
//         clickedElement.style.backgroundColor='green';
//         score=score+10
//     }else{
//         clickedElement.style.backgroundColor='red';
//     }
//     console.log(clickedElement);
// });
// // console.log(current)
// // current.onclick=(e)=>{
// //     if (current.innerText===questionData.answer){
// //         console.log(current)
// //         e.target.style.backgroundColor='green';
// //         score=score+10;

// //     }else{
// //         e.target.style.backgroundColor='red';
// //     }
// // function check(id){
// //     if (id.value==questionData.answer){
// //         console.log(id.value)
// //         id.style.backgroundColor='green';
// //     }else{
// //         id.style.backgroundColor='red';
// //         console.log(id.value)
// //     }
// // }
