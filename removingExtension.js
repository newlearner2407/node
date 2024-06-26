const  express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public');

//  app.use(express.static(publicPath));
app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user = {
        name:'Palash',
        email:'palash@email.com',
        city:'wardha',
    }
    res.render('profile',{user});
});
 app.get('/loops',(req,res)=>{
    const uers = {
        skills:['java','python','javascript','node']

    }
    res.render('loops',{uers});
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
});
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
});
app.listen(5000);