
//Model

 let todo = [];


let add = document.getElementById('add');
let edit = document.getElementById('edit');
let alarm = document.getElementById('alarm');
let menu = document.getElementById('menu');
let user = document.getElementById('user');

let addingItem = document.getElementById('addingItem');

let todos = document.getElementById('Todos');


let bottom_icon = document.getElementById('bottom-icons');


function makeTodo(){

    let title;
    let date;
    let time;
    let icon;
    let id;
    let mon;
    let day;
    let year;
    

  var  newId  =  'id'+(todo.length);

var todoItem = {
    title:newTodo,
    date:newDate,
    time:newTime,
    isDone:false,
    icon:newIcon,
    id: newId,
    mon:newMonth,
    day:newDay,
    year:newYear,
};
 
todo.push(todoItem);

return todoItem;

}





//View
bottom_icon.innerHTML = `  <button id="add" onclick="showInput(addingItem)" >Create Task</button>`

var showInput = (addingItem)=>{
  bottom_icon.innerHTML = ``
    
    addingItem.innerHTML = `
    <div id ="titlediv" class="mt-5 ml-4" ><div class= "labels">Create <br>
    New Task</div>
    <br>
    
    <div style="font-weight:100" >Name</div>
    <input  type = "text" placeholder = "New Task"  id ="Item">
</div>
    <div id="prev"><i class="fa fa-arrow-left prev" onclick="cancel()"></i></div>
   <div id = "next"> <i class="fa fa-arrow-right next" onclick="showDate(showInput)" ></i></div>
    `;
     Item = document.getElementById('Item');
 
   



}
var cancel = ()=>{
  addingItem.innerHTML=`Empty list...`;
    bottom_icon.innerHTML =`  <button id="add" onclick="showInput(addingItem)" >Create Task</button>`
}

var showDate = (showInput) =>{

    newTodo = Item.value;

 addingItem.innerHTML = `<div style="width:fit-content;margin:auto" class="pt-5">
 <input type = "date" value=""  id="date-item"  ></div>
 <div id="prev"><i class="fa fa-arrow-left prev" onclick="showInput(addingItem)"></i></div>
 <div id = "next"> <i class="fa fa-arrow-right next" onclick="showTime(showDate)"></i></div>

 `;    
 
  date_item = document.getElementById('date-item');




  
}


var showTime = (showDate)=>{
    newDate = date_item.value;
   

    var convertDate=()=>{
      
     var dateArr =  newDate.split("");
      
     var year = dateArr.splice(0,4);

    var month = dateArr.splice(1,2);
    var day = dateArr.splice(2,2);

    newYear = parseInt(year.join(""));
    newMonthinteger = parseInt(month.join(""));
    newDay = parseInt(day.join(""));
    switch(newMonthinteger){
    case 1: newMonth = "Jan";
    break;
    case 2: newMonth = "Feb"
    break;
    case 3: newMonth = "Mar";
    break;
    case 4: newMonth = "Apr";
    break;
    case 5: newMonth = "May";
    break;
    case 6: newMonth = "Jun";
    break;
    case 7: newMonth = "Jul";
    break;
    case 8: newMonth = "Aug";
    break;
    case 9: newMonth = "Sep";
    break;
    case 10: newMonth = "Oct";
    break;
    case 11: newMonth = "Nov";
    break;
    case 12: newMonth = "Dec";
    break;

       

    }
   
    

      
      }
      convertDate();



    addingItem.innerHTML = `<div style="width:fit-content;margin:auto" class="ml-4 pt-5 ">
 <input type = "time" value=""  id="time-item"></div>
 <div id="prev"><i class="fa fa-arrow-left prev" onclick="showDate(showInput)"></i></div>
 <div id = "next"> <i class="fa fa-arrow-right next" onclick="showIcons(showIcons)"></i></div>

 `;    


 time_item = document.getElementById('time-item');


 
 

    
}  



var showIcons = (showTime)=>{
    newTime =  time_item.value;

    addingItem.innerHTML = `
    
   
    <div id="prev"><i class="fa fa-arrow-left prev" onclick="showTime(showDate)"></i></div>
    <div  id = "icon-palette">
    <div class = "d-flex flex-row">
     <button id = "run-icon" style = "background-image:url(img/icons/run.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button>
     <button id = "ball-icon" style = "background-image:url(img/icons/ball.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "food-icon" style = "background-image:url(img/icons/food.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button>
     
     <button id="lawn-icon" style = "background-image:url(img/icons/lawn.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button>  
     <button id = "study-icon" style = "background-image:url(img/icons/study.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button>
     <button id = "sleep-icon" style = "background-image:url(img/icons/sleep.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     </div>

     <div class = "d-flex flex-row">
     <button id = "chat-icon" style = "background-image:url(img/icons/chat.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "gym-icon" style = "background-image:url(img/icons/gym.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "headset-icon" style = "background-image:url(img/icons/headset.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "music-icon" style = "background-image:url(img/icons/music.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "paint-icon" style = "background-image:url(img/icons/paint.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     
     <button id = "shower-icon" style = "background-image:url(img/icons/shower.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     </div>
     <div class = "d-flex flex-row">
     <button id = "sing-icon" style = "background-image:url(img/icons/sing.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "video-icon" style = "background-image:url(img/icons/video.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button> 
     <button id = "walk-icon" style = "background-image:url(img/icons/walk.ico);background-position:center;width:2em;height:2em" onclick = "pushIcon(event)"></button>  
     </div>
     </div>
    <div id="create"><button  onclick="addItem(todo)" class="rounded">Create</button></div>
 `;

}

var pushIcon = (event) => {
   

let icon_ID = event.target.id;

let icon = document.getElementById(icon_ID);

newIcon = icon.style.backgroundImage;




}


var addItem = (todo)=>{
    
   
 let myTodoItem =  makeTodo();

  addingItem.innerHTML = ``;
    todos.insertAdjacentHTML('beforeend',`
    <div class="todo-list m-auto" id="id-${myTodoItem.id}">
    <div class="date mt-2">${myTodoItem.mon} ${myTodoItem.day}, ${myTodoItem.year}</div>
    
   <div class="todo-list-main m-auto rounded d-flex flex-row">
     <div style="height: fit-content; width:fit-content;" class="mt-3 ml-3 mb-3"><button class="rounded" style="background-color:  rgb(236, 227, 215);border-color: transparent; background-image:url(img/icons/run.ico); background-position:center;width:2em;height:2em"  id="${myTodoItem.id}--" onclick="isDonefunc(event)"> </button></div>
   <div class="m-auto">
    <div class="title ">${myTodoItem.title}</div> 
    <div class="time">${myTodoItem.time}</div>
   </div>
      <div class="dropdown m-auto">
          <i class="fa fa-ellipsis-h" id="dropdownMenu" data-toggle="dropdown" role="button"></i>
           <div class="dropdown-menu" style="background-color: transparent; border-color: transparent;">
              <input type="button" value="EDIT"  onclick="editTodo(event)" id="${myTodoItem.id}-" class="fa fa-edit">
              <i class="fa fa-trash" onclick="deleteItem(event)" id="${myTodoItem.id}"></i>
           </div>
          </div>
  </div>
   </div>
    `);
 
   let icon_BG =  document.getElementById(myTodoItem.id+"--");

icon_BG.style.backgroundImage  = myTodoItem.icon;
bottom_icon.innerHTML=`  <button id="add" onclick="showInput(addingItem)" >Create Task</button>`;
    
console.log(myTodoItem);
console.log(todo);


}


//Controllers
 deleteItem = (event)=>{

  let  deleteButton = event.target.id;

 
 let index = todo.findIndex(function(td,index){
  return td.id === deleteButton;

})
let deleteNode =  document.getElementById('id-'+deleteButton);


deleteNode.parentNode.removeChild(deleteNode);

todo.splice(index,1);

 

 }


  function editTodo(event){
    
    let editButtonid = event.target.id;

  index_Of_edit = todo.findIndex(function(td,index){
  return td.id+'-' === editButtonid;

});

  editButton = document.getElementById(editButtonid);

  editButton.value = "";

 editButton.placeholder = "Edit your task...";

 editButton.type = "text";

 editButton.onclick = "";

 editButton.insertAdjacentHTML("afterend",'<button onclick="updateTodo()">Done</button>');



 }
 function updateTodo(){

    todo[index_Of_edit].title = editButton.value;
let editNode = document.getElementById('id-'+todo[index_Of_edit].id);

todo[index_Of_edit].isDone = false;

editNode.innerHTML=`   <div>${todo[index_Of_edit].date}</div>
<div><input type = "checkbox" id = "${todo[index_Of_edit].id}--" onclick = "isDonefunc(event)">
${todo[index_Of_edit].title} ${todo[index_Of_edit].time}<input type = "button" value = "Edit" onclick = "editTodo(event)" id = "${todo[index_Of_edit].id}-"><button onclick ="deleteItem(event)" id = "${todo[index_Of_edit].id}">del</button></div>
`
    
    
 }
 let isDonefunc =(event)=>{
   checkButtonId= event.target.id;

   index_Of_isDone = todo.findIndex(function(td,index){
       return td.id+'--'===checkButtonId;
   });

   todo[index_Of_isDone].isDone = !todo[index_Of_isDone].isDone
let checkbox = document.getElementById(checkButtonId);

   if(todo[index_Of_isDone].isDone  == true){
  checkbox.parentElement.className = "checked";
   }else{
    checkbox.parentElement.className = "";

   }


 }



