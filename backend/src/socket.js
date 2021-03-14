const Message = require('./app/models/Message');

class SocketController {
    async handle (socket){
        console.log(`Socket connected: ${socket.id}`);

        const messages = await Message.findAll();
        socket.emit('previousMessages', messages);
    
        socket.on('sendMessage', async (data) => {
            await Message.create({ user_name: data.user_name, content: data.content});
            socket.broadcast.emit('receivedMessage', data);
        });
    }
    
}

module.exports = new SocketController();