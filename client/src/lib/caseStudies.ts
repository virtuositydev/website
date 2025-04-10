export interface CaseStudy {
  id: string;
  industry: string;
  stats: {
    value: string | number;
    label: string;
  }[];
  background: string;
  journey: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fs",
    industry: "Financial Services",
    stats: [
      {
        value: 8,
        label: "DevOps Components Deployed",
      },
      {
        value: 9,
        label: "Private Cloud Environment with Orchestration",
      },
    ],
    background:
      "As one of the largest digital banking players in the region, the Client had a vision to re-invent banking. With the advent of modern applications methods and supporting technology, new and traditional players in the Financial Services Industry can race forward to meet on a level playing field. The vision was to bring convenience of banking into the hands of their customers - with the mobile banking landscape accelerated by the Covid-19 pandemic.",
    journey:
      "Virtuosity's initial scope of engagement was to design and implement a Kubernetes platform capable of deploying modern applications to the Client's private cloud. That initiative was quickly achieved with their existing IT infrastructure by introducing a complementary Enterprise-grade Kubernetes platform, coupled with a capable Client team. The next challenge was to ensure that the basic DevOps tools and processes were put in place for better usability and sustainability.",
  },
  {
    id: "telco",
    industry: "Telecommunications",
    stats: [
      {
        value: 5,
        label: "DevOps Components Deployed",
      },
      {
        value: 1,
        label: "Private Cloud Environment with Orchestration",
      },
    ],
    background:
      "As one of the largest digital telecommunications and connectivity service providers in the country, the Client already had a dynamic team that came from different IT functions - each team architected, developed and deployed applications differently. In recent years, the Client had also successfully completed an implementation of a Software Defined Datacenter (SDDC) with self-service capabilities and a strong governance process put in place.",
    journey:
      "Virtuosity's original scope of engagement was to design and implement a Kubernetes platform capable of deploying modern applications to the client's private cloud. Upon a successful deployment, the next steps were to ensure each team could utilise the common platform for their applications. As there were some teams that were at a different application development maturity stage, Virtuosity took the extra step to advise and introduce basic DevOps tools including CI/CD pipelines.",
  },
  /*{
    id: "ps",
    industry: "Public Sector",
    stats: [
      {
        value: 5,
        label: "DevOps Components Deployed",
      },
      {
        value: 1,
        label: "Private Cloud Environment with Orchestration",
      },
    ],
    background:
      "As one of the largest digital telecommunications and connectivity service providers in the country, the Client already had a dynamic team that came from different IT functions - each team architected, developed and deployed applications differently. In recent years, the Client had also successfully completed an implementation of a Software Defined Datacenter (SDDC) with self-service capabilities and a strong governance process put in place.",
    journey:
      "Virtuosity's original scope of engagement was to design and implement a Kubernetes platform capable of deploying modern applications to the client's private cloud. Upon a successful deployment, the next steps were to ensure each team could utilise the common platform for their applications. As there were some teams that were at a different application development maturity stage, Virtuosity took the extra step to advise and introduce basic DevOps tools including CI/CD pipelines.",
  },*/
  {
    id: "fm",
    industry: "Facilities Management",
    stats: [
      {
        value: 5,
        label: "DevOps Components Deployed",
      },
      {
        value: 3,
        label: "Hybrid Cloud Environments with Orchestration",
      },
    ],
    background:
      "The client is a facility services conglomerate and is looking to evolve into a digital services driven organisation. Quick routes to market were identified such as monetising applications they developed for their daily operations as well as acquiring start-ups to grow their service offerings.",
    journey:
      "Our initial steps were to conduct a maturity assessment exercise on the client's digital delivery team, where we found areas for improvement, ranging from fundamental matters such as lack of Linux familiarity and manual tracking/logging of change request tracking/logging, to manual software delivery lifecycle without governed source control and release management.",
  },
];
