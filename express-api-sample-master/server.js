import Express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { error } from 'util';

const app = Express();
const mysql = require('mysql');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3sk10000*',
    database: 'employee'
})

db.connect((error) => {
    if(error){
        throw error;
    }
    console.log('Connected to db')
});

global.db = db;

app.listen(3100, () => console.log('Application started on port 3100'));