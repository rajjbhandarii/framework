import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  Search,
  Code2,
  Zap,
  BookOpen,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { frameworks } from "@/data/frameworks";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const categoryColors: Record<string, string> = {
  Library: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Framework: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Meta-Framework": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Compiler: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

const learningColors: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Library", "Framework", "Meta-Framework", "Compiler"];

  const filtered = frameworks.filter((f) => {
    const matchSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || f.category === filter;
    return matchSearch && matchFilter;
  });

  const featured = frameworks.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Code2 className="w-6 h-6 text-primary" />
            <span>FrameworkBlog</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#frameworks" className="hover:text-foreground transition-colors">Frameworks</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#frameworks" onClick={() => setMenuOpen(false)} className="py-2 border-b border-border">Frameworks</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-2">About</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              >
                <BookOpen className="w-4 h-4" />
                Web Development Guides
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
              >
                Which Framework Should{" "}
                <span className="text-primary">You Choose?</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                An honest, in-depth comparison of the most popular web frameworks and libraries — React, Vue, Angular, Svelte, Next.js, Nuxt, Astro, and more. No hype, just facts.
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="#frameworks"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-base"
              >
                Explore Frameworks <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-border py-8 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
              {[
                { icon: Code2, label: "Frameworks Covered", value: `${frameworks.length}` },
                { icon: Zap, label: "Honest Pros & Cons", value: "All" },
                { icon: BookOpen, label: "Code Examples", value: "Every one" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <stat.icon className="w-5 h-5 text-primary mb-1" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">
                Featured
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground">
                The most talked-about picks this season
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {featured.map((fw) => (
                <motion.div key={fw.slug} variants={fadeUp}>
                  <Link href={`/framework/${fw.slug}`}>
                    <div className="group h-full border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card">
                      <div
                        className="h-3 w-full"
                        style={{ backgroundColor: fw.color === "#000000" ? "#555" : fw.color }}
                      />
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[fw.category]}`}>
                              {fw.category}
                            </span>
                          </div>
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {fw.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {fw.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {fw.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                          <span>By {fw.creator}</span>
                          <span className="flex items-center gap-1 text-primary font-medium">
                            Read more <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All Frameworks */}
        <section id="frameworks" className="py-20 bg-secondary/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-10"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">
                All Frameworks
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
                Filter by type or search by name
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search frameworks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                        filter === cat
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">No frameworks match your search.</p>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((fw) => (
                  <motion.div key={fw.slug} variants={fadeUp} layout>
                    <Link href={`/framework/${fw.slug}`}>
                      <div className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                            style={{ backgroundColor: fw.color === "#000000" ? "#444" : fw.color === "#E8F2FF" ? "#3b5cf5" : fw.color }}
                          >
                            {fw.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                              {fw.name}
                            </h3>
                            <span className={`text-xs font-medium ${categoryColors[fw.category]} px-1.5 py-0.5 rounded`}>
                              {fw.category}
                            </span>
                          </div>
                          <div className="ml-auto flex-shrink-0">
                            <div className="text-xs text-muted-foreground text-right">Popularity</div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${fw.popularity}%` }}
                                />
                              </div>
                              <span className="text-xs font-medium">{fw.popularity}%</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4">
                          {fw.tagline}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                          <span>
                            Learning:{" "}
                            <span className={`font-semibold ${learningColors[fw.learning]}`}>
                              {fw.learning}
                            </span>
                          </span>
                          <span>Since {fw.released}</span>
                          <span className="text-primary flex items-center gap-0.5 font-medium">
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
                Why This Blog?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
                Choosing a web framework is one of the most consequential early decisions on any project. This blog cuts through the hype to give you honest, structured comparisons — covering learning curve, ecosystem maturity, performance, and best use cases.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                Whether you're a solo developer starting a new side project, or a team lead evaluating options for a large-scale product, you'll find the clarity you need here.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Code2 className="w-4 h-4 text-primary" />
            FrameworkBlog
          </div>
          <p>A guide to modern web development frameworks · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
