# Propuesta de Diseño — Sitio Web Baboons ERP

**Portal de Ventas + Features · React + Vite · Backend Flask serverless · Deploy en Vercel**

Documento de diseño y plan de implementación · Mayo 2026
Preparado para: Fede Pereyra — Baboons.Co

---

## 1. Resumen ejecutivo

Hoy existe `baboons_vision_erp.html`: una excelente **página de visión de producto** (one-pager) que comunica la arquitectura, los módulos y el roadmap de Baboons ERP. Es un activo de comunicación interno/comercial, no un sitio de ventas.

Esta propuesta lleva ese material a un **sitio web de ventas multipágina**, construido en **React + Vite** con las mejores prácticas de 2026, pensado para desplegarse en **Vercel**. El sitio cumple tres funciones:

1. **Portal de ventas** — captar leads (solicitudes de demo) de pymes y empresas argentinas.
2. **Sitio de features** — explicar cada módulo del ERP en profundidad, con su propia URL indexable.
3. **Lanzamiento de la nueva vertical Concesionarias** (Vehículos y Maquinaria), que se suma a Restó, Distribuidora y Logística/CEDI.

El formulario de contacto se resuelve con **funciones serverless en Python/Flask** dentro del mismo repo (`/api`), un solo deploy en Vercel, mostrando validación robusta del lado del servidor, anti-spam y notificaciones automáticas.

Se reutiliza y **evoluciona el sistema de diseño actual** (naranja `#e85d20`, cian `#008fb5`, cards limpias, tipografía system/Inter), incorporando mejoras de UX/UI, accesibilidad, SEO y performance.

---

## 2. Objetivos del sitio y métricas

| Objetivo | Cómo lo logra el sitio | KPI |
|---|---|---|
| Generar leads calificados | Formulario de contacto/demo en cada página, CTAs claros | Conversión visita → lead (meta inicial: 3-5%) |
| Comunicar el producto por módulo | Una página por módulo y por vertical, indexable | Páginas/sesión, tiempo en páginas de features |
| Lanzar la vertical Concesionarias | Página dedicada con caso de uso, funcionalidades e integración | Leads etiquetados "Concesionarias" |
| Posicionamiento SEO en Argentina | Estructura semántica, contenido por keyword, datos estructurados | Posición orgánica "ERP concesionaria", "ERP AFIP" |
| Transmitir confianza (San Luis / Logica) | Página Nosotros, prueba social, presencialidad | Scroll depth, rebote en Home |

**Audiencia primaria:** dueños y gerentes de pymes argentinas (restó, distribuidoras, depósitos y ahora concesionarias de vehículos y maquinaria). Perfil no técnico, decisores de compra, mayormente desde mobile.

---

## 3. Arquitectura de información (sitemap)

Sitio multipágina con rutas limpias e indexables:

```
/                         Home — propuesta de valor + resumen del ecosistema
/producto                 Visión general del ERP (hereda el contenido del one-pager actual)
/modulos                  Índice de módulos
  /modulos/pos-resto       POS & Restó
  /modulos/facturacion     Facturación AFIP/ARCA
  /modulos/inventario      Inventario & Stock
  /modulos/distribuidora   Distribuidora & Logística
  /modulos/cuenta-corriente Cuenta Corriente
  /modulos/mes             MES · Manufactura
  /modulos/tms             TMS (Transporte) — próximamente
  /modulos/wms             WMS (Almacenes) — próximamente
  /modulos/cedi            CEDI (Centro de Distribución) — próximamente
/verticales               Índice de verticales
  /verticales/gastronomia      Restó / Gastronomía
  /verticales/distribucion     Distribución y reparto
  /verticales/logistica        Logística / WMS / CEDI
  /verticales/concesionarias   ★ NUEVA — Vehículos y Maquinaria
/precios                  Planes y precios
/casos-de-exito           Clientes y casos de éxito ★ NUEVA
/nosotros                 Baboons.Co + Logica · San Luis
/contacto                 Formulario de contacto/demo (Flask)
/legal/privacidad         Política de privacidad
/legal/terminos           Términos
```

Rutas técnicas (no navegables): `/api/contact`, `/api/health`, `/sitemap.xml`, `/robots.txt`.

**Navegación principal:** Producto · Módulos · Verticales · Casos de éxito · Precios · Nosotros · **[Solicitar demo]** (botón naranja, persistente).
**Footer:** mapa del sitio completo, datos de contacto, San Luis · Argentina, "Con el apoyo de Logica", links legales.

---

## 4. Stack técnico y mejores prácticas 2026

### Frontend

| Área | Elección | Por qué |
|---|---|---|
| Framework | **React 19** | Server Components opcionales, `use()`, mejor manejo de formularios y `useActionState` |
| Build tool | **Vite** (última estable, 6/7) | Arranque instantáneo, HMR, build con Rollup, soporte nativo en Vercel |
| Lenguaje | **TypeScript** (modo estricto) | Menos bugs, mejor DX, autocompletado en componentes y datos |
| Routing | **React Router 7** en modo framework, o rutas declarativas | Rutas anidadas, lazy loading por ruta, data loaders |
| Estilos | **Tailwind CSS v4** + tokens CSS variables | Mantiene el sistema de diseño actual como variables, utilitario y rápido |
| Formularios | **React Hook Form + Zod** | Validación tipada compartida cliente/servidor, accesible |
| Animación | **Framer Motion** (selectivo) + CSS | Microinteracciones sin penalizar performance |
| Iconos | **Lucide React** | Liviano, tree-shakeable; reemplaza emojis del one-pager por iconos consistentes |
| SEO | **react-helmet-async** o meta por ruta | `<title>`, OG, JSON-LD por página |
| Analítica | **Vercel Analytics + Speed Insights** | Core Web Vitals reales, sin cookies invasivas |

### Backend (formulario de contacto)

| Área | Elección | Por qué |
|---|---|---|
| Runtime | **Python 3.12** serverless en Vercel | Mismo repo, un solo deploy, escala a cero |
| Framework | **Flask** | Pedido explícito del proyecto; ideal para una API liviana y demostrable |
| Validación | **Pydantic v2** | Esquemas tipados, mensajes de error claros, espejo de Zod en el front |
| Email | **Resend** o SMTP | Notificación instantánea de cada lead |
| Anti-spam | Honeypot + rate limiting + (opcional) Turnstile | Sin fricción para el usuario real |

### Calidad y DevOps

- **ESLint** (flat config) + **Prettier** + **Stylelint**.
- **Vitest** + **React Testing Library** para unidad/componentes; **Playwright** para E2E (incluido el flujo del formulario).
- **Husky + lint-staged** para pre-commit; **GitHub Actions** para CI (lint, test, build).
- **Vercel**: preview deploy automático por cada PR, producción en `main`.
- **Variables de entorno** gestionadas en Vercel (claves de email, etc.), nunca en el repo.
- Convención de commits y `CHANGELOG` opcional.

### Configuración de Vercel

`vercel.json` declara el build de Vite y enruta `/api/*` a las funciones Python:

```jsonc
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }   // SPA fallback
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

---

### Repositorio y despliegue

- **Repositorio en GitHub** — el proyecto vive en un repo dedicado (sugerencia: `baboons/pagina-web` o `pagina-web-baboons`). Rama `main` = producción; ramas de feature por PR.
- **Deploy a Vercel desde VSCode o consola** — el despliegue lo hace el equipo, no se automatiza un proveedor externo. Dos caminos equivalentes:
  - **Vercel CLI**: `npm i -g vercel` → `vercel link` (una vez) → `vercel` para preview, `vercel --prod` para producción.
  - **Integración Git de Vercel**: conectar el repo de GitHub al proyecto de Vercel; cada push a `main` publica y cada PR genera un preview deploy automático.
- **Variables de entorno** (claves de email, etc.) se cargan en el panel de Vercel y en un `.env.local` para desarrollo; nunca se commitean. El repo incluye `.env.example` como referencia.
- El `CI` de GitHub Actions corre lint + test + build en cada PR, independientemente del deploy.

## 5. Estructura del proyecto

```
pagina-web-baboons/
├── api/                          # Funciones serverless Python (Vercel)
│   ├── contact.py                # Flask: POST /api/contact
│   ├── health.py                 # GET /api/health
│   ├── _lib/
│   │   ├── schemas.py            # Modelos Pydantic
│   │   ├── email.py              # Envío de notificaciones
│   │   └── antispam.py           # Honeypot + rate limit
│   └── requirements.txt          # flask, pydantic, resend...
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   └── og/                       # Imágenes Open Graph por página
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── router.tsx
│   ├── styles/
│   │   ├── tokens.css            # Variables del sistema de diseño
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/               # Nav, Footer, Container
│   │   ├── ui/                   # Button, Card, Badge, Tabs, Input...
│   │   ├── sections/             # Hero, ModuleGrid, VerticalCard, CTA...
│   │   └── forms/                # ContactForm, FormField
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Producto.tsx
│   │   ├── modulos/
│   │   ├── verticales/
│   │   ├── Precios.tsx
│   │   ├── CasosDeExito.tsx
│   │   ├── Nosotros.tsx
│   │   └── Contacto.tsx
│   ├── content/                  # Datos de módulos/verticales/casos (TS o MDX)
│   │   ├── modulos.ts
│   │   ├── verticales.ts
│   │   └── casos.ts
│   ├── hooks/
│   ├── lib/                      # seo.ts, analytics.ts, api.ts
│   └── assets/
├── tests/                        # Vitest + Playwright
├── .github/workflows/ci.yml
├── vercel.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── eslint.config.js
├── package.json
└── README.md
```

El contenido de módulos y verticales vive en `src/content/` como datos tipados: agregar un módulo o una vertical (como Concesionarias) es declarar un objeto, no escribir una página nueva. Esto mantiene la consistencia y acelera el mantenimiento.

---

## 6. Sistema de diseño (evolución del actual)

El one-pager actual ya tiene una base sólida y coherente. **Se conserva**, se pasa a tokens reutilizables y se le suman piezas que un sitio multipágina necesita.

### 6.1. Lo que se conserva

- **Paleta:** naranja primario `#e85d20` / `#ff7a3d`, cian `#008fb5` / `#00b4d8`, verde `#059669`, púrpura `#7c3aed`, ámbar `#d97706`.
- **Neutros:** fondo `#f6f8fb`, cards blancas, bordes `#e2e8f0`, texto `#0f1728`.
- **Tipografía:** stack system / Inter; títulos con `font-weight` 800 y `letter-spacing` negativo.
- **Forma:** radio de 12px, sombras en tres niveles (`sm` / base / `lg`), grid de cards.
- **Sello de marca:** logo Baboons con la "o" naranja, badge naranja para destacados.

### 6.2. Mejoras propuestas

- **Tokens centralizados** en `tokens.css` + `tailwind.config.ts`: una sola fuente de verdad para color, espaciado, tipografía, radios y sombras.
- **Escala tipográfica fluida** con `clamp()` (ya usada en el hero) extendida a todos los niveles, más legible en mobile.
- **Escala de espaciado de 4px** (4/8/12/16/24/32/48/64) para ritmo vertical consistente entre secciones.
- **Modo oscuro** opcional vía `prefers-color-scheme` y los mismos tokens — diferenciador visual y mejor para uso nocturno en operaciones.
- **Iconografía unificada:** reemplazar emojis (🏪 📄 🚛…) por iconos Lucide con color de acento. Los emojis se ven inconsistentes entre sistemas operativos y restan profesionalismo; un set de iconos coherente sube la percepción de producto enterprise.
- **Estados de componente completos:** hover, focus-visible, active, disabled y loading definidos para todos los interactivos (hoy el foco de teclado no es explícito).
- **Foco visible accesible:** anillo de foco con contraste AA en todos los links, botones e inputs.
- **Ilustración y captura de producto:** sumar mockups reales del ERP (o renders) en hero y páginas de módulo; hoy el sitio es muy "texto + cards".

### 6.3. Biblioteca de componentes (`src/components/ui`)

`Button` (primario/secundario/ghost · tamaños · loading) · `Card` · `Badge` · `Tabs` (ya existe el patrón en Módulos) · `Accordion` (FAQ) · `Input` / `Textarea` / `Select` con label y error · `Modal` · `Toast` · `MetricStat` (el bloque "9+ / 4 / 100%") · `Timeline` (el roadmap) · `LogoCloud` (prueba social) · `SectionHeading` (eyebrow + título + bajada).

Cada uno tipado, accesible y documentado con ejemplos. Esto evita la divergencia visual a medida que el sitio crece.

---

## 7. Diseño página por página

### Home (`/`)

1. **Nav** sticky con blur (se conserva) + CTA "Solicitar demo".
2. **Hero** — titular "El ERP que escala con tu operación", bajada, dos CTAs (demo / ver producto), chips de módulos y mockup del producto a la derecha o debajo.
3. **Barra de confianza** — "100% compliance ARCA/AFIP", "San Luis · Argentina", logos de clientes (cuando los haya).
4. **El ecosistema** — versión resumida del diagrama de verticales actual, con link a `/producto`.
5. **Módulos destacados** — grid de cards con link a cada página de módulo.
6. **Verticales** — 4 cards: Gastronomía, Distribución, Logística y **Concesionarias** (con badge "Nuevo").
7. **Métricas de impacto** — bloque de stats + un gráfico (se reusa Chart.js o se migra a una lib React como Recharts).
8. **Propuesta de valor** — los 7 diferenciales actuales (local, un solo ecosistema, mobile-first, etc.).
9. **CTA final** — banda naranja "Agendá una demo".
10. **Footer** completo.

### Producto (`/producto`)

Hereda casi tal cual el contenido del one-pager actual (ecosistema, flujo de integración logística, roadmap, propuesta de valor). Se vuelve la página "todo en uno" para quien quiere el panorama completo, mientras que las páginas de módulo profundizan.

### Módulos (`/modulos` y subpáginas)

- **Índice** `/modulos`: grid de los 9+ módulos, con filtro "Activos / Próximamente".
- **Página de módulo** (plantilla única alimentada por `content/modulos.ts`): hero del módulo, lista de capacidades (las que ya están en el one-pager), capturas, cómo se integra con el resto del ecosistema, vertical(es) donde aplica, FAQ y CTA. URLs indexables para SEO ("sistema POS restó AFIP", "WMS argentina", etc.).

### Verticales (`/verticales` y subpáginas)

Misma plantilla que módulos, pero orientada al **negocio del cliente**, no a la feature. Cada vertical explica: el problema del rubro, qué módulos de Baboons lo resuelven, un flujo de ejemplo y casos. Detalle de Concesionarias en la sección 8.

### Precios (`/precios`)

- 3 planes orientativos por tamaño de operación + "Enterprise / a medida".
- Tabla comparativa de módulos incluidos por plan.
- Aclaración del modelo modular: "cada negocio activa solo lo que necesita".
- FAQ de precios (implementación, soporte presencial, migración de datos).
- CTA a `/contacto`.

### Casos de éxito (`/casos-de-exito`)

Es la página que aporta la **prueba social** que cierra ventas en pymes — junto con Nosotros, responde la pregunta "¿esto le funcionó a alguien como yo?".

- **Hero** — "Negocios reales que ya operan con Baboons", con métricas agregadas (cantidad de clientes, operaciones procesadas, años en producción).
- **Logos de clientes** — `LogoCloud` con las empresas que usan el ERP, agrupables por vertical.
- **Grilla de casos** — cards filtrables por vertical (Gastronomía / Distribución / Logística / Concesionarias). Cada card: cliente, rubro, módulos que usa y un resultado concreto ("redujo el cierre de caja de 40 a 5 minutos").
- **Caso destacado** — un caso ampliado con el formato problema → solución → resultado, cita del cliente y, si hay, foto de la operación.
- **Testimonios** — citas cortas de clientes con nombre, cargo y empresa.
- **CTA** — "Sumate a los negocios que ya escalan con Baboons" → `/contacto`.

El contenido vive en `content/casos.ts` como datos tipados (cliente, vertical, módulos, resultado, testimonio), así sumar un caso nuevo es agregar un objeto. Mientras no haya casos públicos confirmados, la página arranca con un set inicial marcado como borrador y placeholders, lista para completar con datos reales.

### Nosotros (`/nosotros`)

Desarrolla el mensaje "Tecnología local, respaldo presencial": Baboons.Co, el apoyo de Logica, el equipo, San Luis, la filosofía de implementación en sitio. Genera la confianza que cierra ventas en pymes.

### Contacto (`/contacto`)

Página del formulario Flask — ver sección 9. Incluye datos directos (mail, WhatsApp, ubicación) y expectativa de respuesta.

---

## 8. La nueva vertical: Concesionarias (Vehículos y Maquinaria)

Es la vertical que diferencia este sitio del one-pager actual. Una concesionaria es un negocio donde **conviven** varias operaciones que Baboons ya sabe resolver: venta de alto ticket, postventa/taller, repuestos (depósito), cuenta corriente y compliance fiscal. La propuesta es presentarla como una **configuración de la plataforma**, no un producto nuevo.

### 8.1. A quién apunta

Concesionarias y agencias de **vehículos** (autos, utilitarios, motos, usados y 0 km) y de **maquinaria** (agrícola, vial, construcción) — un rubro fuerte en el interior argentino y alineado con el origen en San Luis.

### 8.2. Qué resuelve (funcionalidades de la vertical)

| Área | Funcionalidad | Se apoya en |
|---|---|---|
| **Stock de unidades** | Ficha por unidad con VIN/chasis/motor, dominio, año, color, km, estado (0 km / usado / en preparación / reservado / vendido). Costos asociados (flete, patentamiento, acondicionamiento). | Inventario, extendido a "unidades serializadas" |
| **Showroom y catálogo** | Catálogo público o B2B con fotos, ficha técnica y disponibilidad en tiempo real. | Inventario + portal B2B del roadmap |
| **Ventas de alto ticket** | Presupuesto → reserva con seña → orden de venta → entrega. Toma de usado como parte de pago (tasación). | POS / Ventas + Cuenta Corriente |
| **Financiación y planes** | Registro de operaciones con financiera/banco/plan de ahorro, cuotas, comisiones. | Cuenta Corriente |
| **Postventa / Taller** | Órdenes de reparación, turnos, mano de obra, garantías, historial por unidad/cliente. | MES adaptado a órdenes de servicio |
| **Repuestos** | Depósito de repuestos con stock, ubicaciones, picking para el taller y venta de mostrador. | Inventario + WMS |
| **Patentamiento y gestoría** | Checklist y seguimiento del trámite (formularios, verificación, entrega de documentación). | Flujo de tareas / estados |
| **Facturación** | Factura de la unidad, del service y de repuestos con compliance ARCA/AFIP. | Facturación AFIP/ARCA |
| **Comisiones de vendedores** | Cálculo de comisión por unidad y por operación. | Reportes / Cuenta Corriente |

### 8.3. Cómo se integra (mensaje clave de la página)

> "No comprás otro sistema para la concesionaria. Activás la vertical Concesionarias sobre el mismo Baboons: el repuesto que vende el taller descuenta del mismo stock, la seña entra a la misma caja, y la factura sale con el mismo compliance ARCA. Un cliente, una cuenta corriente, una base de datos."

### 8.4. Contenido de la página `/verticales/concesionarias`

1. **Hero** — "El ERP para concesionarias de vehículos y maquinaria", badge "Nuevo", CTA demo.
2. **El problema** — la concesionaria típica usa un sistema para ventas, otro para el taller, planillas para repuestos y otra cosa para facturar. Datos duplicados, sin trazabilidad.
3. **La solución Baboons** — diagrama: Showroom → Venta → Postventa → Repuestos, todo sobre el motor central.
4. **Funcionalidades** — grid con las áreas de la tabla 8.2.
5. **Flujo de ejemplo** — "De la consulta a la entrega": lead → tasación de usado → reserva con seña → financiación → patentamiento → entrega → primer service.
6. **Integración con módulos** — qué módulos del ERP activa esta vertical.
7. **FAQ del rubro** — manejo de VIN, usados, planes de ahorro, multisucursal.
8. **CTA** — "Mostranos tu concesionaria y te armamos la demo".

### 8.5. Impacto en el resto del sitio

- Nueva card de vertical en Home y en `/verticales`.
- Nuevo objeto en `content/verticales.ts` (cero páginas nuevas que mantener gracias a la plantilla).
- El selector "Rubro" del formulario de contacto suma la opción **Concesionaria — Vehículos / Maquinaria**.
- Actualizar el diagrama del ecosistema: pasa de "4 verticales" a **5 verticales**.
- Oportunidad SEO: keywords con poca competencia como "ERP concesionaria Argentina", "software gestión concesionaria maquinaria".

---

## 9. Formulario de contacto — la potencia de Python + Flask

El requisito del proyecto es que el formulario **muestre la potencia de Python y Flask**. La estrategia: el front es un formulario React pulido y accesible, pero el trabajo "inteligente" ocurre en el backend Flask, y eso se hace visible para quien evalúa el código.

### 9.1. Arquitectura

```
Usuario → ContactForm (React Hook Form + Zod)
            │  POST /api/contact  (JSON)
            ▼
        Vercel Serverless (Python 3.12)
            └─ api/contact.py  →  Flask app
                 1. Anti-spam: honeypot + rate limit por IP
                 2. Validación Pydantic v2 (espejo del schema Zod)
                 3. Enriquecimiento: lead scoring por rubro/tamaño + UTM
                 4. Notificación: email al equipo (Resend) + (opcional) Slack/CRM
                 5. Respuesta JSON tipada → el front muestra éxito/errores
```

Todo en el mismo repo, un solo `git push`, un solo deploy en Vercel. La función escala a cero (sin costo cuando nadie la usa) y a demanda cuando llegan leads.

### 9.2. Qué hace "potente" al backend (y se nota en el código)

- **Validación server-side con Pydantic v2** — nunca se confía en el cliente. Tipos, longitudes, formato de email y teléfono argentino, normalización (trim, lowercase del email).
- **Anti-spam sin fricción** — campo honeypot invisible + límite de envíos por IP en una ventana de tiempo. El usuario real no ve nada; el bot queda afuera.
- **Lead scoring** — el backend calcula una prioridad según rubro (Concesionaria, Distribuidora…), tamaño de operación y si pidió demo, y la incluye en la notificación. Es lógica de negocio real, no un "enviar mail y listo".
- **Captura de contexto** — UTM params, página de origen y timestamp para saber qué campaña trae mejores leads.
- **Notificación multicanal** — email al equipo comercial vía Resend; opcionalmente webhook a Slack o alta en un CRM/Google Sheet.
- **Respuestas tipadas y manejo de errores** — 200 con `{ok: true}`, 422 con el detalle de errores por campo (que el front mapea a cada input), 429 si excede el rate limit. Logs estructurados.
- **Endpoint `/api/health`** — chequeo simple para monitoreo/uptime.

### 9.3. Esquema compartido (la misma forma en los dos lados)

```python
# api/_lib/schemas.py
from pydantic import BaseModel, EmailStr, Field, field_validator

class ContactPayload(BaseModel):
    nombre: str = Field(min_length=2, max_length=80)
    email: EmailStr
    telefono: str = Field(min_length=6, max_length=20)
    empresa: str = Field(min_length=2, max_length=120)
    rubro: str  # 'gastronomia' | 'distribucion' | 'logistica' | 'concesionarias' | 'otro'
    tamano: str  # '1-5' | '6-20' | '21-50' | '50+'
    mensaje: str = Field(min_length=10, max_length=2000)
    quiere_demo: bool = False
    # honeypot: debe llegar vacío
    website: str = Field(default="", max_length=0)
    # contexto de marketing
    utm_source: str | None = None
    pagina_origen: str | None = None

    @field_validator("email")
    @classmethod
    def normalizar_email(cls, v: str) -> str:
        return v.strip().lower()
```

```python
# api/contact.py — función serverless de Vercel
from flask import Flask, request, jsonify
from pydantic import ValidationError
from _lib.schemas import ContactPayload
from _lib.antispam import rate_limit_ok
from _lib.email import notificar_lead
from _lib.scoring import calcular_prioridad

app = Flask(__name__)

@app.post("/api/contact")
def contact():
    ip = request.headers.get("x-forwarded-for", "").split(",")[0]
    if not rate_limit_ok(ip):
        return jsonify(ok=False, error="rate_limited"), 429
    try:
        data = ContactPayload.model_validate(request.get_json(force=True))
    except ValidationError as e:
        errores = {err["loc"][-1]: err["msg"] for err in e.errors()}
        return jsonify(ok=False, errores=errores), 422

    prioridad = calcular_prioridad(data)        # lógica de negocio
    notificar_lead(data, prioridad)             # email + (opcional) Slack/CRM
    return jsonify(ok=True, prioridad=prioridad), 200
```

```ts
// src/lib/contactSchema.ts — Zod, espejo del schema Pydantic
import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2).max(80),
  email: z.string().email(),
  telefono: z.string().min(6).max(20),
  empresa: z.string().min(2).max(120),
  rubro: z.enum(["gastronomia", "distribucion", "logistica", "concesionarias", "otro"]),
  tamano: z.enum(["1-5", "6-20", "21-50", "50+"]),
  mensaje: z.string().min(10).max(2000),
  quiereDemo: z.boolean().default(false),
});
export type ContactInput = z.infer<typeof contactSchema>;
```

### 9.4. UX del formulario (frontend)

- Validación en `onBlur` con mensajes claros en español; los errores 422 del backend se mapean al campo correspondiente.
- Estados explícitos: idle → enviando (spinner en el botón) → éxito (mensaje + reset) → error.
- Accesible: `<label>` asociado a cada input, `aria-invalid`, `aria-describedby` para errores, foco al primer campo con error, región `aria-live` para el resultado.
- El selector **Rubro** incluye "Concesionaria — Vehículos / Maquinaria".
- Honeypot `website` oculto con CSS (no `display:none` para no levantar sospechas de bots) y `tabindex="-1"`.
- Captura UTM desde la URL y página de origen, enviados junto al payload.

```python
# api/requirements.txt
flask==3.*
pydantic[email]==2.*
resend==2.*
```

---

## 10. Mejoras y optimizaciones propuestas

Más allá de la migración, estas son las mejoras concretas recomendadas, ordenadas por impacto.

### 10.1. Performance (Core Web Vitals)

- **Code splitting por ruta** — cada página se carga bajo demanda con `React.lazy` + `Suspense`. El one-pager actual carga todo de una.
- **Imágenes optimizadas** — formato AVIF/WebP, `srcset` responsivo, `loading="lazy"` salvo el hero, dimensiones explícitas para evitar layout shift (CLS).
- **Fuentes** — `font-display: swap`, preconnect y subsetting; o quedarse en el system stack (cero requests, ya es el caso hoy).
- **Chart.js bajo demanda** — cargar la librería de gráficos solo en las páginas que la usan, o migrar a Recharts (mejor integración React).
- **Presupuesto de performance** — meta: LCP < 2.5s, INP < 200ms, CLS < 0.1; medido con Vercel Speed Insights y Lighthouse en CI.
- **CDN y caché** — assets con hash y `Cache-Control` inmutable (Vercel lo hace por defecto); HTML siempre fresco.

### 10.2. SEO

- **Una URL por módulo y vertical** — hoy todo es `#anchors` en una sola página, invisible para buscadores a nivel de detalle. Páginas reales = más superficie indexable.
- **Meta por página** — `<title>`, `<meta description>`, canonical y Open Graph/Twitter Card propios por ruta.
- **Datos estructurados (JSON-LD)** — `Organization`, `SoftwareApplication`, `BreadcrumbList`, `FAQPage` en las páginas con FAQ.
- **`sitemap.xml` y `robots.txt`** generados en build.
- **HTML semántico** — `<header> <nav> <main> <section> <article> <footer>`, un solo `<h1>` por página, jerarquía de headings correcta.
- **Pre-rendering** — generar HTML estático de las páginas públicas (vite-plugin para SSG o React Router en modo framework) para que el contenido llegue indexado sin depender de JS.
- **Contenido localizado** — keywords del mercado argentino ("facturación ARCA", "ERP San Luis", "ERP concesionaria").

### 10.3. Accesibilidad (WCAG 2.2 AA)

- Contraste de color AA en todo el texto (revisar el gris `--subtle` sobre blanco).
- Foco de teclado visible y orden lógico de tabulación.
- Navegación operable 100% por teclado, incluido el menú mobile y los tabs de Módulos.
- `alt` descriptivo en imágenes; iconos decorativos con `aria-hidden`.
- Respeto a `prefers-reduced-motion` para las animaciones.
- Formularios con labels, errores y estados anunciados por lectores de pantalla.

### 10.4. Conversión (es un portal de ventas)

- **CTA persistente** "Solicitar demo" en la nav, repetido al final de cada página.
- **Formulario corto** — pedir lo mínimo; cuanto más corto, más conversión.
- **Prueba social** — logos de clientes, testimonios, números de uso cuando estén disponibles.
- **WhatsApp / contacto directo** — botón visible; en pymes argentinas cierra más rápido que un formulario.
- **Páginas de vertical como landing** — cada vertical puede ser destino de campañas pagas con su propio CTA.
- **Microcopy de confianza** cerca del formulario ("Te respondemos en 24 h", "Sin compromiso").

### 10.5. Analítica y medición

- **Vercel Analytics + Speed Insights** — tráfico y Web Vitals reales, sin banner de cookies invasivo.
- **Eventos clave** — envío de formulario, clicks en CTA, profundidad de scroll, vistas de página de módulo/vertical.
- **Atribución** — UTMs capturados y enviados con cada lead (ver sección 9).
- Opción a futuro: Google Analytics 4 o Plausible si se quiere más detalle.

### 10.6. Seguridad

- Headers de seguridad en `vercel.json` (ya incluidos arriba) + `Content-Security-Policy` ajustada.
- Secrets solo en variables de entorno de Vercel; nada de claves en el repo.
- Rate limiting y honeypot en el endpoint de contacto.
- Validación y sanitización server-side de todo input.
- Dependencias auditadas en CI (`npm audit`, `pip-audit`).

### 10.7. Mantenibilidad y DX

- Contenido como datos tipados (`src/content/`) — agregar un módulo/vertical es trivial.
- Componentes UI documentados y reutilizables.
- CI con lint + test + build en cada PR; preview deploy de Vercel para revisar visualmente.
- README con setup, scripts y guía de despliegue.
- Tests E2E del flujo crítico (navegación + envío de formulario).

### 10.8. Internacionalización (futuro)

La arquitectura deja preparada una posible expansión regional (el one-pager menciona "Argentina y Latinoamérica"): contenido en `src/content/` separable por idioma y rutas tipo `/es/...` si llega el momento. No es para la v1, pero conviene no cerrarse la puerta.

---

## 11. Roadmap de implementación

| Fase | Entregable | Alcance |
|---|---|---|
| **0 · Setup** | Proyecto base | Scaffolding Vite + React + TS, Tailwind con tokens, ESLint/Prettier, `vercel.json`, CI, **repo en GitHub** y primer deploy a Vercel desde VSCode/consola |
| **1 · Sistema de diseño** | Biblioteca UI | Componentes `ui/` y `layout/` (Nav, Footer, Button, Card, Tabs, formularios), tokens finales, modo oscuro |
| **2 · Páginas núcleo** | Home + Producto | Migración del contenido del one-pager, secciones, gráficos |
| **3 · Módulos y verticales** | Plantillas + contenido | `content/modulos.ts` y `content/verticales.ts`, páginas índice y de detalle, **vertical Concesionarias completa** |
| **4 · Backend Flask** | Formulario funcionando | `api/contact.py` + `_lib/`, schema Pydantic, anti-spam, email, página `/contacto` integrada |
| **5 · Precios + Casos de éxito + Nosotros + Legales** | Sitio completo | Páginas restantes, incluida Clientes y casos de éxito con contenido tipado |
| **6 · Optimización y QA** | Listo para producción | SEO (meta, JSON-LD, sitemap), accesibilidad, performance budget, tests E2E, Lighthouse en CI |
| **7 · Lanzamiento** | Producción | Dominio, analítica, monitoreo, checklist final |

---

## 12. Próximos pasos

1. **Validar esta propuesta** — alcance de páginas, enfoque de la vertical Concesionarias y stack.
2. **Confirmar versiones** del stack al momento de arrancar (React, Vite, Tailwind, Flask evolucionan rápido — fijar las últimas estables en `package.json` / `requirements.txt`).
3. **Definir contenido pendiente** — planes y precios reales, fotos/mockups del producto, logos de clientes, datos de contacto.
4. **Arrancar la Fase 0** — scaffolding del proyecto y primer deploy en Vercel.

Cuando confirmes, puedo dejar armado el esqueleto del proyecto (Fase 0) y empezar a construir las páginas.

---

*Documento de propuesta · Baboons.Co — Con el apoyo de Logica · San Luis, Argentina · Mayo 2026*
