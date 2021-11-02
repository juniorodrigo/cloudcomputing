
const jwt_decode = require('jwt-decode');


const { Router } = require('express');
const express = require('express');



var unirest = require('unirest')
require('dotenv').config();
const passport = require('passport');
const router = express.Router();
require('dotenv').config();
var fs = require('fs');
var path = require('path');
var request = require('request');
import response from '../../network/response';


var jwt = require('jsonwebtoken');


//GET DATA

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    try {
        //LEER ARCHIVO DE TXT

        var data = fs.readFileSync('C:\\Users\\Sistema\\Desktop\\SymbaClean\\Back_gitgood\\SymbaBackendProduccion\\components\\universidad\\bd.txt', 'utf8');
        data = JSON.parse(data)
        res.send(data)






        //res.send(hola)

    } catch (error) {
        response.error(req, res, 500, error.message || error, error);
    }
}); //LISTO


//PUT DATA
router.put('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    try {
        //ENVIAR DATA
       var nombre = req.query.Nombre
        var dni = req.query.DNI
        var data = fs.readFileSync('C:\\Users\\Sistema\\Desktop\\SymbaClean\\Back_gitgood\\SymbaBackendProduccion\\components\\universidad\\bd.txt', 'utf8');
        data = JSON.parse(data)
        data.push({"Nombre":nombre,"DNI":dni})
        var txt = JSON.stringify(data);
        fs.writeFile('C:\\Users\\Sistema\\Desktop\\SymbaClean\\Back_gitgood\\SymbaBackendProduccion\\components\\universidad\\bd.txt', txt, function (err) {
            if (err) return console.log(err);
            console.log('Hello');
            res.send(data)

        });

        //res.send(hola)

    } catch (error) {
        response.error(req, res, 500, error.message || error, error);
    }
}); //LISTO
//FUNCION QUE VALIDA EXSITENCIA DE TOKEN MIDDLEWARE




export default router;
