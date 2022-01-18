document.title = "Select"

const hiddenSelect = () => {

    let search = document.getElementById("search");
    let main = document.getElementsByTagName("main");

        for(let item of main){
            const displayNone = () => {

                item.style.display = "none";
            };
            search.addEventListener("dblclick", displayNone);

            const displayBlock = () => {
            
            item.style.display = "block";
            };
            search.addEventListener("click", displayBlock);
        }
};
hiddenSelect();

let arrThing = [];
let counter = 0;
let search = document.querySelector('#search');
let count = document.getElementById("count");
let option = document.querySelectorAll('#select option');
let btnAdd = document.querySelector('#btn-sub');
let btnDel = document.querySelector('#btn-reset');

function countNum(){

    let optionVal = []
    option.forEach(elem => {
        console.log(elem.textContent)
        elem.addEventListener('click',e =>{
            optionVal.push(elem.value)
        if(e.target.dataset.counter != undefined){
            counter++;
            count.textContent = counter;
            document.getElementById('search').value =  elem.innerHTML;
            }
            arrThing.push(elem.textContent);
        }); 
    });

    btnAdd.addEventListener('click', () => {
        if(arrThing.length == 0){
            alert('Вы ничего не выбрали.Пожалуйста выберите вещь из списка!');
        }
        else{
            alert(`Выбраны следующие элементы - ${optionVal} `);
        }  
    })

    btnDel.addEventListener('click', () => {
        optionVal = []
        arrThing = [];
        count.textContent = counter = 0;
        search.value = '';
        console.log(arrThing);
    })

    search.addEventListener('focus', () => {
        search.value = '';
    })
}

countNum();

document.querySelector('#search').oninput = () => {
    let val = this.value.trim();
    let selectItems = document.querySelectorAll('#select option');
    if(val != ''){
        selectItems.forEach(elem => {
            if(elem.innerText.search(RegExp(val,"gi")) == -1){  
                elem.classList.add('hide');
            } 
        });
    }
    else{
        selectItems.forEach(elem => {
            elem.classList.remove('hide');
        });
    }
}
