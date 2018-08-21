const express = require('express')
const ejs = require('ejs')

const knex = require('knex')
const dbConfigObj = require('./knexfile.js')
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const app = express()
const appDb = knex(dbConfigObj.development)
app.locals.db = appDb
const PORT = 3000

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
