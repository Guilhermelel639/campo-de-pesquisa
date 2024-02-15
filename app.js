import Express from "express";
import cors from "cors";
import routes from './routes.js'

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
app.use(cors())
app.use(routes)

app.listen(3000, ()=>{
    console.log('api no ar');
})