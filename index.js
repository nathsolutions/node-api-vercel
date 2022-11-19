const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server is running.${PORT}`)
})

app.get("/", (req, res)=>{
    // res.json({result: "ok", data:[1,2,3,4,5]})
    res.send('This is my API running...')
})

app.get('/about', (req,res)=>{
    res.send('This is my about route')
})

module.exports = app

