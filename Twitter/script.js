let active = document.getElementById("active");
let FirstActive = document.getElementById("active1");
let line = document.getElementById("line");
let linesecond = document.getElementById("linesecond")

  active.onclick = function () {
    this.style.color = "white"
    line.style.display = "block"
    FirstActive.style.color = "rgba(255, 255, 255, 0.493)"
    linesecond.style.display = "none"
  }
  FirstActive.onclick = function () {
    this.style.color = "white"
    linesecond.style.display = "block"
    active.style.color = "rgba(255, 255, 255, 0.493)"
    line.style.display = "none"

  } 

let showMore = document.getElementById('showMore');
let clickShowMore = document.getElementById('clickShowMore');

showMore.onclick = function () {
  clickShowMore.style.display = 'block'

  this.style.display = 'none'
}



const wrapper = document.querySelector(".wrapper"),
  editableInput = wrapper.querySelector(".editable"),
  readonlyInput = wrapper.querySelector(".readonly"),
  placeholder = wrapper.querySelector(".placeholder"),
  counter = wrapper.querySelector(".counter"),
  button = wrapper.querySelector("button");

editableInput.onfocus = () => {
  placeholder.style.color = "#c5ccd3";
}
editableInput.onblur = () => {
  placeholder.style.color = "#98a5b1";
}

editableInput.onkeyup = (e) => {
  let element = e.target;
  validated(element);
}
editableInput.onkeypress = (e) => {
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
}

function validated(element) {
  let text;
  let maxLength = 100;
  let currentlength = element.innerText.length;

  if (currentlength <= 0) {
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  } else {
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }

  counter.innerText = maxLength - currentlength;

  if (currentlength > maxLength) {
    let overText = element.innerText.substr(maxLength); //extracting over texts
    overText = `<span class="highlight">${overText}</span>`; //creating new span and passing over texts
    text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  } else {
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }
  readonlyInput.innerHTML = text; //replacing innerHTML of readonly div with textTag value
}







let LetOpen = document.getElementById('LetOpen')
let LetOpentwo = document.getElementById('LetOpentwo')

let LetOpeninput = document.getElementById('LetOpeninput')

LetOpeninput.onclick = function () {
  LetOpen.style.display = 'block'

  LetOpentwo.style.display = 'block'

}





let TweetShow = document.getElementById('TweetShow')
let ClickMe = document.getElementById('ClickMe');

TweetShow.onclick = function () {
  ClickMe.style.display = 'block'

  if(LetOpeninput.value = ""){
      alert("Enter a word")
  }
}








let twitterCycle = document.getElementById('twitterCycle');
let Everyone = document.getElementById('Everyone');


twitterCycle.onclick = function () {
  Everyone.innerText = 'hello';
}

let ClickSearch = document.getElementById('ClickSearch')
let SearchPeople = document.getElementById('SearchPeople');


ClickSearch.onclick = function () {

  SearchPeople.style.display = 'block';

}
document.body.addEventListener("keyup", (ev) =>{
  console.log(ev.key)
})

let Recently = document.getElementById('Recently');
let Trying = document.getElementById('Trying');
let ClearAll = document.getElementById('ClearAll');
let akoko = document.getElementById('akoko');
let rightFlx = document.getElementById('rightFlx') 

ClearAll.onclick = function () {
  akoko.style.display = 'none'
  this.style.display = 'none'
  SearchPeople.style.height = '10vh'
  Trying.style.display = 'block'
  Recently.style.display = 'none'
}
rightFlx.onclick = function(){
  SearchPeople.style.display = 'none'
}



let ClearBtn = document.getElementById('ClearBtn');
let ClearBtn2 = document.getElementById('ClearBtn2');
let ClearBtn3 = document.getElementById('ClearBtn3');
let SearchFlex = document.getElementById('SearchFlex')
let SearchFlex2 = document.getElementById('SearchFlex2')
let SearchFlex3 = document.getElementById('SearchFlex3')


ClearBtn.onclick = function () {
  SearchFlex.style.display = 'none'
}
ClearBtn2.onclick = function () {
  SearchFlex2.style.display = 'none'
}

ClearBtn3.onclick = function () {
  SearchFlex3.style.display = 'none'
}




let Green = document.getElementById('Green');

Green.onclick = function () {
  this.style.color = 'rgb(23 191 99)'
}






let CloseBox = document.getElementById('CloseBox');
let messageBox = document.getElementById('messageBox');
let msgTxt = document.getElementById('msgTxt');

CloseBox.onclick = function () {
  // this.style.rotate = '180deg'
  // msgTxt.style.display = 'block'
  messageBox.classList.toggle("open");
  // if(this.style === '180deg' ){
  //   this.style.rotate = ''
  // }
}
CloseBox.onclick = function () {
  this.style.rotate = '180deg'
  messageBox.classList.toggle("open");

}



let Wrapper = document.getElementById('Wrapper');
let TweetModal = document.getElementById('TweetModal');
let NoOne = document.getElementById('NoOne')



TweetModal.onclick = function () {
  Wrapper.style.display = "block"
  overlay.style.display = 'block'
}

NoOne.onclick = function () {
  wrapper.style.display = "none"
}




let showMe = document.getElementById('showMe');
let poppup = document.getElementById('poppup');
let overlay = document.getElementById('overlay');


showMe.onclick = function () {
  poppup.style.display = "block"

  overlay.style.display = "block"
}







var BuTTon = document.getElementById("BuTTon")


BuTTon.addEventListener('click', () => {
  BuTTon.innerText = 'following';
  BuTTon.style.border = '1px solid rgb(29, 161, 242)'
})



const navBtn = document.querySelector('.toggle')
const links = document.querySelector('.nav-links')

navBtn.addEventListener('click', () => {
  console.log('okay');
  links.classList.toggle('show')
})
















// Explore page

let Explore = document.getElementById('Explore');
let HOME = document.getElementById('HOME')
let secondOne = document.getElementById('secondOne');

Explore.onclick = function(){
  HOME.style.visibility = 'hidden'
  secondOne.visibility = 'visible'
}