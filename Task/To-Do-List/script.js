const addbtn=document.getElementById("addbtn");
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");

addbtn.addEventListener('click',function(){
    const taskText=taskInput.value.trim();
    if(taskText==='') return;

    const li=document.createElement('li');
    li.textContent=taskText;

    li.addEventListener('click',()=>{
         li.classList.toggle('completed');
    });

const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });


    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value='';
});