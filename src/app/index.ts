import { FastifyInstance } from "fastify"
import auth from "./auth"
import authPlugin from "../plugins/auth"
import modelPlugin from "../plugins/model"
import errorPlugin from "../plugins/error"

export default async function app (fastify: FastifyInstance){

  //В первую очередь подключаем плагины
  fastify.register(authPlugin)  
  fastify.register(modelPlugin)
  fastify.register(errorPlugin)

  //После подключения плагинов подключаем роуты
  fastify.register(auth, { prefix: "auth" })  

  fastify.get("/", async () => {
    return { word: "hello world" }
  })
  
}