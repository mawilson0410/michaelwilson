import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Digital Sports Solutions",
    description: "Founding engineer at DSS™ building tinyLeague: a SaaS solution to revolutionize sports leagues.",
    image: "/projects/dss_page.png",
    tags: ["MERN Stack", "Agile Methodology", "Full-Stack"],
    demoUrl: "https://www.digitalsportssolutions.com/",
    githubUrl: "https://github.com/Digital-Sports-Solutions-Official",
  },
  {
    id: 2,
    title: "Voqa",
    description:
      "Social web platform for connecting users learning new languages to native speakers.",
    image: "/projects/voqa_page.png",
    tags: ["MERN Stack", "Stream API", "Tailwind"],
    demoUrl: "https://voqa.onrender.com/",
    githubUrl: "https://github.com/mawilson0410/voqa",
  },
  {
    id: 3,
    title: "DSS Docs",
    description:
      "Fully featured, interactive documentation for hardware ecosystem and mobile application.",
    image: "/projects/dss_docs_page.png",
    tags: ["React", "Node.js", "Docusaurus"],
    demoUrl: "https://www.digitalsportssolutions.com/docs/",
    githubUrl: "https://github.com/Digital-Sports-Solutions-Official",
  },
  {
    id: 4,
    title: "tinyLeague™ Hub",
    description:
      "Mobile iOS and Android application for the tinyLeague ecosystem allowing robust control of client hardware",
    image: "/projects/tlhub_page.png",
    tags: ["React Native", "Java", "Full-Stack"],
    demoUrl: "https://apps.apple.com/us/app/tinyleague-hub/id6748661836",
    githubUrl: "https://github.com/Digital-Sports-Solutions-Official",
  },
  {
    id: 5,
    title: "Portfolio Web App",
    description:
      "This is the page you are looking at right now! Built and maintained by me.",
    image: "/projects/portfolio_page.png",
    tags: ["TSX React", "HTML/CSS", "Deployment"],
    demoUrl: "https://michaelawilson.vercel.app/",
    githubUrl: "https://github.com/mawilson0410/michaelwilson",
  },
  {
    id: 6,
    title: "Kitchen Management Application",
    description:
      "Kitchen logistics application for high traffic food management and demand analysis.",
    image: "/projects/kitchen_app_screenshot.png",
    tags: ["TSX React", "Java", "PostgreSQL"],
    demoUrl: "https://stpaul-kitchen-app.vercel.app/",
    githubUrl: "https://github.com/mawilson0410/stpaul-kitchen-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few features from the many projects I have worked on. Each was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mawilson0410"
          >
            Check Out My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};