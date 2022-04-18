const express=require('express')
const upload=require('express-fileupload')
const cors=require('cors')


const app=express()
app.use(upload())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("up and running")
})


app.post("/",(req,res)=>{
    const filename=Date.now()+"_"+req.files.picture.name;
    const file=req.files.picture
    let uploadPath=__dirname +"/uploads/"+filename
    file.mv(uploadPath,(err)=>{
        if(err){
          return  res.send(err)
        }
    })
    res.send(200)
})


// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })

// app.post('/',(req,res)=>{
//     if(req.files){
//         console.log(req.files);
//         var file=req.files.file;
//         var filename=file.name
//         console.log(filename);
//     }
// })

app.listen(4000)