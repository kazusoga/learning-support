"use client";
import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
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
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Home;
