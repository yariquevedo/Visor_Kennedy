# Problema 1
Crear un repositorio local

# Problema 2
Crear un repositorio remoto Sincronizar los repos configurar user.name y user.email

# Problema 3
Crear una página que muestre un mapa centrado en mi barrio
# Solución
Utilizar una biblioteca de visor geográfico: leaflet, openlayers, mapopen

# Problema 4
Mostrar el polígono de mi barrio
# Solución
Buscar geojson de terceros 
Cargar el geojson usando async await

# Problema 5 
Cargar la capa de árboles recortada con el polígono de mi barrio
# Solución
A través de un servicio rest dentro de un cuaderno jypiter conectar la capa de árboles y con un bounding box recortar la capa. 

# Problema 6
Calcular la distancias entre los árboles
# Solución 
Utilizar la estructura forEach para realizar la iteración de cada árbol respecto a los demás
y utilizar una función asincrónica (Hasta que no se ehjecute totalmente la función no se procede con el resto del código)

# Problema 7 
Generar un pdf con el reporte de las distancias entre árboles
# Solución 
Utilizar la biblioteca  cloudflare


# Problema 8 
Recortar la capa de siniestros
# Solución 
Encontrar un Geojson de los siniestros en Bogotá, crear la conección a través de una API a través de la biblioteca requests
y shapely para generar polígonos. 
