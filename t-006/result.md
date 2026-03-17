Asumo que los 4 componentes ya existen y se llaman `Section1`, `Section2`, `Section3` y `Section4`. Si sus nombres reales son diferentes, el desarrollador puede ajustarlos fácilmente.

```
### src/app/page.tsx
```tsx
// src/app/page.tsx
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';

export default function HomePage() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
```
```