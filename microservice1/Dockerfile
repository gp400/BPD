# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto del microservicio (ajusta si usas otro)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
