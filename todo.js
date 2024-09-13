const array=[{
  name: 'Coding',
  dueDate:'2024-09-12'
}];
renderTodo();
function addValue(){
const inputElement=document.querySelector('.js-input')
const name=inputElement.value;
const datElement=document.querySelector('.js-date');
const dueDate=datElement.value;
if(name==='' || dueDate===''){
  const ParaElement=document.querySelector('.empty-inputs');
  ParaElement.innerHTML='Please Enter Both Fields';
  setTimeout(()=>{
    ParaElement.innerHTML='';
  },1000);
}else{
array.push({name, dueDate});
renderTodo();
inputElement.value='';
datElement.value='';
}
}

function renderTodo(){
let allHTML='';
for(let i=0; i<array.length; i++){
  const todoObject=array[i];
  // const name=todoObject.name;
  // const dueDate=todoObject.dueDate;
  const {name, dueDate}= todoObject;
const html=`<div class="name">${name}</div>
            <div class="name">${dueDate}</div>
            <button class="delete-btn" onclick="
  
              array.splice(${i}, 1);
              renderTodo();
              ">
              Delete
              </button>`;

allHTML+=html;
const divElement=document.querySelector('.js-div');
divElement.innerHTML=allHTML;
}

}
