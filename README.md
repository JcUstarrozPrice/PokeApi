# 🌐 PokeApp - React + Redux Toolkit + TS

Una aplicación de consulta de Pokémon construida con las mejores prácticas modernas de desarrollo frontend. Utiliza **RTK Query** para la gestión de datos asíncronos, caché inteligente y paginación optimizada.



## 🚀 Tecnologías Utilizadas

* **React 18** (Vite como bundler)
* **TypeScript** (Tipado estricto para seguridad de datos)
* **Redux Toolkit (RTK)** (Gestión de estado global)
* **RTK Query** (Consumo de APIs, caché y estados de carga)
* **PokeAPI** (Fuente de datos externa)

## ✨ Características

* **Paginación Eficiente:** Navegación por la lista de Pokémon usando `offset` y `limit`.
* **Búsqueda Activa:** Buscador funcional mediante `useLazyQuery` para optimizar peticiones de red.
* **Caché Inteligente:** Los datos ya consultados se almacenan en el Store, evitando peticiones repetidas.
* **UI Reactiva:** Manejo automático de estados de carga (`isLoading`), error y actualización (`isFetching`).
* **Tipado Completo:** Interfaces de TypeScript para las respuestas de la API y el estado de Redux.

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/soujiro27/PokeApi](https://github.com/soujiro27/PokeApi)
    cd nombre-del-repo
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abrir el navegador:**
    Visita `http://localhost:5173` para ver la aplicación.

## 📁 Estructura del Proyecto

* `src/app/`: Configuración del Store y hooks personalizados (`useAppDispatch`, `useAppSelector`).
* `src/services/`: Definición de la API con RTK Query (`pokemonApi.ts`).
* `src/features/`: Slices de Redux (lógica de estado).
* `src/components/`: Componentes reutilizables (Lista, Detalle, SearchBar).

## 📝 Scripts Disponibles

* `npm run dev`: Lanza el servidor de desarrollo.
* `npm run build`: Crea la versión de producción optimizada.
* `npm run preview`: Previsualiza localmente el build de producción.

---
Hecho con ❤️ por [Juan Carlos Ustarroz]