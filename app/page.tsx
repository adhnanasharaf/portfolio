"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-16 py-12 space-y-20">

      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Adhnan A</h1>
        <p className="text-xl text-gray-600">AI Engineer · Applied LLMs · Backend Systems</p>
        <p className="max-w-3xl text-gray-700">
          AI Engineer experienced in building Retrieval-Augmented Generation (RAG) pipelines,
          agentic AI systems, and LLM-powered automation. Strong background in backend systems,
          REST APIs, microservices, and scalable system design.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="mailto:adhnanasharaf567@gmail.com"><Mail className="w-4 h-4 mr-2" />Email</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+918075661597"><Phone className="w-4 h-4 mr-2" />Call</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/adhnanasharaf" target="_blank"><Github className="w-4 h-4 mr-2" />GitHub</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/adhnan-a-1156641b2" target="_blank"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>
          </Button>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <Card className="border border-gray-200">
          <CardContent className="p-6 space-y-2">
            <h3 className="font-semibold">AI Developer · RateUp</h3>
            <p className="text-sm text-gray-500">Remote</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Built AI agents and chatbots using LangChain, LLMs, and RAG to automate workflows.</li>
              <li>Delivered context-aware multi-turn conversations with Node.js backends and databases.</li>
              <li>Deployed reliable, low-latency production chatbots scalable to multi-agent systems.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Cybersecurity Automation – Kali Linux MCP Server</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  <li>Designed a custom MCP penetration-testing server for automated vulnerability scans.</li>
                  <li>Integrated Claude AI to generate optimized reconnaissance commands.</li>
                  <li>Enabled secure orchestration, real-time results, and centralized reporting.</li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/adhnanasharaf/kali_Linux_Mcp"
                  target="_blank"
                >
                  <Github className="w-4 h-4 mr-2" /> View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Calibre-Enhanced AI Ebook Manager (CLI)</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  <li>Automated ebook classification using LLMs with Calibre integration.</li>
                  <li>Built Node.js + Express backend with SQLite storage.</li>
                  <li>Delivered a seamless single-command CLI experience.</li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/adhnanasharaf/Ebook_classification"
                  target="_blank"
                >
                  <Github className="w-4 h-4 mr-2" /> View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Research Experience</h2>
        <Card className="border border-gray-200">
          <CardContent className="p-6 space-y-2">
            <h3 className="font-semibold">Computer Vision Voice-Assisted Indoor Navigation</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Developed AI-powered indoor navigation for visually impaired users.</li>
              <li>Implemented real-time object detection and voice-guided assistance.</li>
              <li>Accepted at IEEE ICCCNT; awaiting publication.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-gray-700">
          <strong>Languages:</strong> Java, Python, JavaScript, C, C++<br />
          <strong>AI:</strong> LLMs, RAG, LangChain, LangGraph, Agentic AI<br />
          <strong>Frameworks:</strong> React, MERN, Flutter, Node.js<br />
          <strong>Backend:</strong> REST APIs, MongoDB, SQLite, Microservices<br />
          <strong>Cloud:</strong> AWS, Docker, CI/CD
        </p>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="text-gray-700 space-y-2">
          <li><strong>B.Tech in Computer Science</strong> — Amrita University (2021 – Present)</li>
          <li><strong>Higher Secondary</strong> — Model Higher Secondary School (99% PCM & Biology)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>AWS Generative AI with Large Language Models</li>
          <li>Walmart USA Advanced Software Engineering (Forage)</li>
          <li>AWS APAC Solutions Architecture (Forage)</li>
        </ul>
      </section>

      {/* Leadership & Community */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Leadership & Community</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Security Team Lead — Blockcamp National Hackathon</li>
          <li>Founder, Unchain — Community initiative against substance abuse</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> adhnanasharaf567@gmail.com</p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 80756 61597</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kerala, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 border-t border-gray-200 text-gray-500 text-sm">
        © {new Date().getFullYear()} Adhnan A
      </footer>
    </div>
  );
}
