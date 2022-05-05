const { response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) =>{
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects', (request, response) =>{
    return response.json([
        'Project 5',
        'Project 4',
        'Project 3',
        'Project 2'
    ])
})

app.post('/projects', (request, response) => {
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