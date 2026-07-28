export type Project = {
  name: string;
  description: string;
  stack: string;
  url: string;
};

export const projects: Project[] = [
  {
    name: "Brain Dump",
    description: "A RAG-based knowledge management app — dump your notes, chat with your own brain.",
    stack: "next.js · prisma · pgvector · gemini",
    url: "https://dump.aftercp.com",
  },
  {
    name: "Connect4 Engine",
    description: "Minimax with alpha-beta pruning, running off the main thread so the UI never blocks.",
    stack: "next.js · typescript · web workers",
    url: "https://c4.aftercp.com",
  },
  {
    name: "Aesthetic Focus",
    description: "A pomodoro timer with ambient sound and Spotify baked in, for the long grinding sessions.",
    stack: "next.js · spotify api",
    url: "https://study.aftercp.com",
  },
  {
    name: "Whiteboard App",
    description: "A collaborative whiteboard — draw, sketch, and think out loud in real time.",
    stack: "react · hooks · context · web workers",
    url: "https://draw.aftercp.com",
  },
];
