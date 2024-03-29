const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json()); // para receber json

const projects = [];

function logRoutes(request, response, next){
    const {method, url} = request;

    const route = `[${method.toUpperCase()}] ${url}`;

    console.log(route);

    return next();
}

app.use(logRoutes);


app.get('/projects', (request, response) =>{
    // const query = request.query; // todos os valores
    // const {title} = request.query; // parametros nomeados e desestruturados 
    // console.log(title);
    const {title} = request.query;
    const results = title 
        ? projects.filter(project => project.title.includes(title)) 
        : projects;
    return response.json(results);
});

app.put('/projects/:id', (request, response) =>{
    //const params = query.params; //todos os parametros
    const {id} = request.params; //parametros de rota
    // console.log(id);
    const { title, owner} = request.body;
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.'});
    }

    const project = {
        id,
        title,
        owner
    }; 

    projects[projectIndex] = project;
    return response.json(project);
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    // const body = request.body;
    const id = uuidv4();

    const project = {
        id,
        title,
        owner
    }; 

    projects.push(project);
    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.'});
    }

    projects.splice(projectIndex, 1);
    return response.status(204).json([]);
});


app.listen(3333, () => {
    console.log('Backend started!');
});
// http://localhost:3333