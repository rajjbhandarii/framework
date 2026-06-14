import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, ExternalLink, Code2, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { frameworks } from "@/data/frameworks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const categoryColors: Record<string, string> = {
  Library: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Framework: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Meta-Framework": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Compiler: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

const learningBg: Record<string, string> = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export default function Post() {
  const params = useParams<{ slug: string }>();
  const { theme, setTheme } = useTheme();
  const fw = frameworks.find((f) => f.slug === params.slug);

  if (!fw) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Framework not found</h1>
          <Link href="/" className="text-primary hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  const accentColor = fw.color === "#000000" ? "#555" : fw.color === "#E8F2FF" ? "#3b5cf5" : fw.color;
  const related = frameworks.filter((f) => f.slug !== fw.slug && f.category === fw.category).slice(0, 3);
  const otherRelated = related.length < 2
    ? frameworks.filter((f) => f.slug !== fw.slug).slice(0, 3)
    : related;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Code2 className="w-6 h-6 text-primary" />
            <span>FrameworkBlog</span>
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Hero banner */}
      <div className="h-2 w-full" style={{ backgroundColor: accentColor }} />
      <div className="py-14 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all frameworks
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${categoryColors[fw.category]}`}>
                {fw.category}
              </span>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${learningBg[fw.learning]}`}>
                {fw.learning} to learn
              </span>
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                {fw.badge}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                {fw.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{fw.name}</h1>
                <p className="text-muted-foreground mt-1">{fw.tagline}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 text-sm text-muted-foreground mt-6">
              <span><strong className="text-foreground">Released:</strong> {fw.released}</span>
              <span><strong className="text-foreground">By:</strong> {fw.creator}</span>
              <span><strong className="text-foreground">Language:</strong> {fw.language}</span>
              <a
                href={fw.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                Official site <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-14"
        >
          {/* Overview */}
          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{fw.description}</p>
            <p className="text-muted-foreground leading-relaxed text-base mt-4">{fw.longDescription}</p>
          </motion.section>

          {/* Popularity */}
          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-4">Popularity Score</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: accentColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${fw.popularity}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                />
              </div>
              <span className="text-2xl font-bold">{fw.popularity}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on usage surveys, npm downloads, and job market demand.
            </p>
          </motion.section>

          {/* Pros & Cons */}
          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-xl p-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Strengths
                </h3>
                <ul className="space-y-3">
                  {fw.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-900 dark:text-green-200">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl p-6">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Weaknesses
                </h3>
                <ul className="space-y-3">
                  {fw.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-red-900 dark:text-red-200">
                      <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Best For */}
          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <div className="flex flex-wrap gap-3">
              {fw.bestFor.map((use, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm font-medium"
                >
                  {use}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Code Example */}
          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-4">Code Example</h2>
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-zinc-400 font-mono">
                  {fw.name.toLowerCase()}-example
                  {fw.language.includes("TypeScript") ? ".tsx" : ".js"}
                </span>
              </div>
              <pre className="bg-zinc-950 text-zinc-100 p-6 overflow-x-auto text-sm leading-relaxed font-mono">
                <code>{fw.codeExample}</code>
              </pre>
            </div>
          </motion.section>

          {/* Quick Stats */}
          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-6">Quick Reference</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Type", value: fw.category },
                { label: "Learning", value: fw.learning },
                { label: "Since", value: fw.released },
                { label: "Language", value: fw.language.split(" /")[0] },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-bold text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related */}
          {otherRelated.length > 0 && (
            <motion.section variants={fadeUp}>
              <h2 className="text-2xl font-bold mb-6">Also Compare</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {otherRelated.map((rel) => (
                  <Link key={rel.slug} href={`/framework/${rel.slug}`}>
                    <div className="group bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: rel.color === "#000000" ? "#444" : rel.color === "#E8F2FF" ? "#3b5cf5" : rel.color }}
                        >
                          {rel.name.charAt(0)}
                        </div>
                        <h3 className="font-bold group-hover:text-primary transition-colors">{rel.name}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{rel.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/10 mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <Code2 className="w-4 h-4 text-primary" />
            FrameworkBlog
          </Link>
          <p>A guide to modern web development frameworks · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
