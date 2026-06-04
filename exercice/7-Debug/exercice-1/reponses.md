# Exercice 3 — Réponses

## Dockerfile #1

1. **Build** : réussit si `package.json` est présent (sinon erreur `COPY package.json` not found).
2. **Ce qui se passe** : warning `JSONArgsRecommended` sur la ligne `CMD` ; l’image peut tourner mais le signal handling est moins fiable qu’avec la forme exec.
3. **Problème visé par le cours** : `CMD npm start` (forme shell) au lieu de `CMD ["npm", "start"]` (forme exec JSON). Correction :

```dockerfile
CMD ["npm", "start"]
```

## Dockerfile #2

1. **Problème de performance** : `COPY . .` **avant** `RUN npm install` — toute modification du code invalide le cache et relance `npm install`.
2. **Après modif dans `src/`** : au rebuild, l’étape `npm install` est **recalculée** (pas de cache sur cette layer).
3. **Correction** : copier d’abord `package*.json`, installer, puis copier le reste :

```dockerfile
COPY package*.json ./
RUN npm install
COPY . .
```

## Dockerfile #3

1. Image **> 1 Go** car base `node:18` (Debian complète) + `COPY . .` + `npm install` sans `.dockerignore`.
2. **Pourquoi si gros** : image de base lourde (~910 MB) + node_modules + pas d’Alpine ni multi-stage.
3. **Pistes** : `node:18-alpine`, multi-stage build, `.dockerignore`, `npm ci --omit=dev`.

## Checkpoint

- **Conteneur qui crash au démarrage** : `docker logs <conteneur>` (même arrêté), ou `docker run -it --entrypoint sh <image>` pour tester à la main.
