import * as wasm from "calculate";


document.querySelector('#addBtn').addEventListener('click', () => {
    let x = document.querySelector('#firstValue').value;
    let y = document.querySelector('#secondValue').value;
    if (!x && !y) {
     alert("please input values") 
     return
    } 
    let z = wasm.add(x, y)
    document.querySelector('#answerDisplay').innerHTML = z
	
 })

 document.querySelector('#subBtn').addEventListener('click', () => {
     let a = document.querySelector('#firstValue').value;
     let b = document.querySelector('#secondValue').value;
     if (!a && !b) {
      alert("please input values") 
      return
     } 
     let c = wasm.sub(a, b)
     document.querySelector('#answerDisplay').innerHTML = c
  })
  document.querySelector('#mulBtn').addEventListener('click', () => {
      let d = document.querySelector('#firstValue').value;
      let e = document.querySelector('#secondValue').value;
      if (!d && !e) {
       alert("please input values") 
       return
      } 
      let f = wasm.mul(d, e)
      document.querySelector('#answerDisplay').innerHTML = f
   })
   
document.querySelector('#divBtn').addEventListener('click', () => {
    let g = document.querySelector('#firstValue').value;
    let h = document.querySelector('#secondValue').value;
    if (!g && !h) {
     alert("please input values") 
     return
    } 
    let i = wasm.div(g, h)
    document.querySelector('#answerDisplay').innerHTML = i
 })
 document.querySelector('#modBtn').addEventListener('click', () => {
    let j = document.querySelector('#firstValue').value;
    let k = document.querySelector('#secondValue').value;
    if (!j && !k) {
     alert("please input values") 
     return
    } 
    let l = wasm.modulus(j, k)
    document.querySelector('#answerDisplay').innerHTML = l
 })
 
 document.querySelector('#clear').addEventListener('click', () => {
   
    document.querySelector('#answerDisplay').innerHTML = " "
 })
 


 
wasm.greet();
