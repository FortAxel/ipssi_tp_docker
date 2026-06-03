# Todo API — UE3 Docker / DevOps

API REST de tâches (Node.js + MySQL), dockerisée. Projet solo, préparation CI/CD (partie 2).

## Lancer le projet

Prérequis : Docker et Docker Compose.

```bash
git clone <url-du-repo>
cd projet-docker
docker compose up --build -d
```

| Service     | URL |
|-------------|-----|
| API         | http://localhost:3000 |
| phpMyAdmin  | http://localhost:8081 (`root` / `root`) |
| MySQL (hôte)| port `3307` |

```bash
curl http://localhost:3000/health
docker compose down      # arrêt
docker compose down -v   # reset BDD (volume)
```

## API

| Méthode | Route |
|---------|-------|
| GET | `/health` |
| GET | `/api/tasks` |
| GET | `/api/tasks/:id` |
| POST | `/api/tasks` |
| PUT | `/api/tasks/:id` |
| DELETE | `/api/tasks/:id` |

Body création : `{ "description": "...", "title": "...", "status": "todo" }` — `description` obligatoire.

## Modèle Task

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | oui | Identifiant unique |
| `title` | string | non | Titre |
| `description` | string | oui | Description |
| `status` | string | oui | État (`todo` par défaut) |
| `createdAt` | timestamp | auto | Création |
| `updatedAt` | timestamp | auto | Dernière modification |

En base MySQL (`db/init.sql`) : colonnes `created_at` / `updated_at`, exposées en camelCase par l’API.

## Base de données

Schéma et table `tasks` : **`db/init.sql`**, exécuté au premier démarrage MySQL via Docker (`docker-entrypoint-initdb.d`). L’API se connecte seulement (`src/db.js`).

## Structure du projet

```
.
├── src/
│   ├── routes/
│   │   └── tasks.js
│   ├── models/
│   │   └── task.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── db.js
│   ├── app.js
│   └── index.js
├── db/
│   └── init.sql
├── tests/
│   ├── unit/              # partie 2
│   └── integration/       # partie 2
├── Dockerfile
├── .dockerignore
├── .gitignore
├── .env.example
├── docker-compose.yml
├── package.json
└── README.md
```

## Dev local (optionnel)

```bash
npm install && npm start
```

Copier `.env.example` → `.env` si besoin. MySQL doit tourner et `db/init.sql` doit être appliqué.
