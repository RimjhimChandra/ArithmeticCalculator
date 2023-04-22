let inp = document.getElementById('displaybox');
let btn =  document.querySelectorAll('button');
let str = "";
let Arr = Array.from(btn);
Arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            inp.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            inp.value = str;
        }
        else{
            str += e.target.innerHTML;
            inp.value = str;
        }
    })
});