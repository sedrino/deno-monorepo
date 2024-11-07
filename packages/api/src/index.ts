import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const schema = z.object({
  message: z.string(),
});

app.post("/", zValidator("json", schema), (c) => {
  const { message } = c.req.valid("json");
  return c.text(`Hello Hono! You sent: ${message}`);
});

export type AppType = typeof app;

Deno.serve(app.fetch);
