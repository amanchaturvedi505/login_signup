const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//     /is used for the login page and req means request and res means response

app.get("/",cors(),(req,res)=>{

})


// we get the data of email and password by the req.body


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
         // check is used to check whether the exact email is availiabe or not 
         const check=await collection.findOne({email:email})
      
         if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

//    /signup is used for the signup page

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }



    try{
         // check is used to check whether the exact email is availiabe or not 
         const check=await collection.findOne({email:email})
      
         if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }
})



app.listen(3000,()=>{
    console.log("port connected")
})

 