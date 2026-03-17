import React from 'react';
import styles from './Stack.module.css';

const Stack: React.FC = () => {
  const groups = [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Next.js", "CSS Modules", "Jest", "Cypress"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "Redis"]
    },
    {
      title: "DevOps",
      items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Terraform", "Prometheus"]
    },
    {
      title: "Herramientas",
      items: ["Figma", "Notion", "Slack", "VS Code", "Git", "Webpack"]
    }
  ];

  return (
    <div className={styles.stackContainer}>
      <h2 className={styles.title}>
        Cómo <span className={styles.highlight}>construimos.</span>
      </h2>
      
      <div className={styles.groupsContainer}>
        {groups.map((group, index) => (
          <div key={index} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={styles.itemsContainer}>
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;