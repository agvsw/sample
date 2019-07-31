import express from 'express';
import * as User from '../models/user';
import * as Customer from '../models/dao/customers';
import CommonResponse from './dto/CommonResponse';
const CustomerRoute = express.Router();

    
    CustomerRoute.get('/customers', (req, res, next) => {    
        Customer.findAll()
            .then( rest =>{
                res.json(rest)
            })
            .catch(rest => {
                res.json(rest)
            })
    });
  
    CustomerRoute.get('/customers/:id', (req, res, next) => {
        Customer.find(req.params.id)
            .then(rest => {
                res.json(rest)
            })
            .catch(err => {
                res.json(err)
            })  
    });

    CustomerRoute.post('/users', (req, res, next) => {
        const user = User.insert(req.body);
    
        res.json(user);
    });

    CustomerRoute.delete('/users/:id', (req, res, next) => {
        const deleted = User.remove(req.body);
        const message = deleted ? 'Data user telah dihapus.' : 'Data user tidak dapat dihapus.';
      
        res.json({ message });
    });

    CustomerRoute.put('/users/:id', (req, res, next) => {
        let user = req.body;
        const id = Number(req.params.id);
        const existingUser = User.findByUsername(user.username);
      
        if (!User.find(id)) return next();
      
        if (existingUser && existingUser.id !== id && existingUser.username === user.username) {
          res.json({message: `username ${user.username} sudah digunakan.`});
        } else if (!User.validateData(user)) {
          res.json({message: `Data user tidak valid.`});
        } else {
          user = User.update(user);
      
          res.json(user);
        }
      });

  export default CustomerRoute;