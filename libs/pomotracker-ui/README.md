# Pomotracker UI

`pomotracker-ui` es la **librería de componentes UI** de Pomotracker, diseñada para ser **reutilizable, escalable y moderna**.  
Todos los componentes son **Angular 21 standalone**, compatibles con **web, desktop (Tauri) y mobile (Capacitor)**, y utilizan **TailwindCSS y SCSS** para estilos.

Esta librería forma parte del monorepo de Pomotracker, y puede ser importada en cualquier aplicación Angular dentro del workspace.

---

## 🧱 Stack Tecnológico

- **Angular 21** (Standalone Components)
- **TailwindCSS 4** + SCSS
- **TypeScript**
- **Nx Monorepo**
- Arquitectura modular de componentes

---

## 📁 Estructura de la Librería

```

libs/pomotracker-ui/
├─ src/lib/components/
│   ├─ button/
│   │   ├─ button.component.ts
│   │   ├─ button.component.html
│   │   ├─ button.component.scss
│   │   └─ index.ts
│   ├─ card/
│   │   └─ ...
│   └─ timer-display/
│       └─ ...
├─ src/lib/components/index.ts      # Exporta todos los componentes
└─ src/lib/index.ts                 # Exporta toda la librería

````

- Cada componente es **standalone** y se puede importar individualmente.  
- `index.ts` en cada carpeta y en `lib/` permite importar fácilmente en la aplicación:

```ts
import { ButtonComponent } from '@pomotracker/pomotracker-ui';
````

---

## 🎨 Prefijo / Selector

Para mantener consistencia y evitar conflictos:

```text
Prefijo de Angular: pt-
```

Ejemplos de componentes y selectors:

| Componente   | Selector Angular   | Uso típico                              |
| ------------ | ------------------ | --------------------------------------- |
| Botón        | `pt-button`        | Botones principales                     |
| Card         | `pt-card`          | Contenedores de información             |
| Temporizador | `pt-timer-display` | Visualización del temporizador Pomodoro |

---

## 🚀 Cómo usar la librería

### Importar en tu módulo o standalone component

```ts
import { ButtonComponent } from '@pomotracker/pomotracker-ui';
```

### Uso en HTML

```html
<pt-button label="Añadir tarea" (clicked)="onAddTask()"></pt-button>
```

---

## 📄 Ejemplo de un Componente (`pt-button`)

```ts
@Component({
  selector: 'pt-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Añadir tarea';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) this.clicked.emit();
  }
}
```

```html
<button
  [disabled]="disabled"
  (click)="onClick()"
  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-500 transition-colors"
>
  {{ label }}
</button>
```

---

## 📌 Filosofía de la Librería

* Componentes **reutilizables** y **modulares**
* Estilos consistentes usando **TailwindCSS** y SCSS
* Preparada para **multiplataforma**: web / desktop / mobile
* Compatible con Angular 21 y Standalone Components

---

## 🧪 Tests

* Puedes agregar tests unitarios para cada componente usando **Vitest** o **Jest**:

```bash
npm run test:fe
```

---

## 📄 Licencia

MIT © Pomotracker