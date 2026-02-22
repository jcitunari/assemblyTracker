# Assembly Attendance System

Assembly es una aplicación de **gestión y control de asistencia para asambleas**, desarrollada como un **monorepo con Nx**, utilizando **Angular 21** para el frontend y **NestJS + Prisma** para el backend.

Incluye una librería de componentes reutilizables (**assembly-ui**) totalmente **standalone**, basada en **Tailwind CSS**, y ahora cuenta con **arquitectura de rutas públicas y privadas**, usando layouts y guards para separar contenido seguro de contenido público.

El objetivo es ofrecer una plataforma **escalable, segura y multiplataforma** (web / desktop / mobile) para la gestión de asistencia, control de quórum y administración de sesiones.

---

## 🧱 Stack Tecnológico

### Frontend

* **Angular 21** (Standalone Components)
* **TailwindCSS 4 + SCSS**
* RxJS
* Arquitectura modular con Nx
* Librería de UI `assembly-ui` (componentes reutilizables)
* Rutas públicas y privadas con layouts (`PublicLayoutComponent` y `SecureLayoutComponent`)
* Guards de autenticación (`AuthGuard`)

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

## 📁 Estructura del Proyecto (Frontend)

```
apps/
├─ assembly-app/       # Frontend Angular
│   ├─ app/
│   │   ├─ core/
│   │   │   ├─ guards/
│   │   │   │   └─ auth.guard.ts
│   │   │   └─ services/
│   │   │       └─ auth.service.ts
│   │   ├─ layouts/
│   │   │   ├─ public-layout/
│   │   │   │   ├─ public-layout.component.ts
│   │   │   │   └─ public-layout.component.html
│   │   │   └─ secure-layout/
│   │   │       ├─ secure-layout.component.ts
│   │   │       └─ secure-layout.component.html
│   │   ├─ features/
│   │   │   ├─ auth/
│   │   │   │   ├─ login/
│   │   │   │   │   ├─ login.component.ts
│   │   │   │   │   └─ login.component.html
│   │   │   │   └─ auth-routing.module.ts
│   │   │   └─ dashboard/
│   │   │       ├─ dashboard.component.ts
│   │   │       └─ dashboard-routing.module.ts
│   │   ├─ app-routing.module.ts
│   │   └─ app.component.ts
└─ assembly-api/       # Backend NestJS

libs/
└─ assembly-ui/        # Librería de componentes UI
   └─ src/lib/components/
      ├─ button/
      ├─ card/
      └─ modal/
```

* **Rutas públicas**: `/login`, `/register`, `/forgot-password` → cargadas dentro de `PublicLayoutComponent`.
* **Rutas privadas**: `/dashboard`, `/profile`, `/settings` → cargadas dentro de `SecureLayoutComponent` y protegidas por `AuthGuard`.
* Cada componente de `assembly-ui` es **standalone**, exportable y reutilizable.

```ts
import { ButtonComponent, CardComponent } from '@assembly/assembly-ui';
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

## 🔧 Cómo usar la arquitectura de rutas

### Layouts

```html
<!-- PublicLayoutComponent -->
<router-outlet></router-outlet>

<!-- SecureLayoutComponent -->
<header>Header seguro</header>
<main><router-outlet></router-outlet></main>
<footer>Footer seguro</footer>
```

### Rutas públicas y privadas en `app-routing.module.ts`

```ts
const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('./features/auth/auth-routing.module').then(m => m.AuthRoutingModule) }
    ]
  },
  {
    path: '',
    component: SecureLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
```

* `PublicLayoutComponent`: contiene las páginas accesibles sin login.
* `SecureLayoutComponent`: contiene páginas seguras, solo accesibles si `AuthGuard` permite el acceso.

---

## 💎 Ejemplo de uso de `assembly-ui` en Login

```html
<assembly-ui-card>
  <div card-header>
    <h2>Login</h2>
  </div>

  <div card-content>
    <form>
      <assembly-ui-button label="Iniciar sesión"></assembly-ui-button>
    </form>
  </div>
</assembly-ui-card>
```

* `card-header`, `card-content`, `card-footer` permiten personalizar cada sección del card.
* Todos los componentes son **responsive** y **modulares**.

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
