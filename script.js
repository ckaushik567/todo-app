let addBtn = document.getElementById('btn');
addBtn.addEventListener('click',addFunction);
function addFunction(e){
     let text = document.getElementById('txt').value;
     let btnText = document.getElementById('del-btn').textContent;
     let newLi = document.createElement('li');
     let newBt = document.createElement('button');
     newLi.textContent = text;
     newBt.textContent = btnText;
     newLi.classList.add('li-section');
     newBt.classList.add('btn-style');
     let parentNewList = document.getElementById('parentList');
     parentNewList.appendChild(newLi);
     newLi.appendChild(newBt);
};
function deleteFunction(e){
         e.targetElement
}