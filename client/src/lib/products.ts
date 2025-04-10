export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  logoImage?: string;
  features?: string[];
  benefits?: string[];
  linkUrl?: string;
  linkExternal?: boolean;
}

export const products: Product[] = [
  {
    id: "ren3",
    title: "ReN3.AI",
    description:
      "A cutting-edge AI assistant platform designed to help businesses automate processes, analyze data, and enhance decision-making capabilities.",
    image: "https://i.imghippo.com/files/oeF5911RXI.png",
    features: [
      "Run GPT-4, Qwen, and Claude with secure multi-model support.",
      "Use custom RAG pipelines for enterprise-specific knowledge.",
      "Deploy on-prem or in the cloud with full data control.",
      "Analyze text, images, and documents with multi-modal AI.",
      "Integrate with Microsoft 365, Zoom, Jira, and more via API.",
      "Build role-based AI assistants, dashboards, and workflows.",
    ],
    benefits: [
      "Reduce operational costs by 30-40% through intelligent process automation",
      "Accelerate decision-making with AI-powered data analysis and insights",
      "Enhance customer experience with 24/7 intelligent support capabilities",
      "Unlock new revenue streams through AI-driven product and service innovation",
      "Maintain competitive edge with cutting-edge AI tools and capabilities",
      "Improve employee productivity by automating routine tasks and queries",
      "Achieve faster time-to-market for new initiatives with AI assistance",
      "Ensure compliance through controlled, auditable AI interactions",
    ],
    linkUrl: "/products/ren3",
    linkExternal: false,
  },
];
