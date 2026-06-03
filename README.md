# Todo API — IPSSI / DevOps Partie 1

API REST de tâches (Node.js + PostgreSQL), dockerisée. Projet solo.

## Structure du projet

```
.
├── src/
│   ├── routes/tasks.js
│   ├── models/task.js
│   ├── middleware/errorHandler.js
│   ├── logger.js
│   ├── db.js
│   ├── app.js
│   └── index.js
├── db/init.sql
├── tests/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Modèle Task

| Champ | Type | Obligatoire |
|-------|------|-------------|
| `id` | UUID | oui |
| `title` | string | non |
| `description` | string | non (défaut `""`) |
| `status` | string | oui (`todo` par défaut) |
| `createdAt` | timestamp | auto |
| `updatedAt` | timestamp | auto |

## API

Base : `http://localhost:3000`

| Méthode | Route |
|---------|-------|
| GET | `/health` |
| GET | `/api/tasks` |
| GET | `/api/tasks/:id` |
| POST | `/api/tasks` |
| PUT | `/api/tasks/:id` |
| DELETE | `/api/tasks/:id` |

## Lancer le projet

```bash
docker compose up --build -d
curl http://localhost:3000/health
```

Identifiants PostgreSQL (compose du cours) : `todo_user` / `todo_pass`, base `todo_db`.

## Test de persistance 

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Tâche persistante","status":"todo"}'

docker compose down
docker compose up -d

curl http://localhost:3000/api/tasks
```

Les tâches doivent encore être présentes.

## Test de persistance des logs (cours)

Générer des entrées dans le volume `api-logs` :

```bash
curl http://localhost:3000/health
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test logs","status":"todo"}'

docker compose exec api cat /app/logs/access.log
```

Vérifier que les logs survivent au redémarrage :

```bash
docker compose down
docker compose up -d

docker compose exec api cat /app/logs/access.log
# les lignes précédentes sont toujours là
```

Lire le volume depuis un **autre conteneur** (partage entre process) :

```bash
docker run --rm -v projet-docker_api-logs:/logs alpine cat /logs/access.log
```

Mission réussie si : les fichiers `app.log` / `access.log` existent après `down` puis `up` (sans `-v`).

### Questions du cours

- **Pourquoi `./src` n’est pas dans `volumes:` ?** C’est un bind mount (chemin hôte → conteneur), pas un volume Docker nommé.
- **`docker compose down -v` ?** Supprime les volumes nommés : BDD et logs effacés.
- **Comment tester la persistance des logs ?** Faire des requêtes HTTP pour remplir `access.log`, noter le contenu avec `docker compose exec api cat /app/logs/access.log`, puis `docker compose down` et `up -d` (sans `-v`) : le fichier doit être identique. On peut aussi monter `api-logs` dans un conteneur tiers (`alpine`) pour prouver que le volume est partagé et persistant.

## Dev local

```bash
npm install
npm start
```

Copier `.env.example` → `.env`. Lancer PostgreSQL avec les mêmes identifiants.

### Execution

<img width="2227" height="562" alt="Capture d’écran du 2026-06-03 16-52-05" src="https://github.com/user-attachments/assets/21fe33dd-39fd-423a-a7a6-6230a8ce281b" />
<img width="1784" height="800" alt="Capture d’écran du 2026-06-03 16-45-04" src="https://github.com/user-attachments/assets/88133956-505f-4ed1-a8aa-2da9e18a5076" />
