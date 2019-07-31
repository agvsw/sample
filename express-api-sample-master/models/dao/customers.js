import fs from 'fs';
import { resolve } from 'path';
import { rejects } from 'assert';
import CommonResponse from '../../routes/dto/CommonResponse';
import { stringify } from 'querystring';

const source = `${__dirname}/../../config/customer.json`;
let customers = (fs.existsSync(source) ? JSON.parse(fs.readFileSync(source, {encoding: 'utf8'})) : []);

function findAll() {
    return new Promise((resolve, rejects) => {
        if(customers) {
            resolve( new CommonResponse('','',customers))
        }else {
            rejects(new CommonResponse('02','Not Found'))
        }
    })
}

function find(id) {
    return new Promise((resolve, rejects) => {
        if(customers.find(user => user.cif === String(id))) {
            resolve({
                response : new CommonResponse('','',customers.find(user => user.cif === String(id)))
            })
        }else {
            rejects({
                response: new CommonResponse('02','Not Found',null)
            })
        }
    })
}

function findByUsername(username) {
  return users.find((user) => { return user.username === username; });
}

function insert(data) {
  const index = users.findIndex((user) => {
    return user.id === Number(data.id);
  });

  if (index < 0) {
    users.push(data);
  }

  save(users);
  return find(data.id);
}

function update(data) {
  const index = users.findIndex((user) => { return user.id === Number(data.id) });
  if (index >= 0) {
    users[index] = data;
  }

  save(users);
  return find(data.id);
}

function remove(id) {
  const index = users.findIndex((user) => { return user.id === Number(user.id) });
  if (index >= 0) {
    users.splice(index, 1);
  }
  save(users);
  return (!find(id));
}

function validateData(user) {
  let valid = true;

  if (!user.email || (user.email && user.email.length === 0)) valid = false;

  return valid;
}

function save(data) {
  fs.writeFileSync(source, JSON.stringify(users));
}

export { findAll, find, findByUsername, validateData, insert, update, remove };
