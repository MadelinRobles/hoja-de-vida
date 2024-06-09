# HojaDeVida
Este proyecto esta realizado en angular y para agregar diseño se utilizo Tailwind Css con un plugin llamado flowbite.

# Paso 1
Crear un proyecto en angular utilizando los comando ng new nombreProyecto
instalar Tailwind Css con lo comandos npm install -D tailwindcss y 
npx tailwindcss init
Instalar flowbite npm install flowbite
configurar el archivo tailwind.config.js 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

configurar el archivo de estilos global 
/* You can add global styles to this file, and also import other style files */
@tailwind base;
@tailwind components;
@tailwind utilities;

# paso 2
Crear los componentes necesarios para nuestro proyecto y sus respectivas carpetas
para crear un componente
ng g c components/nombreComponente

# paso 3
Para el despliegue en gitpages tuve que configurar el archivo angular.json
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/hoja-de-vida", //agregue esta linea
            "baseHref": "/hoja-de-vida/",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],

Despues tuve que correr los siguientes comandos en mi proyecto 
npm run build --prod --base-href=/hoja-de-vida/
npm install -g angular-cli-ghpages
ngh --dir=dist/hoja-de-vida/browser

y hacer un push

para la configuracion en github tuve que entrar al repositorio en settings/pages 
y en donde dice branch lo deje en gh-pages y root
En la pestaña de Actions se puede ver como se esta cargando la pagina

En el apartado de pages se puede ver la ruta a nuestra pagina, para cargar los cambios nuevos en nuestro proyecto se necesita ejecutar los siguientes comandos
npm run build --prod --base-href=/hoja-de-vida/
ngh --dir=dist/hoja-de-vida/browser