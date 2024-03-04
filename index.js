const express = require('express');
const format = require('date-format');
const app = express();
const PORT = process.env.PORT || 3000 



app.get('/',(req, res) => {
    res.status(200).send("<h2>Hello from Manohar</h2>");
})

app.get("/api/v1/instagram",(req,res) =>{
    const instaSocial = {
        username : "Manohar's IG",
        followers : 52,
        follows: 37,
        date : format.asString("dd/MM - hh:mm:ss",new Date())
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook",(req,res) =>{
    const fbSocial = {
        username : "Manohar's FB",
        followers : 148,
        follows: 237,
        date : format.asString("dd/MM - hh:mm:ss",new Date())
    }
    res.status(201).json(fbSocial)
})

app.get("/api/v1/linkedin",(req,res) =>{
    const LinkedIn = {
        username : "Manohar' LinkedIn",
        followers : 24,
        follows: 20,
        date : format.asString("dd/MM - hh:mm:ss",new Date())
    }
    res.status(200).json(LinkedIn)
})

app.get("/api/v1/:token",(req,res) =>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

