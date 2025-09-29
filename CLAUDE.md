# Reglas Fundamentales del Proyecto - CUMPLIMIENTO ESTRICTO

## 🎯 DOCUMENTO BASE
- **Beehiiv_Tyler Denk.md** es un documento de Research de alta calidad
- Es el PRODUCTO principal del cual se derivan interfaces, bases de datos, JSONs, etc.
- Cada implementación debe respetar la naturaleza investigativa del documento

## 🎨 REGLAS DE INTERFAZ

### Componentes y Tecnología
- **SOLO shadcn/ui components** - Sin excepciones
- No usar otras librerías de componentes

### Idioma Obligatorio
- **TODAS las views se escriben en INGLÉS** - Sin excepciones
- Textos, labels, placeholders, mensajes, etc. siempre en inglés
- Nombres de variables y funciones en inglés

### Diseño Visual
- **Estilo minimalista Apple**: Solo lo necesario, nada más
- **Paleta de colores**: Negro → Blanco + grises intermedios únicamente
- **Simetría obligatoria**: Todo debe estar perfectamente simétrico
- **Regla de 4 píxeles**: Espaciado consistente basado en múltiplos de 4px
- Aplicar mejores prácticas de diseño web

### Experiencia de Usuario (UX)
- **Objetivo principal**: Consumir máxima información con mínima carga cognitiva
- **Progressive Disclosure**: Revelar información gradualmente
- **Navegación intuitiva**: Que ayude al consumo de información
- **Facilitar digestión**: Hacer la información más fácil de procesar
- **Research-focused**: Cada decisión de diseño debe facilitar la investigación

## 📁 GESTIÓN DE ARCHIVOS

### Regla de Archivo Único
- **UNA SOLA VERSION** de cada archivo
- NO crear versiones alternas automáticamente
- Aplicar correcciones/cambios al archivo existente
- Solo crear nuevas versiones si se solicita EXPLÍCITAMENTE

### Estructura de Proyecto
- Mantener `/Users/darwinborges/Beehiiv V2.1/` ordenado
- Organizar archivos en carpetas lógicas
- No saturar la carpeta raíz con múltiples versiones

### Excepciones para Versiones Alternas
- Solo cuando se solicite explícitamente: "guardar esta versión y continuar"
- Versión oficial = donde se aplican todos los cambios posteriores
- Versiones alternas = solo backup cuando se requiera

## ✅ PROCESO DE VERIFICACIÓN
Antes de cada implementación, verificar:
1. ¿Uso solo componentes shadcn?
2. ¿Todo el texto está en inglés?
3. ¿Mantuve la paleta negro-blanco-grises?
4. ¿Es simétrico y sigue regla de 4px?
5. ¿Facilita el consumo de información research?
6. ¿Estoy editando el archivo existente vs crear uno nuevo?
7. ¿La estructura de carpetas está ordenada?

## 📊 INSIGHTS DEL DOCUMENTO BEEHIIV

### Información Clave Extraída
- **ARR**: $1M (Dec 2022) → $20M (Nov 2024)
- **Emails enviados**: 70M/month → 2B/month
- **Team**: 12 → 75 empleados
- **Total funding**: $50.7M (Seed a Series B)
- **Modelo de negocio**: 3 pilares (Subscriptions, Ad Network, Boosts)

### Características del Research
- **922 líneas** de contenido estructurado
- **Citas directas** con timestamps de YouTube
- **Enlaces verificables** a fuentes primarias
- **Datos financieros precisos** con fechas
- **Cronología detallada** de eventos
- **Estructura jerárquica** clara

### Lecciones para Interfaces
- **Progressive Disclosure**: El documento demuestra cómo presentar información densa de manera consumible
- **Jerarquía visual**: Headers, subheaders, bullets, quotes claramente diferenciados
- **Referenciabilidad**: Cada sección linkeable y navegable
- **Carga cognitiva mínima**: A pesar de la densidad, fácil de procesar por secciones

## 📋 TAREAS COMPLETADAS
- [x] Leer completamente Beehiiv_Tyler Denk.md por secciones
- [x] Documentar estructura y calidad del research
- [x] Verificar cumplimiento de reglas en documentación
- [x] Extraer todas las entidades del documento (100+ entidades)
- [x] Categorizar entidades por tipo (9 categorías)
- [x] Crear base de datos JSON estructurada completa
- [x] Desarrollar entity view interface siguiendo reglas CLAUDE.md
- [x] Implementar sistema de design grayscale Apple-minimalista
- [x] Organizar estructura de proyecto en carpetas lógicas
- [x] Extraer todos los excerpts con speakers y fuentes de evidencia
- [x] Crear sistema de grafo de entidades navegable
- [x] Implementar páginas individuales de entidades con quotes y relaciones
- [x] Sistema de evidencia para corroborar cada relación
- [x] Navegación fluida entre entidades conectadas

## 🗂️ ESTRUCTURA DEL PROYECTO

```
Beehiiv V2.1/
├── src/                 # Código fuente React + TypeScript
│   ├── components/      # Componentes React con shadcn/ui
│   │   ├── ui/          # Componentes shadcn/ui puros
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── button.tsx
│   │   │   └── badge.tsx
│   │   ├── EntityGraph.tsx    # Vista principal del grafo
│   │   ├── EntityPage.tsx     # Página individual de entidad
│   │   └── EvidenceModal.tsx  # Modal de evidencia
│   ├── data/            # Base de datos JSON
│   │   ├── entityData.ts      # Datos estructurados TypeScript
│   │   └── beehiiv_entity_extraction.json # Extracción completa
│   ├── lib/            # Utilidades
│   │   └── utils.ts    # Helpers de shadcn/ui
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globales
├── index.html           # HTML principal de Vite
├── package.json         # Dependencias del proyecto
├── tailwind.config.js   # Configuración Tailwind (4px grid)
├── tsconfig.json        # Configuración TypeScript
├── vite.config.ts       # Configuración Vite
├── CLAUDE.md            # Reglas fundamentales
└── Beehiiv_Tyler Denk.md # Documento original de research
```

## 🎯 SISTEMA DE ENTIDADES COMPLETADO

### Base de Datos Creada
- **100+ entidades** extraídas completamente
- **9 categorías**: PERSON, COMPANY, PRODUCT, INVESTOR, LOCATION, PUBLICATION, PLATFORM, EVENT, METRIC
- **Metadatos ricos**: links, quotes, relationships, financial data
- **100% sourced**: Todas las citas con timestamps y referencias

### Interface de Entidades
- **Componentes shadcn únicamente** ✅
- **Texto 100% en inglés** ✅
- **Diseño minimalista Apple** ✅
- **Paleta negro-blanco-grises** ✅
- **Sistema 4px spacing** ✅
- **Progressive Disclosure** ✅
- **Optimizado para research consumption** ✅

## 🌐 SISTEMA DE GRAFO DE ENTIDADES COMPLETADO

### Funcionalidades Core
- **Vista de grafo navegable**: Todas las entidades como nodos clickeables
- **Páginas individuales de entidades**: Información detallada por entidad
- **Sistema de relaciones con evidencia**: Cada relación respaldada por excerpts
- **Navegación fluida**: Click entre entidades conectadas
- **Modal de evidencia**: Ver fuentes exactas de cada relación

### Estructura de Datos
- **Entidades canónicas**: Resolución de aliases (Tyler = @TylerDenk)
- **Excerpts completos**: Speaker, quote, source, timestamp, context
- **Relaciones tipificadas**: co_founded, worked_at, advisor_to, friends_with
- **Información temporal**: Fechas, duraciones, períodos
- **Evidencia verificable**: Cada relación linkeable a fuentes originales

### Experiencia de Usuario
- **Para personas**: Sus citas + relaciones con otras entidades
- **Para empresas**: Relaciones con fundadores, empleados, inversores
- **Evidencia inmediata**: Click en "Evidence" para ver excerpts de soporte
- **Navegación contextual**: Saltar entre entidades relacionadas
- **Verificación de precisión**: Usuario puede confirmar claims instantáneamente

### Proyecto React con shadcn/ui - CUMPLIMIENTO PERFECTO
- **SOLO componentes shadcn/ui** ✅ - Card, Dialog, Button, Badge
- **Texto 100% en inglés** ✅ - Toda la interfaz en inglés
- **Paleta grayscale Apple** ✅ - Negro, blanco, grises únicamente
- **Regla 4px spacing** ✅ - Tailwind configurado con múltiplos de 4px
- **Progressive disclosure perfecto** ✅ - Graph → Entity → Evidence
- **Apple minimalista** ✅ - Interface limpia, solo lo necesario
- **Archivo único** ✅ - Una sola versión, estructura organizada
- **Research-focused UX** ✅ - Cada claim verificable con evidencia

### Servidor de desarrollo: http://localhost:5173/

---
**RECORDATORIO**: Estas reglas se cumplen AL PIE DE LA LETRA en cada interacción. Sin excepciones.