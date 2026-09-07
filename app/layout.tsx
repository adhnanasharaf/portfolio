import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhnan A — AI Engineer & Researcher",
  description:
    "Portfolio of Adhnan A — AI Engineer specializing in production LLM systems, RAG pipelines, multi-agent orchestration, and computer vision research.",
  keywords: [
    "Adhnan A",
    "AI Engineer",
    "LLM Developer",
    "RAG",
    "LangChain",
    "LangGraph",
    "Multi-Agent Systems",
    "Machine Learning",
    "Scikit-learn",
    "XGBoost",
    "Computer Vision",
    "RateUp",
  ],
  authors: [{ name: "Adhnan A" }],
  openGraph: {
    title: "Adhnan A — AI Engineer & Researcher",
    description:
      "AI & ML Engineer with production experience building full-stack LLM systems, RAG pipelines, multi-agent workflows, and distributed backends. IEEE-accepted researcher.",
    url: "https://adhnan-portfolio.vercel.app/",
    siteName: "Adhnan A Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

