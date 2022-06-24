'use strict';

const express = require("express")
const server = express()
const path = require("path");


//Conexão com um banco de dados
const database = require("./database")

//função que pega o conteúdo da requisição (request body) e transforma de texto em um objeto javascript (json)
//A partir daí podemos manipular o conteúdo javascript
server.use(express.json());


//INSERT DB
function CreateAluno(request, response) {
    database("alunos").
    insert(request.body).
    then(function (data) {
        response.json(data)
    }).catch(function (error) {
        response.status(508)
        response.json({
            error: error
        })
    })
}

//SELECT * DB
function ListAlunos(request, response) {
    database("alunos").
    then(function (data) {
        if (data.lenght == 0) {
            response.status(404)
        }
        response.json(data)
    }).
    catch(function (error) {
        response.status(500)
        response.json({
            error: error
        })
    })
}


//Select DB COM WHERE
function GetAlunoByID(request, response) {
    database("alunos").
    where('id_aluno', request.params.id).
    then(function (data) {
        response.json(data)
    }).
    catch(function (error) {
        console.log(error)
    })

}

//METHODS REQUEST
server.post("/alunos", CreateAluno)
server.get("/alunos", ListAlunos)
server.get("/alunos/:id", GetAlunoByID)
server.get("/", function (request, response) {
    res.sendFile(path.join(__dirname, './html/index.html'));
})
server.listen(1000)