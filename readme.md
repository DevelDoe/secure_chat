This application leverages SocketIO, NodeJS and AES Encryption in order to provide a secure chatting experience. The idea is to encrypt the chat messages before the message is sent over the wire. The application allows people to invite others to a chat room by providing the inviter and invitees’ email addresses; the application creates a unique link for a chat room and generates the chat key and emails it to the participants. It is up to the participants to visit the URL pointing to the chat room and enter the provided chat key. One feature of security here is that the chat key is never broadcasted across the wire since it’s copy pasted by the participants to send and receive encrypted messages.

For more information please see - https://softwaregrizzlybear.wordpress.com/2016/01/30/secure-chat-with-socketio-nodejs-and-aes-encryption/
