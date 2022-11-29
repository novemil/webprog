const express = require('express');
const app = express();

app.set('view engine', 'ejs');

require('dotenv').config();


app.use('/member', require('./routes/member.js'));




app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.get('/login', (req, res)=>{
    res.render('login.ejs');
})
app.get('/register', (req, res)=>{
    res.render('register.ejs');
})
app.get('/mypage', (req, res)=>{
    res.render('mypage.ejs');
})

app.use(express.urlencoded({extended: true}));


const MongoClient = require('mongodb').MongoClient;





const db_id = 'admin';
const db_pw = 'qqwwee11';
const db_cluster = 'cluster0';
const db_url = 'mongodb+srv://' + db_id + ':' + db_pw + '@' + db_cluster + '.evzmu3p.mongodb.net/?retryWrites=true&w=majority';
let db;
MongoClient.connect(db_url, (error, client) => {
    if (error) {
        return console.log(error);
    } else {
        app.listen(8080, () => {
	    global.db = client.db('nfp');
            console.log('server on');
        })
    }
})

