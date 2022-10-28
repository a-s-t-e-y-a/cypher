let data=[]
fetch('http://localhost:8000/products')
.then((res)=>res.json())
.then((info)=>data=info)
console.log(data)