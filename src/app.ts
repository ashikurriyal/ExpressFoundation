import express, { Application, Request, Response } from 'express'
const app : Application = express()


app.get('/', (req : Request, res: Response) => {
  res.send('Hello World!')
})



export default app;

//App file = Routing handle, Middleware, Route related error handling

//App folder = app business logic handling like create, read, update, delete databse, related works