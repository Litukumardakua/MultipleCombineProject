const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");



// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user

router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile} = req.body;

    if(!name || !email || !age || !mobile){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                name,email,age,mobile
            });

            // await adduser.save();
            // res.status(201).json(adduser);
            // console.log(adduser);
            
            await adduser.save();
            res.status(201).send({
                "status" : true,
                "message" : "Users creates !!!!!!!!!!!"
            })
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


// get userdata or view records

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(200).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        // res.status(201).json(deletuser);
        res.status(201).send({
            "status":true,
            "message": "user updated!!!!!!"
        })

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        // res.status(201).json(deletuser);
        res.status(201).send({
            "status":true,
            "message": "user Deleted!!!!!!"
        })

    } catch (error) {
        res.status(422).json(error);
    }
})




module.exports = router;










