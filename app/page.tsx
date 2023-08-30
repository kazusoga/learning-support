"use client";
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      setTimeout(() => {
        setMessages([
          ...messages,
          { text: input, sender: "user" },
          { text: "こんにちは、私はChatGPTです。", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Chat with GPT-4</h1>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={message.text}
              secondary={message.sender === "user" ? "You" : "Bot"}
            />
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <Button variant="contained" color="primary" onClick={sendMessage}>
        Send
      </Button>
    </Container>
  );
};

export default Home;
