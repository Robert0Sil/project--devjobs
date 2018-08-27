const express = require('express')
const ejs = require('ejs')
// ** A.1 Install + IMPORT BODY PARSER **
///   library allows application to read (parse)
//    json in the body of a POST/PUT/DELETE request
const bodyParser = require('body-parser')

const knex = require('knex')
const { Model } = require('objection');

const dbConfigObj = require('./knexfile.js')

const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const app = express()
const appDb = knex(dbConfigObj.development)
Model.knex(appDb)
app.locals.db = appDb
const PORT = 3000
// ** A.2 Configure body parser as middleware for
//        express application.  **
//        NICE!
app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )

app.use(express.static(`${__dirname}/public`))

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use('/api', apiRouter)
app.use('/', pageRouter)

app.use((req, res)=>{
  res.render('404.ejs')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
