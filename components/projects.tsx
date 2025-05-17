"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

interface Project {
  title: string
  description: string[]
  link?: string
  github?: string
}

export default function Projects() {
  const projects: Project[] = [
  {
    title: "VibeMatch – ML Roommate Matcher",
    description: [
      "Building a machine-learning-based roommate matching app using personality traits and KNN clustering.",
      "Implementing user signup, profile upload, and preference inputs using React, Tailwind, and Flask.",
      "Designing to match roommates based on vibe compatibility, similar to Tinder but for co-living.",
    ],
    github: "https://github.com/gauravn17/VibeMatch",
  },
  {
    title: "ProfoundAI",
    description: [
      "Developing an AI-powered companion for deep reflection, emotional insight, and creative expression.",
      "Tech Stack : React for a dynamic front-end interface, Flask for a scalable back-end API and integrating HuggingFace API for natural language understanding",
    ],
    github: "https://github.com/gauravn17/ProfoundAI",
  },
  {
    title: "HealthHelp AI",
    description: [
      "Building a medical billing assistant that simplifies complex billing codes using LLMs.",
      "Integrated Streamlit for an interactive frontend and HuggingFace API for smart text processing.",
      "Allows users to input symptoms and receive billing code suggestions with explanations.",
    ],
    github: "https://github.com/gauravn17/HealthHelpAI",
  },
  {
    title: "EquiBrief",
    description: [
      "Built a natural language summarizer for stock market news and financial reports using OpenAI’s GPT models.",
      "Parsed real-time news and company filings to generate concise, investment-focused summaries.",
      "Used LangChain and Flask to build the backend and deployed it with a React-based frontend dashboard.",
    ],
    github: "https://github.com/gauravn17/EquiBrief",
  },
]
}

