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
      "Advanced LLM infrastructure with multi-model support (GPT-4, Qwen, Claude)",
      "Customizable Retrieval-Augmented Generation (RAG) for enterprise-specific knowledge",
      "Secure, private deployment with data sovereignty compliance",
      "Multi-modal capabilities supporting text, images, and document analysis",
      "Enterprise-grade security with role-based access control",
      "API-first architecture for seamless integration with existing systems",
      "Comprehensive dashboard with usage analytics and insights",
      "Customizable AI assistants for different business functions",
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
