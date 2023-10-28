import { io } from "socket.io-client";
import {BACKEND_URL} from "@env"

let ws_url = "ws://" + BACKEND_URL + "/";
export const socket = io(ws_url);
console.log("WebSocket initialized at: ", ws_url);
