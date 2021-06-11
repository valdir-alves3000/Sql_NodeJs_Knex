const expres = require('express')

const routes = require('./routes')

const app = expres()
app.use(expres.json())
app.use(routes)

//not found
app.use((rer, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

//call all
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

app.listen(3333, () => console.log('Server is running'))       