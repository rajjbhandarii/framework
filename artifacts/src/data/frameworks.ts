export interface Framework {
  slug: string;
  name: string;
  tagline: string;
  category: "Library" | "Framework" | "Meta-Framework" | "Compiler";
  language: string;
  color: string;
  badge: string;
  released: string;
  creator: string;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  codeExample: string;
  popularity: number;
  learning: "Easy" | "Medium" | "Hard";
  website: string;
}

export const frameworks: Framework[] = [
  {
    slug: "react",
    name: "React",
    tagline: "A JavaScript library for building user interfaces",
    category: "Library",
    language: "JavaScript / TypeScript",
    color: "#61DAFB",
    badge: "Most Popular",
    released: "2013",
    creator: "Meta (Facebook)",
    description:
      "React is a declarative, component-based library that lets you build interactive UIs from isolated pieces of code called components. Maintained by Meta, it has become the most widely used frontend library in the world.",
    longDescription:
      "React introduced the concept of the Virtual DOM, allowing it to efficiently update only the parts of the page that changed. Its component model and one-way data flow make it predictable and easy to debug. The ecosystem around React — including Next.js, React Router, Redux, and thousands of libraries — is unmatched in breadth.",
    pros: [
      "Massive ecosystem and community",
      "Flexible — bring your own tools",
      "Excellent developer tooling (DevTools, Hot Reload)",
      "Strong corporate backing from Meta",
      "Works for web, mobile (React Native), and desktop",
    ],
    cons: [
      "Just a UI library — you need extra tools for routing, state, etc.",
      "JSX syntax has a learning curve",
      "Rapid ecosystem churn can be overwhelming",
      "Verbose boilerplate compared to some alternatives",
    ],
    bestFor: ["SPAs", "Large-scale apps", "Teams with mixed skill levels", "Cross-platform development"],
    codeExample: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    popularity: 95,
    learning: "Medium",
    website: "https://react.dev",
  },
  {
    slug: "vue",
    name: "Vue.js",
    tagline: "The progressive JavaScript framework",
    category: "Framework",
    language: "JavaScript / TypeScript",
    color: "#42B883",
    badge: "Beginner Friendly",
    released: "2014",
    creator: "Evan You",
    description:
      "Vue is a progressive framework designed to be incrementally adoptable. Its core library focuses on the view layer, making it easy to integrate with other projects or existing server-rendered applications.",
    longDescription:
      "Vue's approachable learning curve and elegant API have earned it a massive following, especially among developers coming from a jQuery or traditional HTML/CSS background. The Single File Component (SFC) format — where template, script, and style live in one `.vue` file — keeps related code together in a highly readable way. Vue 3 introduced the Composition API, bringing it to parity with React's hooks.",
    pros: [
      "Very gentle learning curve",
      "Excellent documentation",
      "Single File Components keep code organized",
      "Two-way data binding out of the box",
      "Strong performance with reactivity system",
    ],
    cons: [
      "Smaller ecosystem than React",
      "Less corporate adoption in large enterprises",
      "Nuances between Options API and Composition API",
      "Fewer available jobs compared to React/Angular",
    ],
    bestFor: ["Beginners", "Rapid prototyping", "Progressive enhancement", "Laravel backends"],
    codeExample: `<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="count++">
      Increment
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>`,
    popularity: 75,
    learning: "Easy",
    website: "https://vuejs.org",
  },
  {
    slug: "angular",
    name: "Angular",
    tagline: "The web development platform for modern apps",
    category: "Framework",
    language: "TypeScript",
    color: "#DD0031",
    badge: "Enterprise Grade",
    released: "2016",
    creator: "Google",
    description:
      "Angular is a comprehensive, opinionated platform built on TypeScript. Maintained by Google, it provides everything you need — routing, forms, HTTP, testing, and more — out of the box.",
    longDescription:
      "Angular is the most batteries-included framework on this list. It enforces a strict project structure with modules, components, services, and dependency injection — which can feel rigid for small projects but shines in large teams. TypeScript is not optional; it's baked in from the ground up. If you're building enterprise-scale apps where structure and consistency matter more than flexibility, Angular is a top contender.",
    pros: [
      "Complete, opinionated solution — no decision fatigue",
      "Built-in TypeScript, dependency injection, and CLI",
      "Excellent for large teams and enterprise apps",
      "Backed by Google with long-term support",
      "Comprehensive testing utilities",
    ],
    cons: [
      "Steep learning curve and complex concepts (decorators, DI, zones)",
      "More verbose boilerplate than React or Vue",
      "Overkill for small to medium projects",
      "Slower release cycle for breaking changes",
    ],
    bestFor: ["Enterprise applications", "Large teams", "Long-lived projects", "Complex business logic"],
    codeExample: `@Component({
  selector: 'app-counter',
  template: \`
    <p>Count: {{ count }}</p>
    <button (click)="increment()">
      Increment
    </button>
  \`,
})
export class CounterComponent {
  count = 0;
  increment() { this.count++; }
}`,
    popularity: 65,
    learning: "Hard",
    website: "https://angular.dev",
  },
  {
    slug: "svelte",
    name: "Svelte",
    tagline: "Cybernetically enhanced web apps",
    category: "Compiler",
    language: "JavaScript / TypeScript",
    color: "#FF3E00",
    badge: "No Virtual DOM",
    released: "2016",
    creator: "Rich Harris",
    description:
      "Svelte takes a radically different approach: instead of doing the heavy lifting in the browser, it shifts that work to compile time. Svelte compiles your code to tiny, framework-free vanilla JavaScript.",
    longDescription:
      "Svelte has no runtime overhead. Because it compiles your components into efficient imperative code at build time, the browser loads plain JavaScript with no framework code to parse. The result is incredibly fast, small bundles. Svelte's syntax is also arguably the cleanest — reactivity is built into the language itself with simple `$:` labels, and you don't even need to call `setState`.",
    pros: [
      "No virtual DOM — direct DOM manipulation for great performance",
      "Smallest bundle sizes of any framework",
      "Incredibly clean, minimal syntax",
      "Reactivity built into the language",
      "Great developer experience with less boilerplate",
    ],
    cons: [
      "Smaller ecosystem than React or Vue",
      "Fewer learning resources and job listings",
      "Less mature tooling",
      "Some advanced patterns require workarounds",
    ],
    bestFor: ["Performance-critical apps", "Interactive components", "Developers who dislike boilerplate", "Small teams"],
    codeExample: `<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<p>Count: {count}</p>
<button on:click={increment}>
  Increment
</button>`,
    popularity: 55,
    learning: "Easy",
    website: "https://svelte.dev",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    tagline: "The React framework for the web",
    category: "Meta-Framework",
    language: "JavaScript / TypeScript",
    color: "#000000",
    badge: "Full-Stack React",
    released: "2016",
    creator: "Vercel",
    description:
      "Next.js is a React meta-framework that gives you the best developer experience with all the features you need for production: hybrid rendering, TypeScript support, file-based routing, API routes, and more.",
    longDescription:
      "Next.js sits on top of React and adds everything you need to build production-grade web applications. File-based routing means creating a page is as simple as adding a file to the `pages` (or `app`) directory. It supports SSR, SSG, ISR, and CSR in the same project. With the App Router and React Server Components, Next.js is pushing the boundaries of what a web framework can do.",
    pros: [
      "File-based routing — no config needed",
      "Supports SSR, SSG, ISR, and CSR in one project",
      "Built-in image optimization, fonts, and more",
      "API routes for full-stack capability",
      "Excellent performance and Core Web Vitals",
    ],
    cons: [
      "Opinionated file structure that's hard to escape",
      "App Router complexity and learning curve",
      "Vendor lock-in risk with Vercel features",
      "Overkill for purely static sites",
    ],
    bestFor: ["SEO-critical apps", "E-commerce", "Content sites", "Full-stack React apps"],
    codeExample: `// app/page.tsx
export default async function Page() {
  const data = await fetch('/api/posts');
  const posts = await data.json();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
    popularity: 90,
    learning: "Medium",
    website: "https://nextjs.org",
  },
  {
    slug: "nuxt",
    name: "Nuxt",
    tagline: "The intuitive Vue framework",
    category: "Meta-Framework",
    language: "JavaScript / TypeScript",
    color: "#00DC82",
    badge: "Full-Stack Vue",
    released: "2016",
    creator: "Sebastien Chopin & team",
    description:
      "Nuxt is to Vue what Next.js is to React. It provides a powerful set of features including file-based routing, server-side rendering, auto-imports, and full-stack capabilities — all with Vue's elegant syntax.",
    longDescription:
      "Nuxt 3 was rebuilt from scratch, bringing Vite, Nitro (a universal server engine), and the Vue Composition API as its foundation. It introduced auto-imports of components, composables, and utilities — meaning you rarely need to write import statements manually. The Nuxt module ecosystem has hundreds of plug-and-play integrations for auth, CMS, databases, and more.",
    pros: [
      "Auto-imports reduce boilerplate dramatically",
      "Excellent DX with instant HMR via Vite",
      "Nitro server works on Node, Deno, Bun, Cloudflare Workers",
      "First-class TypeScript support",
      "Large, active module ecosystem",
    ],
    cons: [
      "Smaller community than Next.js",
      "Complex configuration can be overwhelming",
      "Debugging server-side issues can be tricky",
      "Inherits Vue's smaller enterprise footprint",
    ],
    bestFor: ["Vue developers wanting SSR", "Content-heavy sites", "JAMstack apps", "Full-stack Vue"],
    codeExample: `// pages/index.vue
<script setup>
const { data: posts } = await useFetch('/api/posts')
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>`,
    popularity: 60,
    learning: "Medium",
    website: "https://nuxt.com",
  },
  {
    slug: "astro",
    name: "Astro",
    tagline: "The web framework for content-driven websites",
    category: "Meta-Framework",
    language: "JavaScript / TypeScript",
    color: "#FF5D01",
    badge: "Zero JS by Default",
    released: "2021",
    creator: "Fred K. Schott & team",
    description:
      "Astro is designed from the ground up to be fast. It ships zero JavaScript by default and uses 'Islands Architecture' to hydrate only interactive components, leaving the rest as static HTML.",
    longDescription:
      "Astro's biggest selling point is performance. By building pages as static HTML and only shipping JavaScript for interactive 'islands', pages load blazing fast. The framework is also uniquely UI-agnostic: you can use React, Vue, Svelte, Solid, or any other framework's components all in the same project. This makes it ideal for content-heavy sites like blogs, documentation, and marketing pages.",
    pros: [
      "Zero JavaScript by default — fastest possible initial load",
      "Use components from ANY framework (React, Vue, Svelte...)",
      "Built-in support for Markdown and MDX content",
      "Island Architecture for selective hydration",
      "Excellent for SEO",
    ],
    cons: [
      "Not suited for highly interactive apps",
      "Islands can be complex to coordinate",
      "Smaller ecosystem than React-based solutions",
      "Client-side routing requires opt-in",
    ],
    bestFor: ["Blogs & documentation", "Marketing websites", "Portfolio sites", "Content-heavy apps"],
    codeExample: `---
// Component Script (server-side)
const posts = await fetchPosts();
---

<!-- Component Template -->
<ul>
  {posts.map(post => (
    <li>
      <a href={post.url}>{post.title}</a>
    </li>
  ))}
</ul>`,
    popularity: 70,
    learning: "Easy",
    website: "https://astro.build",
  },
  {
    slug: "remix",
    name: "Remix",
    tagline: "Build better websites with the web platform",
    category: "Meta-Framework",
    language: "JavaScript / TypeScript",
    color: "#E8F2FF",
    badge: "Web Standards",
    released: "2021",
    creator: "Ryan Florence & Michael Jackson",
    description:
      "Remix is a full-stack React framework that focuses on web fundamentals and progressive enhancement. It embraces browser APIs and HTTP standards rather than abstracting them away.",
    longDescription:
      "Remix takes a unique philosophy: rather than inventing new patterns, it doubles down on how the web actually works — HTTP requests, forms, cookies, and browser APIs. Data loading and mutations are handled through loaders and actions co-located with each route. Error boundaries and loading states are first-class citizens. The result is apps that work even without JavaScript, degrade gracefully, and feel fast by default.",
    pros: [
      "Embraces web fundamentals (forms, HTTP, browser APIs)",
      "Nested routes with parallel data loading",
      "Works without JavaScript (progressive enhancement)",
      "Excellent error handling with error boundaries",
      "Runs on any JS runtime (Node, Deno, Cloudflare...)",
    ],
    cons: [
      "Different mental model than traditional SPAs",
      "Less community content than Next.js",
      "Server required — no static site generation",
      "Steeper conceptual curve despite simple APIs",
    ],
    bestFor: ["Forms-heavy applications", "E-commerce", "Apps that need offline resilience", "Full-stack teams"],
    codeExample: `// routes/posts.tsx
export async function loader() {
  return json(await getPosts());
}

export default function Posts() {
  const posts = useLoaderData<typeof loader>();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
    popularity: 45,
    learning: "Medium",
    website: "https://remix.run",
  },
];
