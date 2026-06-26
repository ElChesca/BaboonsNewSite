# Sitio web Baboons ERP

Portal de ventas y features de **Baboons ERP**. Frontend en **React + Vite + TypeScript**, backend del formulario de contacto en **Python/Flask** como funciones serverless, pensado para desplegarse en **Vercel**.

El diseño y el plan completo están en [`PROPUESTA-SITIO-BABOONS.md`](./PROPUESTA-SITIO-BABOONS.md). El archivo `baboons_vision_erp.html` es el one-pager original que sirvió de referencia visual.

---

## Stack

- **React 19** + **Vite** + **TypeScript** (modo estricto)
- **React Router 7** — ruteo multipágina con carga diferida por ruta
- **Tailwind CSS v4** — sistema de diseño en `src/styles/tokens.css`
- **Flask** + **Pydantic v2** — backend del formulario en `api/` (serverless)
- **ESLint** + **Prettier** — calidad de código
- **Vercel** — hosting del frontend y de las funciones Python

## Requisitos

- Node.js 20 o superior
- Python 3.12 (solo para correr/probar el backend localmente)

## Puesta en marcha

```bash
# 1. Instalar dependencias del frontend
npm install

# 2. Copiar las variables de entorno y completarlas
cp .env.example .env.local

# 3. Levantar el sitio en modo desarrollo
npm run dev
```

El sitio queda en `http://localhost:5173`.

### Backend Flask (opcional en local)

Las funciones de `api/` corren en Vercel automáticamente. Para probarlas en local:

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r api/requirements.txt
python api/contact.py            # queda en http://localhost:3001
```

Mientras no haya backend corriendo, el formulario de contacto mostrará un error de conexión al enviar — es esperado en desarrollo sin Flask levantado.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Type-check + build de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Corre ESLint |
| `npm run format` | Formatea con Prettier |

## Variables de entorno

Definidas en `.env.example`. En desarrollo van en `.env.local`; en producción se cargan en el panel de Vercel. **Nunca se commitean.**

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Clave del proveedor de email (Resend) para notificar leads |
| `CONTACT_TO_EMAIL` | Dirección que recibe los leads |
| `CONTACT_FROM_EMAIL` | Remitente verificado |
| `SLACK_WEBHOOK_URL` | Opcional: webhook para avisar al equipo |
| `VITE_API_BASE_URL` | Base de la API (en Vercel es `/api`) |

Si `RESEND_API_KEY` no está configurada, el backend registra el lead en los logs en lugar de enviar el email — así nada se pierde.

## Estructura

```
api/            Funciones serverless Python (Flask + Pydantic)
public/         Assets estáticos (favicon, robots.txt)
src/
  components/   layout, ui y forms reutilizables
  content/      Datos tipados de módulos, verticales y casos de éxito
  pages/        Una página por ruta
  styles/       tokens.css (sistema de diseño) + globals.css
```

Para sumar un módulo, una vertical o un caso de éxito alcanza con agregar un objeto en `src/content/` — las páginas se generan solas a partir de esos datos.

---

## Crear el repositorio en GitHub

Desde la carpeta del proyecto, en la terminal de VSCode:

```bash
git init
git add .
git commit -m "Setup inicial del sitio Baboons ERP"
git branch -M main
```

Creá el repo vacío en GitHub (por ejemplo `baboons/pagina-web`) y conectalo:

```bash
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

> Si tenés la extensión de GitHub en VSCode, también podés usar
> **"Publish to GitHub"** desde el panel de Source Control y hace estos pasos solo.

## Deploy a Vercel

El despliegue se hace desde VSCode o la consola. Hay dos caminos equivalentes:

### Opción A — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel            # primer deploy: crea el proyecto y genera un preview
vercel --prod     # publica a producción
```

`vercel link` deja el proyecto asociado para los próximos deploys.

### Opción B — Integración Git de Vercel

1. En [vercel.com](https://vercel.com) → **Add New → Project** → importá el repo de GitHub.
2. Vercel detecta Vite automáticamente (build `npm run build`, salida `dist/`).
3. Cargá las variables de entorno del panel (las de `.env.example`).
4. A partir de ahí: cada push a `main` publica a producción y cada Pull Request genera un **preview deploy**.

### Notas de despliegue

- `vercel.json` ya define el fallback de SPA y los headers de seguridad.
- La carpeta `api/` se despliega como funciones Python sin configuración extra: Vercel detecta `api/requirements.txt` e instala las dependencias.
- El CI de GitHub Actions (`.github/workflows/ci.yml`) corre lint + build del frontend y un chequeo del backend en cada push y PR, independientemente del deploy.
