// server.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = (request: Request): Response => {
  console.log(`Received request: ${request.method} ${request.url}`); // Log incoming requests
  const url = new URL(request.url);
  if (url.pathname === "/login" && request.method === "POST") {
    return new Response("Login successful", { status: 200 });
  }
  return new Response("Not Found", { status: 404 });
};

console.log("HTTP webserver running. Access it at: http://localhost:3000/");
await serve(handler, { port: 3000 });