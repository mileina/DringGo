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

## Structure du projet


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
     DB_USER=dringgo
     DB_PASSWORD=dringgo
     DB_NAME=dringgo
     ```