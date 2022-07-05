const express = require("express")
const server = express()
const path = require("path");
const routerPesquisar = express.Router();
const routerCadastrar = express.Router();


//Conexão com um banco de dados
const database = require("./database")


//===============================================================================================

//RENDERIZAR Página de Pesquisa
routerPesquisar.get("/", function (request, response) {
    response.sendFile(path.join(__dirname + '/pesquisarAlunos.html'));
});

server.use('/PESQUISAR', routerPesquisar)


//RENDERIZAR Página de Cadastro
routerCadastrar.get("/", function (request, response) {
    response.sendFile(path.join(__dirname + '/cadastrarAlunos.html'));
});

server.use('/CADASTRAR', routerCadastrar)

//===============================================================================================


//static files
server.use(express.static("public"))
server.use("/css", express.static(__dirname + "public/style.css"))
server.use(express.static("public"))

//===============================================================================================

server.use(express.json());
//INSERT DB
function CreateAluno(request, response) {
    console.log(request);

    // let json_data = JSON.parse(request.body);

    database("ALUNOS").
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


server.use(express.json());
//SELECT * DB
function ListALUNOS(request, response) {
    database("ALUNOS").
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

server.use(express.json());
//Select DB COM WHERE
function GetAlunoByID(request, response) {
    database("ALUNOS").
    where('id', request.params.id).
    then(function (data) {
        response.json(data)
    }).
    catch(function (error) {
        console.log(error)
    })

}

//METHODS REQUEST
server.post("/ALUNOS", CreateAluno)
server.get("/ALUNOS", ListALUNOS)
server.get("/ALUNOS/:id", GetAlunoByID)

server.listen(1000)