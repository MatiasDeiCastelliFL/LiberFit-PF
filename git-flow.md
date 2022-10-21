FLUJO DE GIT
Para realizar cambios a medida que trabajamos en el proyecto:
    1) Forkeamos el repositorio del GitHub, según quien lo cree (deshabilitar la opción de “solo copiar la rama principal”).
    2) En nuestro GitHub, debemos entrar al repositorio forkeado y clonarlo en nuestra computadora.
    3) Abrimos la carpeta con VSC y en la terminal, parado en la carpeta del repo, debemos ejecutar “git flow init”. Darle ENTER a todas la consultas.
    4) Ejecutamos el comando “git flow feature start ric-feat, donde ric-feat es el nombre de la rama que deseo crear.
    5) Una vez creada la nueva rama, y realizados los cambios, debemos hacer: 
    • git status
    • git add .
    • git commit –m “Primer commit”
    6) Ahora ejecutamos “git flow feature finish ric-feat”, para cerrar la rama creada.
    7) Ejecutamos ”git push origin develop” para subir los cambios a la rama develop (OJO, esto lo hace en MI repositorio, no en el del creador)
    8) Luego los cambios deben ser mergeados por el creador.

Actualizar mi repositorio local en caso de haber cambios:
    1) Primero debemos traer los cambios del repositorio ORIGEN, por lo que debemos hacer un “SYNC FORK” desde nuestro GitHub en la rama DEVELOP para traer los últimos cambios realizados en la rama DEVELOP.
    2) En la terminal del VSC dentro de la carpeta del repo, ejecutar el comando “git pull”, y podremos visualizar en nuestro VSC todos los últimos cambios.