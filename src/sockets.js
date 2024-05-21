import { Server } from "socket.io";

const socketInit = (httpServer)=>{
  let messages = []

  const io = new Server(httpServer)
}

export default socketInit
