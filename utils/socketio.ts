import { io } from "socket.io-client";
import {SOCKETIO_URL} from "@env"

export const socket = io("ws://192.168.143.131:8000/");
// console.log(socket)
console.log("WebSocket initialized at: ", SOCKETIO_URL);