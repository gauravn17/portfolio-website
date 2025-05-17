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
        "Tech Stack: React for a dynamic front-end interface, Flask for a scalable back-end API, and integrating HuggingFace API for natural language understanding.",
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

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700 transition-all"
          >
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 dark:text-green-400 hover:underline"
                >
                  <ArrowRight className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
