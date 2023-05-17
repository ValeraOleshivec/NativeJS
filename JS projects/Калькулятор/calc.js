let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

const buttons = document.querySelectorAll('.btn');

const gg = document.querySelector('.but').onClick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)){
        if (b === '' && sign === ''){
            if (key === '.' ){
                if (a === '0.'){
                    out.textContent= a;
                    return;
                } else if (a!== ''){
                    a += key;
                    out.textContent = a;
                } else  {
                    a = '0.';
                    out.textContent=a;
                }
            }else {
                a += key;
                out.textContent = a;
            }
        }else if (a!== '' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }else if (finish) {
            b='';
            b += key;
            out.textContent= b;
            finish=false;
        }else {
            b +=key;
            out.textContent=b;
        }
        console.log(a, b, sign);
        return;
    }
    if (action.includes(key) && b===''){
        sign = key;
        out.textContent = a;
        return;
    } else {
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a/b;
                break;
        }
        b='';
        finish = true;
        out.textContent = a;
        console.log (a,b,sign);
        sign=key;
    }
}
buttons.forEach(div => {
    div.addEventListener('click',gg)
})
