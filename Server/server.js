import express from 'express';

const app = express();
const PORT = 8000;
app.use('/api',(req,res)=>{
    res.status(200).json({message:'Hello World!'});
});

app.use('*',(req,res)=>{
    res.status(404).json({message:'not'});
});

//Start the Express server
app.listen(PORT,()=>    {
    console.log(`Server listening on port${PORT}`);
});           

//Create a new '/api' route
//Make sure its above the '*' route

