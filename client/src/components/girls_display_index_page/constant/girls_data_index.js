let Girls=[];
// fetch('http://localhost:8000/products')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.data[0].price)
//     data.data.map((info)=>{
//         console.log(info)
//         Girls = info
//     })
//   });
const callRestApi = async () => {
    const response = await fetch('http://localhost:8000/products');
    const jsonResponse = await response.json();
    console.log(jsonResponse.data);
    //return JSON.stringify(jsonResponse);
    const arrayOfLists = jsonResponse.data.map(
      record => record.price
    )
    return arrayOfLists;
};
callRestApi().then(async (res)=>{
  console.log(res)
for (let i=0; i<res.length; i++)
{
    Girls.push(res[i])
}
})
console.log(Girls)
console.log(Girls[6])
export { Girls };
