require('@tensorflow/tfjs');
const toxicity=require('@tensorflow-models/toxicity');
const express=require('express');
const url=require('url');
const app=express();
let port=process.env.PORT || 3000;

const threshold=0.9;
app.get("/",function(req,res){
    var u=url.parse(req.url,true);
    var q=u.query;
    if(typeof q.sentence === 'undefined'){
        res.status(400).send('Bad Request!');
    }else{
    var sentence = [q.sentence.toString()];
    console.log(sentence);
    toxicity.load(threshold).then((model) => {
        model.classify(sentence).then((predictions) => {
            res.send(predictions);
        });
    });
}
});
app.listen(port,()=>{
    console.log(`server started at port http://localhost:${port}`);
})

