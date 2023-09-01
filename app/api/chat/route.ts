// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI();

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Request the OpenAI API for the response based on the prompt

  const response = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
