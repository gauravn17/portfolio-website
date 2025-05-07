"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  image: string
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer Intern",
      company: "Qualcomm Institute, UC San Diego",
      location: "San Diego, CA",
      period: "Apr 2024 – Present",
      description: [
        "Developing scalable scientific computing pipelines and web applications for research teams.",
        "Collaborating with faculty and researchers to integrate simulation tools into production environments.",
        "Improving system performance and automating data workflows to support interdisciplinary research.",
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/UC_San_Diego_logo.svg/512px-UC_San_Diego_logo.svg.png",
    },
    {
      title: "Undergraduate ML Researcher",
      company: "Scripps Institute of Oceanography",
      location: "San Diego, CA",
      period: "Apr 2024 – Present",
      description: [
        "Applying machine learning to study aerosol-cloud interactions and climate variability.",
        "Training neural networks to model satellite-observed environmental patterns using PyTorch and TensorFlow.",
        "Working under Professor Duncan Watson-Parris in the Climate Analytics Lab.",
      ],
      image: "https://scripps.ucsd.edu/sites/default/files/styles/ucsd_banner/public/2023-01/scripps_logo.png",
    },
    {
      title: "Data Analysis and ML Intern",
      company: "Mswipe Technologies",
      location: "Mumbai, India",
      period: "Jun 2023 – Aug 2023",
      description: [
        "Performed customer segmentation using K-Means and optimized operational KPIs through time-series forecasting.",
        "Built interactive dashboards in Excel and Python to analyze rental models and merchant behavior.",
        "Enabled business teams to make data-driven decisions using predictive insights.",
      ],
      image: "https://mswipe.com/assets/images/logo.png",
    },
    {
      title: "Senior Quantitative Analyst",
      company: "Hedge Fund Club @ UCSD",
      location: "San Diego, CA",
      period: "Mar 2023 – Present",
      description: [
        "Designed systematic trading strategies using Python and backtested them on equities and ETFs.",
        "Collaborated with analysts on alpha research, portfolio allocation, and risk-adjusted performance.",
        "Led educational sessions on financial modeling, derivatives, and backtesting tools like QuantConnect.",
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/6/64/UC_San_Diego_logo.svg",
    },
    {
      title: "Product Management Intern",
      company: "Netcore Cloud",
      location: "Mumbai, India",
      period: "Jul 2023 – Sep 2023",
      description: [
        "Managed roadmap planning and user story writing for AI-based customer retention tools.",
        "Worked with designers and engineers to ship feature enhancements and fix user friction points.",
        "Conducted market analysis and competitor benchmarking for go-to-market strategies.",
      ],
      image: "https://netcorecloud.com/wp-content/uploads/2022/06/netcore-full-logo.svg",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
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
            <span className="text-navy font-medium">Experience</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Professional Journey</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            From climate AI to fintech data science, my journey blends research, software engineering, and product thinking.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-white rounded-xl shadow-md p-6 card-hover border-l-4 border-navy">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 relative mr-4 bg-white rounded-full p-2 shadow-sm">
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={exp.company}
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{exp.title}</h3>
                        <p className="text-navy/80 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2 text-navy/60" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-navy/60" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 timeline-item">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="text-lg font-semibold text-navy mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
