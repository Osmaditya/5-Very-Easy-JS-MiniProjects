let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    let value = input.value;
    return add(value)
})

//Adding Element

function add(val){
  let list=  document.createElement('li');
  let del=document.createElement('button');
  del.innerText="Done"
       list.innerText=val;
       ul.appendChild(list);
       list.appendChild(del);
       del.classList.add('del');

       input.value="";

}

// Done button

let ull=document.querySelectorAll('.ul');
 for(done of ull){
  done.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
      parent = event.target.parentElement;
      parent.remove();
    }
  })
 }