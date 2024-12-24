FROM node:18

WORKDIR /app

# Copier les fichiers package.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port pour le backend
EXPOSE 3000

# Démarrer le serveur backend
CMD ["npm", "run", "dev"]
