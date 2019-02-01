            /* GETS ELEMENT */
const input = document.querySelectorAll('[data-validation]')
const button = document.querySelector('.form__button');
const FieldSet = document.querySelector('fieldset');
const radioButton = document.querySelectorAll('.gender input');
              /*SETTING EVENT ON BUTTON */
button.addEventListener('click',function(e){
   e.preventDefault();
  for(let i = 0; i<input.length;i++){

     if(input[i].value===''){
      input[i].style.borderColor='red';
      input[i].placeholder = 'this field is required'
    }
    else if(patterns[`${input[i].dataset.validation}`](input[i]) ==null && input[i].value!==''){
      elemCreater(input[i]);
      
    }
    for(let j = 0; j<input.length;j++){
      if(input[j].previousElementSibling.className==='error'){
        input[j].onchange = function(){
          errorDelete(input[j]);
        }
      }
      if(input[j].style.borderColor==='red'){
        input[j].onchange = function(){
          errorColor(input[j])
        }
      }
    }
  }
  if(radioButton[0].checked!==true&&radioButton[1].checked!==true){
    radioButton[1].parentNode.style.background = 'red';
  }
})
            /*REG EXP FOR CHECKING INPUTS */
const RegExpForBirthday = /[0-9]{4}/
const RegExpForName = /^([a-zA-Z]{3,16})$/;
const RegExpForEmail = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
const RegExpForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            /*FUNCTIONS WHICH CHECK INPUTS */
const patterns={
  name:function(elem){
    return elem.value.match(RegExpForName)
  },
  email:function(elem){
    return elem.value.match(RegExpForEmail)
  },
  password:function(elem){
    return elem.value.match(RegExpForPassword)
  },
  birthday:function(elem){
    if(elem.value.match(RegExpForBirthday)>=2019){
      return null;
    }
    else{
      return true
    }
  },
  country:function(elem){
    if(elem.value==='Choose your country'){
      return null;
    }
    else{
      return true;
    }

}
}
        /*CREATING ERRORS */
let elemCreater =(parent)=>{
  let error = document.createElement('div')
  error.innerHTML=`${parent.name||parent.className} is not valid`;
  error.className = 'error';
  FieldSet.insertBefore(error,parent);
}
        /*DELETING ERRORS */
let errorDelete=(elem)=>{
  elem.previousElementSibling.style.display='none';
}
        /* FIXING REQUIRED ERROR */
let errorColor = (elem)=>{
  elem.style.borderColor ='white'
}
