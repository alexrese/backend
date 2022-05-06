const { query } = require('express');
const { request } = require('express');
const { response } = require('express');
const express = require('uuidv4');

const {uuid} = require

const app = express();
app.use(express.json()); // para recerver json

const projects = [];

app.get('/projects', (request, response) =>{
    // const query = request.query; // todos os valores
    const {title} = request.query; // parametros nomeados e desestruturados 
    console.log(title);
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id', (request, response) =>{
    // const params = query.params; //todos os parametros
    const {id} = request.params; //parametros de rota
    console.log(id);
    return response.json([
        'Project 5',
        'Project 4',
        'Project 3',
        'Project 2'
    ])
})

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
});

app.delete('/projects', (request, response) => {
    return response.json([
        'Project 5',
        'Project 4',
        'Project 3',
    ])
});


app.listen(3333, () => {
    console.log('Backend started!');
});
// http://localhost:3333