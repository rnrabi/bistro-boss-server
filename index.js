const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000 ;



// middleware
app.use(cors())
app.use(express.json())










app.get('/' , (req , res) =>{
    res.send('bistro boss is sitting')
})

app.listen(port , ()=>{
    console.log('bistro boss port is:' , port)
})








