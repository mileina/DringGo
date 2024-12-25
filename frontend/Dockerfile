# Utilisation de l'image officielle de Node.js
FROM node:18

# Définit le répertoire de travail pour l'application dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY frontend/package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers restants du frontend dans le conteneur
COPY ./frontend ./

# Exposer le port où l'application sera disponible
EXPOSE 5173

# Démarrer le serveur frontend
CMD ["npm", "run", "dev"]
