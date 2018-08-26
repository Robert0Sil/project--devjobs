const Router = require('express').Router
const Company = require('../models/Company')
const Job = require('../models/Job')

const apiRouter = Router()

apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/users': 'Show Users',
    '/api/messages': 'Show messages'
  })
})

apiRouter.get('/companies', (req, res)=>{

  Company.query()
    .eager('job')
    .then((recWjobs)=>{
     res.status(200).json(recWjobs)
   })
})

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

apiRouter.get('/jobs', (req, res)=>{

  Job.query()
    .eager('company')
    .then((recWjobs)=>{
     res.status(200).json(recWjobs)
   })
})

apiRouter.get('/jobs/:id', (req, res)=>{
  const db = req.app.locals.db

  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('jobs')
    .where('id', '=', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })

})

module.exports = apiRouter
