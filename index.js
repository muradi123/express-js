import express from 'express'
import path from 'path'
import {requestTime, logger} from './middleweares.js'
import exphbs from 'express-handlebars'
import serverRoutes from './routes/server.js'
const __dirname = path.resolve()
const app = express()
const port = process.env.port ?? 5050

const hbs = exphbs.create({
    defaultLayout: false,
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)
//app.get('/download', (req,res) => {
//  res.download(path.resolve(__dirname, 'static', 'index.html'))
//})


app.listen(port, () => {
    console.log(`server has been started on port ${port}... `)
})