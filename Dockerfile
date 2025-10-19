# Usa una imagen oficial de Node
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Expone el puerto donde corre Express
ENV PORT=4000
EXPOSE $PORT

# Ejecuta la app
CMD ["npm", "start"]
