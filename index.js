import express from "express";

const app = express();

const port = 5000;

app.get("/",(req,res)=>{
    const today = new Date();
    //Test code
    // weekend:
    // new Date("June 2, 2024 11:13:00");

    // You can change the date according to your need 
    
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6 ){
        type = "the weekend";
        adv = "it's time to have fun";
    }
    res.render("index.ejs",{
        daytype: type,
        advice : adv 
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}.`)
})