### components/Stack/Stack.tsx
```tsx
// components/Stack/Stack.tsx
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
```

### components/Stack/Stack.module.css
```css
/* components/Stack/Stack.module.css */
.stackContainer {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #ffffff;
}

.highlight {
  color: #ff0000;
}

.groupsContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.group {
  display: flex;
  flex-direction: column;
}

.groupTitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.itemsContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  background-color: #111111;
  padding: 1rem;
  border-left: 4px solid #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: #ffffff;
}

/* Responsive styles */
@media (max-width: 768px) {
  .stackContainer {
    padding: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .groupsContainer {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .groupTitle {
    font-size: 1.25rem;
  }
}
```