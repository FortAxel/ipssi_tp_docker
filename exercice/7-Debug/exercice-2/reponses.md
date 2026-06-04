# Partie 7 — Exercice 2 : Réponses

## Quelle commande pour voir les logs d'un seul service dans docker-compose ?

```bash
docker compose logs web
```

Variantes :

```bash
docker compose logs -f web          
docker compose logs --tail=50 web 
```

(`web` = nom du service dans le `docker-compose.yml`)

## Concept de healthcheck

Un conteneur peut être **démarré** (`running`) sans être **prêt** à recevoir du trafic (ex. Postgres qui initialise encore).

Le **healthcheck** lance régulièrement un test dans le conteneur (`pg_isready`, `curl /health`, etc.). Docker affiche alors `(healthy)` ou `(unhealthy)` dans `docker ps`.

Intérêt : avec `depends_on` + `condition: service_healthy`, un service attend que l'autre soit vraiment opérationnel avant de démarrer, pas seulement que le processus existe.
