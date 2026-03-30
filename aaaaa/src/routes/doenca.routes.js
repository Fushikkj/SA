import express, { Router } from 'express'
import { Userservice } from '../service/filmes.service'
const routs = express.Router()

let doencas = [
    { id: 1,doenca: "raiva", fatal:"sim " },
    { id: 2,doenca: "leptospirose", fatal:"sim" },
    { id: 3,doenca: "gripe", fatal:"sim" }

]

app.get('/doencas/getAll', (req, res) => {
   res.json({
    sucess: true,
    data: doencas
   })
})

   app.get('doencas/:id', (req,res) =>{
      const id = parseInt(req.params.id)
      const doecas = doecas.find(a => a.id === id)
        if (!doecas) {
          return res.status(404).json({
            sucess: false,
            message: 'doenca nova essa'
          })
        }

        res.json({
          sucess: true,
          data: doecas
        })
    })


