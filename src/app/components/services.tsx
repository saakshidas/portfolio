import styles from "../styles/services.module.css";

const services = [
  {
    id: "service-development",
    title: "Website & App Development",
    description:
      "I help businesses and individuals build modern, responsive websites and web applications using the latest frontend technologies.",
    tools: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "service-tooling",
    title: "Frontend Tooling & Best Practices",
    description:
      "Skilled in setting up and optimizing frontend workflows with tools like Webpack, Babel, ESLint, Prettier, and more for maintainable codebases.",
    tools: ["Webpack", "Babel", "ESLint", "Prettier", "Vite"],
  },
  {
    id: "service-testing",
    title: "Testing & Quality Assurance",
    description:
      "Experienced in writing unit and integration tests using Jest, Karma, Jasmine, and other frameworks to ensure robust, bug-free applications.",
    tools: ["Jest", "Karma", "Jasmine", "React Testing Library"],
  },
];

const Services = () => (
  <section className={styles.servicesSection}>
    <h2 className={styles.heading}>Services I Offer</h2>
    <div className={styles.cardsContainer}>
      {services.map((service, idx) => (
        <div className={styles.card} key={idx} id={service.id}>
          <h3 className={styles.cardTitle}>
            <a href={`#${service.id}`}>{service.title}</a>
          </h3>
          <p className={styles.cardDesc}>{service.description}</p>
          <div className={styles.toolsList}>
            {service.tools.map((tool) => (
              <span className={styles.tool} key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Services;