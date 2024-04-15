# Appname: 11-hook-use-effect

## Objetivo:
App que ejemplifica el uso del hook useEffect.

# Comentarios:
* Se recomienda usar useEffect antes que useLayoutEffect

## useEffect:
- Ejecución asíncrona
- Se ejecuta después de que el navegador haya renderizado las actualizaciones en la pantalla.
- Se ejecuta en el DOM.
- No bloquea la pintura (renderizado visual) del navegador.
- Se utiliza para realizar operaciones asincrónicas no críticas que no necesitan ejecutarse inmediatamente después de la actualización del DOM, como hacer solicitudes de red, manipular datos, suscripciones a eventos.


## useLayoutEffect:
- Ejecución síncrona
- Se ejecuta sincrónicamente inmediatamente después de que todos los cambios en el DOM han sido aplicados, pero antes de que el navegador actualice la pantalla.
- Puede bloquear la actualización visual.
- Se debe tener cuidado al usarlo para no ralentizar la aplicación.
- Se utiliza cuando se necesita medir o manipular el DOM inmediatamente después de una actualización.

##
# Comandos:
- Instalar dependencias: `npm i`
- Up app: `npm start`