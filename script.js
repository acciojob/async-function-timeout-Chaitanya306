//your JS code here. If required.
const text=document.getElementById('text')
const delay=document.getElementById('delay')
const button=document.getElementById('btn')

const output=document.getElementById('output')
function p(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            output.textContent=text.value
            res()},delay.value)
        
    })
}
button.addEventListener('click',async function(){
	const r=await p()
})

