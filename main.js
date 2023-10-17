const decBtn = document.querySelector('.decrease')
const resetBtn = document.querySelector('.reset')
const incBtn = document.querySelector('.increase')
const output = document.querySelector('.output')


let count = 0;

decBtn.addEventListener('click', ()=>{
    output.innerHTML = --count;
    output.style.color = `${count < 0 ? 'red' : count === 0 ? 'black': 'green'}`
    console.log(count);
    
})

resetBtn.addEventListener('click', ()=>{
    count = 0;
    output.innerHTML = count;
    output.style.color = `${count === 0 ? 'black'  :''}`
    console.log(count)

})

incBtn.addEventListener('click', ()=>{
    output.innerHTML = ++count;
    output.style.color = `${count > 0 ? 'green' :count === 0 ? 'black' : 'red'}`
    console.log(count)

})
