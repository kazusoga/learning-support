"use client";
import React from "react";
import { Container, List, ListItem, ListItemText } from "@mui/material";
// https://sdk.vercel.ai/docs/api-reference/use-chat
import { useChat } from "ai/react";

const Home: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Container maxWidth="sm">
      <h1>Chat with GPT-4</h1>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText
              primary={message.content}
              secondary={message.role === "user" ? "You" : "Bot"}
            />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Home;
