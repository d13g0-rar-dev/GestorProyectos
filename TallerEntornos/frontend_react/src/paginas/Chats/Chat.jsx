import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, doc, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

const Chat = ({ idGrupo }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Crear una referencia a la colección
    const messagesRef = collection(doc(collection(db, 'chats'), idGrupo), 'messages');
    
    // Crear una consulta con orderBy
    const messagesQuery = query(messagesRef, orderBy('timestamp'));

    // Suscribirse a los cambios en la consulta
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, [idGrupo]);

  const sendMessage = async () => {
    if (message.trim()) {
       const member = JSON.parse(localStorage.getItem('DatosUsuario'));
      const messagesRef = collection(doc(collection(db, 'chats'), idGrupo), 'messages');
      await addDoc(messagesRef, {
        content: message,
        sender: member.name, // Cambiar por el usuario actual
        timestamp: serverTimestamp()
      });
      setMessage('');
    }
  };

  return (
    <div>
      <h3>Chat for Group {idGrupo}</h3>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.sender}</p>: {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
