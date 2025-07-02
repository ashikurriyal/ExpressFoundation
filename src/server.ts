import app from "./app";

let server;
const port = 5100;
const bootstrap = async () => {
    server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

bootstrap()

//Server file; = Server handling like -> Server Starting, Closing, Error handling of server. Only related to server