import { io } from "socket.io-client";
import {SOCKETIO_URL} from "@env"

export const socket = io(SOCKETIO_URL);
console.log(socket)
console.log("WebSocket initialized at: ", SOCKETIO_URL);