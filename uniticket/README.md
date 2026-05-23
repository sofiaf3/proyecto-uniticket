# UniTicket 🎫
### Sistema de Gestión de Incidencias Técnicas en Laboratorios Universitarios

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1_AA-green?style=flat)](https://www.w3.org/TR/WCAG21/)

> Proyecto final de **Proyecto Integrador I** — Universidad del Valle, sede Tuluá  
> Docente: Mg(c). Juan Pablo Pinillos Reina | Semestre: Febrero – Junio 2026

---

## 📋 Descripción

UniTicket es una aplicación web que permite a estudiantes y docentes reportar fallas técnicas en los laboratorios de la universidad, y a los técnicos gestionarlas de forma organizada. Elimina los canales informales (WhatsApp, llamadas) y centraliza todo el flujo de incidencias en una plataforma accesible y eficiente.

---

## ✨ Funcionalidades

- 🔐 **Autenticación por roles**: Usuario estándar, Técnico y Administrador
- 📊 **Dashboard** con estadísticas en tiempo real y filtros por estado
- 🎫 **Creación de tickets** con validación completa de formularios
- 🔧 **Panel técnico** para gestionar, asignar y resolver incidencias
- 🌐 **Bilingüe** (Español / English) con i18n integrado
- ♿ **Accesible** — WCAG 2.1 AA: ARIA, navegación por teclado, contraste
- 🔔 **Notificaciones push** via Web Notifications API
- 📱 **Responsivo** — funciona en móvil, tablet y desktop
- 🔍 **SEO optimizado** — meta tags, Open Graph, HTML5 semántico

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura y accesibilidad |
| CSS3 (Flexbox / Grid) | Diseño responsivo |
| JavaScript ES6+ | Lógica de la aplicación |
| localStorage | Persistencia de datos en cliente |
| Web Notifications API | Notificaciones push |
| Google Fonts (DM Sans + Syne) | Tipografía |

---

## 📁 Estructura del proyecto

```
uniticket/
├── index.html              # Página de login
├── css/
│   └── style.css           # Estilos globales
├── js/
│   └── app.js              # Lógica: auth, tickets, i18n, notificaciones
└── pages/
    ├── dashboard.html      # Dashboard principal
    └── ticket-detail.html  # Detalle y gestión de ticket
```

---

## 🚀 Cómo ejecutar

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/uniticket.git
```

2. Abre `index.html` en tu navegador (no requiere servidor).

---

## 👤 Cuentas de demo

| Correo | Contraseña | Rol |
|---|---|---|
| carlos@univalle.edu.co | 123456 | Usuario estándar |
| laura@univalle.edu.co | 123456 | Usuario estándar |
| jorge@univalle.edu.co | tecnico123 | Técnico |
| sandra@univalle.edu.co | admin123 | Administrador |

---

## ♿ Accesibilidad

- Contraste de colores ≥ 4.5:1 (WCAG AA)
- Todos los elementos interactivos son navegables con teclado
- Etiquetas ARIA en formularios, tablas y regiones
- Skip link para saltar al contenido principal
- Mensajes de error descriptivos con `role="alert"`
- Textos alternativos en elementos visuales

---

## 📄 Licencia

Proyecto académico — Universidad del Valle, sede Tuluá, 2026.
