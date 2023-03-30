const express = require("express")

const { chats } = require('./data/data')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require("./routes/chatRoutes");

const { notFound, errorHandler } = require("./middleware/errormiddle")

require('dotenv').config()
connectDB()
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.send("APi is running")
})


app.get('/api/chat', (request, response) => {
    response.send(chats)
})

app.get('/api/chat/:id', (request, response) => {
    // console.log(request.params.id)
    const singleChat = chats.find((c) => c._id === request.params.id)
    response.send(singleChat)
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT
app.listen(4000, console.log(`Server started ${PORT}`))