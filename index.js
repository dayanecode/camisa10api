const express = require("express")
const server = express()

const database = require("./database")

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

//SELECT DB
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


//INSERT DB COM WHERE
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
server.post("/alunos", CreateAluno)
server.get("/alunos", ListAlunos)
server.get("/alunos/:id", GetAlunoByID)

server.listen(1000)