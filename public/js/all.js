// fetch('/user')
// .then(res=>res.json())
// .then(data=>{
//     RenderPage(data)
// }).catch(e=>{
//     console.log(e)
// })

// function RenderPage(data){
//     let html = '<ul>'
//     data.forEach(el => {
//         html += `<li>`+el.name+`</li>`
//         html += `<li>`+el.email+`</li>`
//         html += `<li>`+el.password+`</li>`
//     });
//     html+=`</ul>`
//     document.querySelector('.contain').innerHTML=html
    
// }


axios.get('/user')
.then(function (res) {
    let html = '<ul>'
    res.data.forEach(el => {
    html += `<li>`+el.name+`</li>`
    html += `<li>`+el.email+`</li>`
    html += `<li>`+el.password+`</li>`
    })
    html+='</ul>'
    document.querySelector('.contain').innerHTML = html
})
.catch(function (error) {
   console.log(error)
});   