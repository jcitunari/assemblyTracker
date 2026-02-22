# Pomotracker

Pomotracker es una aplicación de **gestión de tareas con la técnica Pomodoro**, desarrollada como un **monorepo Nx**, utilizando **Angular 21** para el frontend y **NestJS + Prisma** para el backend.  
Incluye una librería de componentes reutilizables (**pomotracker-ui**) totalmente **standalone**, basada en **TailwindCSS**.

El objetivo es ofrecer una plataforma **escalable, multiplataforma** (web / desktop / mobile) para productividad personal.

---

## 🧱 Stack Tecnológico

### Frontend
- **Angular 21** (con soporte Standalone Components)
- **TailwindCSS 4**
- RxJS
- Arquitectura modular con Nx
- Librería de UI `pomotracker-ui` (componentes reutilizables)

### Backend
- **NestJS**
- **Prisma ORM** (PostgreSQL / SQLite)
- API REST

### Monorepo & Tooling
- **Nx Workspace**
- Jest / Vitest para tests
- ESLint + Prettier
- Playwright (E2E)
- TypeScript

---

## 📁 Estructura del Proyecto

```

apps/
├─ pomotracker-app/       # Frontend Angular
└─ pomotracker-api/       # Backend NestJS

libs/
└─ pomotracker-ui/        # Librería de componentes UI
└─ src/lib/components/
├─ button/
├─ card/
└─ timer-display/

````

- Cada componente de `pomotracker-ui` es **standalone**, exportable y reutilizable.
- Los `index.ts` en cada carpeta permiten importarlos fácilmente desde otras apps:

```ts
import { ButtonComponent } from '@pomotracker/assembly-ui';
````

---

## 🚀 Scripts Disponibles

### Frontend (Angular)

```bash
npm run start:fe    # Inicia la app frontend
npm run build:fe    # Build de producción
npm run test:fe     # Tests unitarios
npm run lint:fe     # Lint
```

### Backend (NestJS)

```bash
npm run start:be    # Inicia la API
npm run build:be    # Build de producción
npm run test:be     # Tests unitarios
npm run lint:be     # Lint
```

### Prisma

```bash
npx prisma migrate dev
npx prisma studio
```

> ⚠️ Asegúrate de configurar tu archivo `.env` antes de ejecutar migraciones.

---

## 🎯 Estado del Proyecto

🚧 **En desarrollo activo**

Funcionalidades planeadas:

* Gestión de tareas
* Temporizador Pomodoro
* Asociación de tareas a sesiones Pomodoro
* Estadísticas básicas
* Soporte Desktop (Tauri) y Mobile (Capacitor)

---

## 📌 Filosofía del Proyecto

* MVP primero
* Dominio bien modelado
* Escalabilidad desde el día uno
* Evitar sobreingeniería prematura
* UI modular y reusable

---

## 💡 Librería de Componentes (`pomotracker-ui`)

* Todos los componentes son **standalone**.
* Utilizan **TailwindCSS** y SCSS.
* Estructura típica de un componente:

```
libs/pomotracker-ui/src/lib/components/button/
 ├─ button.component.ts
 ├─ button.component.html
 ├─ button.component.scss
 └─ index.ts
```

* Se exporta todo desde `libs/pomotracker-ui/src/lib/index.ts`.

---

## 📄 Licencia

MIT © Pomotracker
