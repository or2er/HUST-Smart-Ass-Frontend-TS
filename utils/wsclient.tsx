import { io } from "socket.io-client";

export const socket = io("ws://192.168.143.131:8000/")
console.log("test:", socket)