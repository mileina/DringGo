# DringGo

## Description
**DringGo** est une application full-stack permettant de gérer des lettres. Elle se compose :
- **D'un backend :** Fournit une API REST pour gérer les lettres.
- **D'un frontend :** Offre une interface utilisateur pour interagir avec l'API.

Le backend utilise **Node.js**, **Express**, et une base de données **MySQL**, tandis que le frontend est construit avec **React**.

---

## Technologies utilisées
### Backend
- Node.js
- Express
- TypeScript
- MySQL
- Docker

### Frontend
- React
- Axios
- React Router
- TypeScript
- Docker

---

## Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés :
- **Node.js** (>= 18.x)
- **Docker** et **Docker Compose**
- **npm** (généralement inclus avec Node.js)

---

## Installation et lancement

### **Option 1 : Avec Docker Compose (recommandé)**
1. **Configurer les variables d'environnement** :
   - Créez un fichier `.env` dans le dossier `backend/` avec les valeurs suivantes :
     ```env
     PORT=3000
     DB_HOST=db
     DB_PORT=3306
     DB_USER=
     DB_PASSWORD=
     DB_NAME=
     ```
2. **Démarrer les services** :
   - Depuis la racine du projet, exécutez la commande suivante :
      ```bash
      docker compose up --build
      ```
   - Ou vous pouvez lancez séparement les trois services :
      ```bash
      docker compose up db
      ```
      ```bash
      docker compose up backend
      ```
      ```bash
      docker compose up frontend
      ```
3. **Accéder à l'application** :
   - Frontend : http://localhost:5173
   - Backend (API) : http://localhost:3000/api

### **Option 2 : Lancer localement (sans Docker)**
#### **Backend**
1. **Allez dans le dossier backend** :
   ```bash
   cd backend
   ```
2. **Installez les dépendances** :
   ```bash
   npm install
   ```
3. **Configurez un fichier .env : Créez un fichier .env dans le dossier backend avec les informations suivantes** :
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    ```
4. **Lancez le backend** :
    ```bash
    npm run dev
    ```
5. **API disponible sur** : http://localhost:3000

#### **Frontend**
1. **Allez dans le dossier frontend** :
   ```bash
   cd frontend
   ```
2. **Installez les dépendances** :
   ```bash
   npm install
   ```
3. **Lancez le frontend** :
    ```bash
    npm run dev
    ```
4. **Frontend disponible sur** : http://localhost:3000

---
## Auteurs

- **Nom :** xxxxx  
  **Email :** xxxx@xxxx  
  **GitHub :** [xxxxx](https://github.com/xxxxx)

- **Nom :** xxxx  
  **Email :** xxxxx@xxxx  
  **GitHub :** [xxxxxx](https://github.com/xxxxxx)
