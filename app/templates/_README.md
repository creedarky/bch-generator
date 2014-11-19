***

## Inicio Rápido

```
Paso 1:

$ git clone <repositorio>
$ cd base-front-end-bch
$ npm install

Luego:

Posicionarnos en la carpeta base-front-end-bch y ejecutar npm start, no olvidar configurar el proxy.js
con la url del servidor donde se encuentran los servicios.

```

## Importante

```
Los datos desplegados en la base son dummy. Revisar src/assets/dummy-files/ , ahí encontratrán diferentes archivos con datos que se despliegan en la vista.
```
## Estructura de directorio



```
    base-front-end-bch/
      |- karma/
      |- protractor/
      |- src/
      |  |- app/
      |  |  |- <logica de la aplicacion>
      |  |- assets/
      |  |  |- <archivos estaticos>
      |  |- common/
      |  |  |- <codigo reutilizable>
      |  |- less/
      |  |  |- main.less
      |  |- stylus/
      |  |  |- main.styl
      |- vendor/
      |  |- angular-bootstrap/
      |  |- bootstrap/
      |- .bowerrc
      |- bower.json
      |- build.config.js
      |- Gruntfile.js
      |- module.prefix
      |- module.suffix
      |- package.json
      |- proxy.js
```

##Descripción

- `karma/` - configuración de pruebas unitarias con karma.
- `protractor/` - configuración de pruebas end to end con protractor.
- `src/` - las fuentes de la aplicación. [Read more &raquo;](src/README.md)
- `vendor/` - librerías de terceros y componentes angular de otros grupos. [Bower](http://bower.io) will install
  packages here. Todo lo que se agregue a este directorio debe ser agregado manualmente al archivo `build.config.js` y `karma/karma-unit.js` para poder ser agregados al build, a excepcion los paquetes de tipo "bchile-".
- `.bowerrc` - el archivo de configuración de Bower. Este indica a Bower donde instalar los componentes , en este caso en el directorio `vendor/`.
- `bower.json` - esta es la configuración de nuestro proyecto Bower y contiene la lista de dependencias necesarias.
- `build.config.js` - los parametros de construcción para Grunt.
- `Gruntfile.js` - el script de construcción.
- `module.prefix` y `module.suffix` - el script compilado de la aplicación es contenido en estos archivos, los cuales son usados para colocar la aplicación en una función anónima auto ejecutable, para asegurar que no haya conflicto con otras librerias.
- `package.json` - metadata sobre la aplicación, y scripts de arranque de servidores http.
- `proxy.js` - Archivo de configuración para proxy.
