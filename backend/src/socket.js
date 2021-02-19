const handleSocket = (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    
    let messages = [];

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', (data) => {

        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
    });
};

module.exports = handleSocket;