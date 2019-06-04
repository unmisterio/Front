# Guia básica del FRONT
Este es el repositorio oficial del FRONTEND del proyecto de movilidad academica, desarrollado para la asignatura de Ingenieria de Software II
## Requisitos

Para poder ver y aportar al desarrollo del proyecto  es necesario tener instalado: (Anexo comandos para ver la version y si estan instalado en el ordenador):
* NodeJS &rarr; node  -v
* Express &rarr; npm  -v
* Git &rarr;  git  --version
* Cuenta en Github
* React
* Editor de texto (Recomendados Visual Studio Code,Atom o Sublime Text)
* Camunda Modeler (Opcional)
* Camunda BPM (Opcional)
* Tomcat (Opcional)

Tener en cuenta que para instalar Tomcat se requiere tener instaladas algunas dependencias de Java.
Para que no haya problemas de dependencias es mejor actualizar a las verciones mas recientes.

## Clonar el proyecto y ejecutarlo

1. Copiar la dirección a clonar del repositorio Front
2. Ejecutar el comando 'git clone <dirección>' para obtener el proyecto de forma local
3. Entrar a la carpeta del proyecto y cambiarse a la rama develop con el comando 'git checkout develop'
3. Dentro de la carpeta  creada con el anterior comando llamada Front ejecutar el comando 'npm install' para instalar dependencias faltantes
4. Ahi mismo ejecutar comando 'sudo npm start' e insertar la contraseña de root 
5. Visualizar la web en el navegador en la dirección 'localhost'

**Nota:** Se cambio el puerto predeterminado de react que es el 3000 al puerto 80 por un inconveniente que hubo con el login y al ser un puerto inferior a 1024 pide permisos de autenticación de root

## Modificar el proyecto y publicar cambios en el repositorio de Github
1. Hacer git pull para traer del github al local las ultimas modificaciones al proyecto
2. Verificar que se encuentra en la rama develop para eso ejecutar el comando 'git checkout' en la carpeta del proyecto
3. Abrir el folder del proyecto es decir el fichero llamado 'Front' con el editor de preferencia y hacer las modificaciones correspondientes
4. Ejecutar el comando 'git status' para ver los cambios que ha realizado
5. Ejecutar el comando 'git add .'  para mandar las modificaciones a la staging area
6. Hacer commit a los cambios con el comando 'git commit -m "Texto descriptivo de los cambios realizado" '
7. Hacer pull al proyecto usando el comando 'git pull' para asegurarse tener la última version del proyecte (Puede generar conflictos)
7. Hacer push para publicar los cambios en los repositorios de github con el comando 'git push'. Tener en cuenta que para realizar esta acción hay que loguearse con los credenciales de la cuenta de github

**Nota:** A menos que este totalmente seguro de las modificaciones que realizo es recomendable solamente hacer push a la rama develop.
