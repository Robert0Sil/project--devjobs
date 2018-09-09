const Router = require('express').Router
const Company = require('../models/Company')
const Job = require('../models/Job')

const apiRouter = Router()
// ** B.2 Model Queries **
const shoRouLis = (req, res)=>{
  res.json({
    '/api/companies' : 'Show companies',
    '/api/jobs' : 'Show jobs'
  })
}

const fetchManCom = (req, res)=>{
  Company.query()
    .eager('job')
    .then((recWJob)=>{
      res.status(200).json(recWJob)
    })
    .catch((err)=>{
      console.log("ooppps!");
      var errMes = err.toString()
      res.status(500).send(errMes)
    })
}

apiRouter.get('/companies/:_id', (req, res)=>{
  const db = req.app.locals.db

  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('companies')
    .where('id', '=', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })
})

const fetchOneCom = (req, res)=>{
  const db = req.app.locals.db

  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('companies')
    .where('id', '=', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })
}

const createOneCom = function(req, res){
  // ** A.3 + B.3 req.body **
  //       body parser + express puts incoming
  //       ContentType application/json
  //       data on req.body
  console.log(req.body)
  Company.query()
    .insert(req.body)
    .then((newRecord)=>{
      res.status(200).json(newRecord)
    })
}

const editOneCom = (req, res)=>{
  Company.query()
   .updateAndFetchById( req.params._id , req.body )
   .then((updatedRecord)=>{
     res.status(200).json(updatedRecord)
   })
}

const deleteOneJCom = (req, res)=>{
  Company.query()
    .deleteById(req.params._id)
    .then((dbResponse)=>{
      res.status(200).json(dbResponse)
    })
}

const fetchManJob = (req, res)=>{
  Job.query()
    .eager('company')
    .then((recWCom)=>{
    res.status(200).json(recWCom)
    })
    .catch ((err)=>{
    var errMes = err.toString()
    res.status(500).send(errMes)
  })
}

apiRouter.get('/jobs/:_id', (req, res)=>{
  const db = req.app.locals.db

  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('jobs')
    .where('id', '=', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })
})

const fetchOneJob = (req, res)=>{
  const db = req.app.locals.db

  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('jobs')
    .where('id', '=', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })
}

const createOneJob = function(req, res){
  // ** A.3 + B.3 req.body **
  //       body parser + express puts incoming
  //       ContentType application/json
  //       data on req.body
  console.log(req.body)
  Job.query()
    .insert(req.body)
    .then((newRecord)=>{
      res.status(200).json(newRecord)
    })
}

const editOneJob = (req, res)=>{
  Job.query()
   .updateAndFetchById( req.params._id , req.body )
   .then((updatedRecord)=>{
     res.status(200).json(updatedRecord)
   })
}

const deleteOneJob = (req, res)=>{
  Job.query()
    .deleteById(req.params._id)
    .then((dbResponse)=>{
      res.status(200).json(dbResponse)
    })
}

apiRouter.get('/', shoRouLis)
// ** B.1 REST ROUTES **
apiRouter
  .get('/companies', fetchManCom)
  .get('/companies/:_id', fetchOneCom)
  .post('/companies', createOneCom)
  .put('/companies/:_id', editOneCom )
  .delete('/companies/:_id', deleteOneJCom)

apiRouter
  .get('/jobs', fetchManJob)
  .get('/jobs/:_id', fetchOneJob)
  .post('/jobs', createOneJob)
  .put('/jobs/:_id', editOneJob )
  .delete('/jobs/:_id', deleteOneJob)

module.exports = apiRouter
