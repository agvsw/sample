import fs from 'fs';
import CommonResponse from '../../routes/dto/CommonResponse';
import { debug } from 'util';

const source = `${__dirname}/../../config/karyawan.json`;
let karyawan = (fs.existsSync(source) ? JSON.parse(fs.readFileSync(source, {encoding: 'utf8'})) : []);

function findSql(){
    return new Promise((resolve, rejects)=> {
        let query = "SELECT * FROM `employee` ORDER BY nik ASC";
        db.query(query, (err, result)=> {
            if(err){
                rejects(new CommonResponse('02','id Not Found', null))
            }resolve(new CommonResponse('','',result))
        })
    })
}
function findByIdSql(id){
    return new Promise((resolve, rejects)=> {
        let query = "SELECT * FROM `employee` WHERE nik =" + id;
        db.query(query, (err, result)=> {
            console.log(result);
            if(result.length<=0){
                rejects(new CommonResponse('02','Not found', null))
            }else if(result){
                resolve(new CommonResponse('','',result))
            }
        })
    }) 
}

function insertToDb(data){
    return new Promise((resolve, rejects)=> {
        let values = [[data.nik], [data.name], [data.gender],[data.address],[data.salary],[data.grade]];
        console.log(values);
        let query = "INSERT INTO employee (nik, name, gender, address, salary, grade) VALUES (?)";
        db.query(query, [values], (err, result)=> {
            console.log(result);
            if(err){
                rejects(new CommonResponse('02','error insert', err))
            }else if(result){
                resolve(new CommonResponse('','',result))
            }
        })
    }) 
}

function deleteFromDb(id){
    return new Promise((resolve, rejects)=> {
        let query = "DELETE FROM `employee` where nik = " + id;
        db.query(query, (err, result)=> {
            console.log(result);
            if(err){
                rejects(new CommonResponse('02','error insert', err))
            }else if(result){
                resolve(new CommonResponse('','',result))
            }
        })
    }) 
}


function updateFromDb(data,id){
    return new Promise((resolve, rejects)=> {
        let query = "UPDATE employee SET ? WHERE nik =" + id;
        db.query(query, data, (err, result)=> {
            console.log(result);
            if(err){
                rejects(new CommonResponse('02','error insert', err))
            }else if(result){
                resolve(new CommonResponse('','',result))
            }
        })
    }) 
}




///______________________________________________________________________________________________________________________________

function save(data) {
    fs.writeFileSync(source, JSON.stringify(karyawan));
  }

function findAll() {
    return new Promise((resolve, rejects) => {
        if(karyawan) {
            resolve(new CommonResponse('','',karyawan))
        }else {
            rejects(new CommonResponse('02','Not Found'))
        }
    })
}

function find(id) {
    return new Promise((resolve, rejects) => {
        if(karyawan.find(user => user.nik === String(id))) {
            resolve(new CommonResponse('','',karyawan.find(user => user.nik === String(id))))
        }else {
            rejects(new CommonResponse('02','Not Found',null))
        }
    })
}



function insert(data) {
    return new Promise((resolve, rejects) => {
        let index = karyawan.findIndex(kar => kar.nik === data.nik);
        console.log(index);
        if (index < 0) {
            karyawan.push(data);
            console.log(karyawan);
            save(karyawan);
            resolve(new CommonResponse('','',data))
        }else{
            rejects(new CommonResponse('02','id already used', null))
        }
    })
}

function update(data) {
    return new Promise((resolve, rejects) => {
        const index = karyawan.findIndex(kar => kar.nik === data.nik);
        if (index >= 0) {
            karyawan[index] = data;
            save(karyawan);
            resolve(new CommonResponse('','',data))
        }else{
            rejects(new CommonResponse('02', 'id Not Found', null))
        }
    })
}

function remove(id) {
    return new Promise((resolve, rejects) =>{
        let index = karyawan.findIndex(kar => kar.nik === String(id));
        if(index >= 0){
            karyawan.splice(index, 1);
            save(karyawan);
            resolve(new CommonResponse());
        }else{
            rejects(new CommonResponse('02', 'Not Found', null));
        }
    })
}
function getBonus(id){
    return new Promise((resolve, rejects)=> {
        let kar = karyawan.find(user => user.nik === String(id));
        if(kar){
            if(kar.grade=="A"){
                kar.salary = kar.salary * 3;
            }
            if(kar.grade=="B"){
                kar.salary = kar.salary * 2;
            }
            let bonus = kar.salary;
            resolve(new CommonResponse('','',{bonus}))
        }
        rejects(new CommonResponse('02','id Not Found'));
    })
}

export { findAll, find, remove, insert, update, getBonus, findSql, findByIdSql, insertToDb, deleteFromDb, updateFromDb };
