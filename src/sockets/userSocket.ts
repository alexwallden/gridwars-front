import type User from '@/models/User'; //Ändrade import här pga ändrat filnamn?
import { reactive } from 'vue'
import { io } from 'socket.io-client'
import { socket } from '@/socket';

export const userState = reactive({
    user: [] as User[]
  })
  
  // export const userSocket = io('http://localhost:3000');
  
  socket.on('create-user', (user: User) => {
    //userState.user = []; // behövde kommentera bort denna
    console.log('Mottagen user');
    
    userState.user.push(user)
  })