const express = require('express');
const cors = require('cors');


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(cors())



//routes
app.get("/showusers",(req,res)=>{
    res.send([
        {"username":"testuser1","email":"testuser1@gmail.com","password":"1234df","about":"dancer"},
        {"username":"testuser2","email":"testuser2@gmail.com","password":"4321df","about":"gamer"}
    ])
})

app.listen(PORT,()=>console.log(`server running on ${PORT}`))