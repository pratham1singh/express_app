const express = require('express')
var app= express()
const port = process.env.PORT||3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello")
})
// app.get('/',async(req,res)=>{
//     fetch('http://localhost:'+port+'/resto').then((result)=>{
//         result.json().then((data2)=>{
//             res.send(data2)
//         })
//     })
// })
// async function data(){
//     fetch('http://localhost:'+port+'/resto').then((result)=>{
//         result.json().then((data2)=>{
//             console.log(data2)
//         })
//     })
// }
// data()
app.listen(port)