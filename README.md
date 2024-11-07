This is example trying to use popular libraries with Deno.

The api is a hono app. We want to take advantage of the hono/client so we can share types accross projects.

# Structure

- packages/api: Hono app
- packages/vite-react: Example Vite React App with Typescript this is step one. A simple example.
- packages/tanstack-start: Tanstack Start Project - Tanstack uses Nitro/Vinxi

Would be nice to see Deno docs here:
https://vite.dev/guide/


Questions/Concerns:

At first I setup compilerOptions in the deno.json file in the vite-react project but got the error.
"Warning "compilerOptions" field can only be specified in the workspace root deno.json file."
I would guess there's a good chance that some monorepos would need different compilerOptions for different projects.
For example I may be deploying the web portion to a non-Deno environment. And would want to make sure the deno.ns is not included.


packages/vite-react/src/hono-client.tsx
In this file we are trying to use the hono client and share types with the api. But the types break and we end up with just a type of "unknown" 