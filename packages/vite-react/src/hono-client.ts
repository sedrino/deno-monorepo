import { type AppType } from "@namespace/api";
import { hc } from "hono/client";

const app = hc<AppType>("http://localhost:3000");
