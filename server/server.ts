import {config} from "dotenv"
config()
import fastify from "fastify"

const app = fastify()
console.log()
app.listen({port: parseInt(process.env.PORT!)})