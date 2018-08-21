const Router = require('express').Router

const apiRouter = Router()

apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/companies': 'Show Companies'
    //'/api/messages': 'Show messages'
  })
})

apiRouter.get('/companies', (req, res)=>{

  const db = req.app.locals.db
  db.select('*').from('companies')
   .then((dbRecordsReturned)=>{
     res.status(200).json(dbRecordsReturned)
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

module.exports = apiRouter
