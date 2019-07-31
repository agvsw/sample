import express from 'express';
import * as Karyawan from '../models/dao/karyawan';
import CommonResponse from './dto/CommonResponse';
const KaryawanRoute = express.Router();


KaryawanRoute.put('/update/:id', (req, res) => {
    Karyawan.updateFromDb(req.body, req.params.id)
    .then( rest =>{
        res.json(rest)
    })
    .catch(rest => {
        res.json(rest)
    })
})

KaryawanRoute.get('/find', (req, res) => {
    Karyawan.findSql()
    .then( rest =>{
        res.json(rest)
    })
    .catch(rest => {
        res.json(rest)
    })
})

KaryawanRoute.delete('/delete/:id', (req, res) => {
    Karyawan.deleteFromDb(req.params.id)
    .then( rest =>{
        res.json(rest)
    })
    .catch(rest => {
        res.json(rest)
    })
})

KaryawanRoute.post('/insert', (req, res) => {
    Karyawan.insertToDb(req.body)
    .then( rest =>{
        res.json(rest)
    })
    .catch(rest => {
        res.json(rest)
    })
})

KaryawanRoute.get('/find/:id', (req, res) => {
    Karyawan.findByIdSql(req.params.id)
    .then( rest =>{
        res.json(rest)
    })
    .catch(rest => {
        res.json(rest)
    })
})

KaryawanRoute.get('/employees', (req, res, next) => {    
    Karyawan.findAll()
        .then( rest =>{
            res.json(rest)
        })
        .catch(rest => {
            res.json(rest)
        })
});

KaryawanRoute.get('/bonus/:id', (req, res, next) => {    
    Karyawan.getBonus(req.params.id)
        .then( rest =>{
            res.json(rest)
        })
        .catch(rest => {
            res.json(rest)
        })
});

KaryawanRoute.get('/employee/:id', (req, res, next) => {
    Karyawan.find(req.params.id)
        .then(rest => {
            res.json(rest)
        })
        .catch(err => {
            res.json(err)
        })  
});

KaryawanRoute.post('/employee', (req, res, next) => {
   // res.json(req.body)
    Karyawan.insert(req.body)
        .then(rest => {
            res.json(rest)
        })
        .catch(err => {
            res.json(err)
        })
});

KaryawanRoute.put('/employee', (req, res, next) => {
    Karyawan.update(req.body)
        .then(rest => {
            res.json(rest)
        })
        .catch(err => {
            res.json(err)
        })
})

KaryawanRoute.delete('/employee/:id', (req, res, next) => {
    Karyawan.remove(req.params.id)
        .then(rest => {
            res.json(rest)
        })
        .catch(err => {
            res.json(err)
        })
})

export default KaryawanRoute;