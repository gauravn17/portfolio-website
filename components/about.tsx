"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-navy mr-4"></div>
            <span className="text-navy font-medium">About Me</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Get to Know Me</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover border-t-4 border-navy">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-lightblue rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-navy font-heading">About Me</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                I’m Gaurav Nair, a third-year Mathematics–Computer Science major at UC San Diego with a strong interest in AI, data, and building real-world systems that scale. My work spans across AI engineering, data analytics, and full-stack web development.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                I’ve interned at a fast-growing fintech company, led web development for nationwide events, and built machine learning projects like Bitcoin price forecasting, roommate-matching algorithms, and AI-powered chatbots using LangChain and Flask. I enjoy working at the intersection of engineering and product to bring ideas to life.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Outside of tech, I’m a fan of hiking, soccer, long walks by the beach, and reading. I’m currently looking for internship opportunities where I can apply my skills, learn from mentors, and contribute to impactful teams.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
