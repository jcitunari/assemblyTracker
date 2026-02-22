# Assembly Attendance System

Assembly es una aplicación de **gestión y control de asistencia para asambleas**, desarrollada como un **monorepo con Nx**, utilizando **Angular 21** para el frontend y **NestJS + Prisma** para el backend.

Incluye una librería de componentes reutilizables (**assembly-ui**) totalmente **standalone**, basada en **Tailwind CSS**.

El objetivo es ofrecer una plataforma **escalable, segura y multiplataforma** (web / desktop / mobile) para la gestión de asistencia, control de quórum y administración de sesiones.

---

## 🧱 Stack Tecnológico

### Frontend

* **Angular 21** (Standalone Components)
* **TailwindCSS 4**
* RxJS
* Arquitectura modular con Nx
* Librería de UI `assembly-ui` (componentes reutilizables)

### Backend

* **NestJS**
* **Prisma ORM** (PostgreSQL / SQLite)
* API REST
* Arquitectura modular

### Monorepo & Tooling

* **Nx Workspace**
* Jest / Vitest para tests
* ESLint + Prettier
* Playwright (E2E)
* TypeScript

---

## 📁 Estructura del Proyecto

```
apps/
├─ assembly-app/       # Frontend Angular
└─ assembly-api/       # Backend NestJS

libs/
└─ assembly-ui/        # Librería de componentes UI
   └─ src/lib/components/
      ├─ button/
      ├─ card/
      └─ modal/
```

* Cada componente de `assembly-ui` es **standalone**, exportable y reutilizable.
* Los `index.ts` en cada carpeta permiten importarlos fácilmente desde otras apps:

```ts
import { ButtonComponent } from '@assembly/assembly-ui';
```

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

* Gestión de asambleas
* Registro de miembros
* Control de asistencia
* Cálculo automático de quórum
* Historial de sesiones
* Roles y permisos
* Soporte Desktop (Tauri) y Mobile (Capacitor)

---

## 🏛️ Dominio del Proyecto

El sistema está diseñado para modelar entidades como:

* **Assembly**
* **Session**
* **Member**
* **Attendance Record**
* **Quorum Rules**

Pensado para organizaciones, asociaciones, juntas directivas o instituciones que requieran trazabilidad y control formal de asistencia.

---

## 📌 Filosofía del Proyecto

* MVP primero
* Dominio bien modelado
* Escalabilidad desde el día uno
* Seguridad y trazabilidad
* UI modular y reusable
* Arquitectura limpia y mantenible

---

## 💡 Librería de Componentes (`assembly-ui`)

* Todos los componentes son **standalone**.
* Utilizan **TailwindCSS** y SCSS.
* Estructura típica de un componente:

```
libs/assembly-ui/src/lib/components/button/
 ├─ button.component.ts
 ├─ button.component.html
 ├─ button.component.scss
 └─ index.ts
```

* Se exporta todo desde `libs/assembly-ui/src/lib/index.ts`.

---

## 🔮 Roadmap Futuro

* Sistema de votaciones
* Firma digital de asistencia
* Exportación de actas (PDF)
* Dashboard de estadísticas
* Multi-tenant (SaaS)

---

## 📄 Licencia

MIT © Assembly
