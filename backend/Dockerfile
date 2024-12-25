# Dockerfile pour le backend
FROM node:18

WORKDIR /app

# Copier les fichiers package.json du dossier backend
COPY backend/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY backend/ ./

# Exposer le port pour le backend
EXPOSE 3000

# Démarrer le serveur backend
CMD ["npm", "run", "dev"]
