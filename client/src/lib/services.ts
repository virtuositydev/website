export interface Technology {
  name: string;
  url: string;
  logoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies?: Technology[];
  extraLink?: {
    text: string;
    url: string;
  };
}

export const services: Service[] = [
  {
    id: "hybrid-cloud",
    title: "Hybrid Cloud Platform",
    description:
      "Scale applications seamlessly across multiple cloud platforms with the right container orchestration tool.",
    image:
      "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_cloud.png",
    features: [
      "Broadcom VMware infrastructure solutions",
      "Cloud migration and optimization",
      "Multi-cloud orchestration with Kubernetes",
      "Seamless scalability and management",
    ],
    technologies: [
      {
        name: "Docker",
        url: "https://www.docker.com/",
        logoUrl:
          "https://www.docker.com/app/uploads/2023/05/symbol_blue-docker-logo.png",
      },
      {
        name: "Kubernetes",
        url: "https://kubernetes.io/",
        logoUrl:
          "https://pbs.twimg.com/profile_images/511909265720614913/21_d3cvM_400x400.png",
      },
      {
        name: "VMware",
        url: "https://www.vmware.com/",
        logoUrl:
          "https://images.seeklogo.com/logo-png/50/2/vmware-by-broadcom-logo-png_seeklogo-508529.png",
      },
      {
        name: "OpenShift",
        url: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
        logoUrl: "https://www.svgrepo.com/show/354273/redhat-icon.svg",
      },
      {
        name: "Azure",
        url: "https://azure.microsoft.com/",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      },
      {
        name: "Rancher",
        url: "https://www.rancher.com",
        logoUrl:
          "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Rancher.component.complex-narrative-xl.ts=1691083019889.png/content/adobe-cms/us/en/products/instana/supported-technologies/rancher-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage",
      },
      {
        name: "AliCloud",
        url: "https://www.alibabacloud.com/",
        logoUrl:
          "https://pbs.twimg.com/profile_images/1823993947196416000/qm43oRJx_400x400.png",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps Platform",
    description:
      "Automate software development with DevOps toolchain, accelerating developer productivity and code quality",
    image:
      "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_devops.png",
    features: [
      "Automated CI/CD workflows",
      "Infrastructure as Code (IaC)",
      "DevSecOps integration",
      "Automated testing and deployment",
    ],
    technologies: [
      {
        name: "GitLab",
        url: "https://about.gitlab.com/",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
      },
      {
        name: "GitHub",
        url: "https://github.com/",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      },
      {
        name: "Jenkins",
        url: "https://www.jenkins.io/",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
      },
      {
        name: "Red Hat OpenShift Pipelines",
        url: "https://www.redhat.com/en/topics/devops/what-cicd-pipeline",
        logoUrl: "https://www.svgrepo.com/show/354273/redhat-icon.svg",
      },
      {
        name: "Ansible",
        url: "https://www.ansible.com/",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/ansible.svg",
      },
      {
        name: "Terraform",
        url: "https://www.terraform.io/",
        logoUrl:
          "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg",
      },

      {
        name: "HashiCorp Vault",
        url: "https://www.vaultproject.io",
        logoUrl:
          "https://connect.redhat.com/s3api/prod-s3api/1637174263-logo-url-61954b7020da7eae27db0e2a.png",
      },
      {
        name: "FluentBit",
        url: "https://fluentbit.io/",
        logoUrl: "https://dt-cdn.net/hub/logos/fluent-bit.png",
      },
      {
        name: "SonarQube",
        url: "https://www.sonarqube.org/",
        logoUrl:
          "https://miro.medium.com/v2/resize:fit:1400/1*AuJEZBUtH4XXU1WSbQIImA.png",
      },
      {
        name: "Grafana",
        url: "https://grafana.com/",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUxjtaFJ76OcfcQZ9B-Nose2CB0tLB6HutA&s",
      },

      {
        name: "Elasticsearch",
        url: "https://www.elastic.co/elasticsearch",
        logoUrl:
          "https://marketplace-assets.digitalocean.com/logos/elasticsearch.png",
      },
    ],
  },
  {
    id: "microservices",
    title: "Cloud Native Applications",
    description:
      "Build modern applications with microservices for faster deployment and market adaptability.",
    image:
      "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_microservices-1.png",
    features: [
      "Monolith to microservices migration",
      "API gateway implementation",
      "Service mesh architecture",
      "Event-driven design patterns",
    ],
    technologies: [
      {
        name: "Kafka",
        url: "https://kafka.apache.org/",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/kafka.svg",
      },
      {
        name: "Confluent",
        url: "https://www.confluent.io/",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4b9mnrVCg1sWsTvUMh3_-tkdTrmdlsGuktw&s",
      },
      {
        name: "Redis",
        url: "https://redis.io/",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/redis.svg",
      },
      {
        name: "YugabyteDB",
        url: "https://www.yugabyte.com/",
        logoUrl:
          "https://logosandtypes.com/wp-content/uploads/2024/06/Yugabyte.png",
      },
      {
        name: "Istio",
        url: "https://istio.io/",
        logoUrl: "https://istio.io/latest/img/logo.png",
      },
      {
        name: "Kong",
        url: "https://konghq.com/",
        logoUrl:
          "https://icon-icons.com/icons2/2699/PNG/512/konghq_logo_icon_169371.png",
      },
      {
        name: "Hasura",
        url: "https://hasura.io/",
        logoUrl: "https://avatars.githubusercontent.com/u/13966722?s=200&v=4",
      },
    ],
  },
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Enhance productivity with secure, multi-modal AI agents with RAG capabilities",
    image: "https://i.ibb.co/nNxbn340/ai-tools-logo.png",
    features: [
      "Multi-modal AI agents",
      "LLM fine-tuning and integration",
      "Workflow automation with AI",
      "Private, Secure Agentic AI",
    ],
    technologies: [
      {
        name: "ReN3.ai",
        url: "https://ren3.ai/",
        logoUrl: "https://i.imghippo.com/files/oeF5911RXI.png",
      },
      {
        name: "OpenAI",
        url: "https://openai.com/",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
      },
      {
        name: "DeepSeek",
        url: "https://www.deepseek.com/",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRKGPBBYxzEzLz2fVX8Tri_2RHFK3w7RmuQ&s",
      },
      {
        name: "Claude",
        url: "https://www.anthropic.com/claude",
        logoUrl:
          "https://cdn-1.webcatalog.io/catalog/claude/claude-icon-filled-256.png?v=1740028050419",
      },
      {
        name: "Llama",
        url: "https://ai.meta.com/llama/",
        logoUrl:
          "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1677940393/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/meta_nnmll6.webp",
      },
      {
        name: "NVIDIA",
        url: "https://www.nvidia.com/",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
      },
      {
        name: "AMD",
        url: "https://www.amd.com/",
        logoUrl:
          "https://cdn.freebiesupply.com/logos/large/2x/amd-logo-png-transparent.png",
      },
    ],
  },
];
