//const socket=io()
const socketURL = 'https://neetumaheshwari.github.io/Ayaan_chat/3000' // whatever your socket port
const socket = io(socketURL);
socket.on("someEvent", data => {
    console.log('I can now do something with ');
});
let name;
let textarea = document.querySelector('#textarea')
let messsageArea= document.querySelector('.message_area')
do{
    name = prompt('Please enter your name to enter:  ')
}while(!name)


textarea.addEventListener('keyup' , (e) => {
    if(e.key==='Enter'){
        sendMessage(e.target.value)
        document.getElementById('textarea').value="";
    }
})



function sendMessage(messsage){
    let msg ={
        user: name,
        messsage: messsage.trim()
    }
    appendMessage1(msg,'right')
    scrollareatobottom()  



    //send to server

    socket.emit('message',msg)
}

function appendMessage1(msg,type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className,'js_message1')


    let markup =`
    <h4>${msg.user}</h4>
    <p>${msg.messsage}
    `
    mainDiv.innerHTML = markup
    messsageArea.appendChild(mainDiv)
} 

function appendMessage2(msg,type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className,'js_message2')
    let markup =`
    <h4>${msg.user}</h4>
    <p>${msg.messsage}
    `
    mainDiv.innerHTML = markup
    messsageArea.appendChild(mainDiv)
} 


//recieve messages

socket.on('message',(msg) =>{
    appendMessage2(msg,'left')
    scrollareatobottom()  
})

function scrollareatobottom(){
    messsageArea.scrollTop = messsageArea.scrollHeight
}
