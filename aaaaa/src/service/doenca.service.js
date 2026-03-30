import express from 'express'

const doecas  =[
   { id: 1,doenca: "raiva", fatal:"sim " },
    { id: 2,doenca: "leptospirose", fatal:"sim" },
    { id: 3,doenca: "gripe", fatal:"sim" }

]

class AlunosService {
    getAll(){
        return doecas;
    }
    getById(){
        return doecas(id);
    }
    getByIdade(){
        return doecas(fatal)
    }
}


export const DoencasService = new doencasservice();