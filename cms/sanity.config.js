import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import schema from "./schemas/schema";

export default defineConfig({
    title: "ryankilleen.com",
    projectId: "90sffhgh",
    dataset: "production",
    plugins: [deskTool(), visionTool(), codeInput()],
    tools: (prev) => {
        // 👇 Uses environment variables set by Vite in development mode
        if (import.meta.env.DEV) {
            return prev;
        }
        return prev.filter((tool) => tool.name !== "vision");
    },
    schema: {
        types: schema,
    },
});
