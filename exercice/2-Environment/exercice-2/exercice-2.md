```bash
17:23 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-2} (main *%=) 👌 ls
docker-compose.yml  Dockerfile  server.js
17:23 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-2} (main *%=) 👌 docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
17:23 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-2} (main *%=) 👌 docker compose up
WARN[0000] /home/axfortunato/cours/ue3/projet-docker/exercice/2-Environment/exercice-2/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Building 1.1s (11/11) FINISHED                                                                                                                                                                                 
 => [internal] load local bake definitions                                                                                                                                                                    0.0s
 => => reading from stdin 596B                                                                                                                                                                                0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.0s
 => => transferring dockerfile: 151B                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                                                             0.1s
 => [internal] load .dockerignore                                                                                                                                                                             0.1s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [1/4] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.1s
 => => resolve docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.1s
 => [internal] load build context                                                                                                                                                                             0.1s
 => => transferring context: 623B                                                                                                                                                                             0.0s
 => CACHED [2/4] WORKDIR /app                                                                                                                                                                                 0.0s
 => CACHED [3/4] RUN npm init -y && npm install express                                                                                                                                                       0.0s
 => CACHED [4/4] COPY server.js .                                                                                                                                                                             0.0s
 => exporting to image                                                                                                                                                                                        0.5s
 => => exporting layers                                                                                                                                                                                       0.0s
 => => exporting manifest sha256:480aa96d1bd8844432685d5e91556eabe75b24b6bb3e8b7a0a3ba26db009e428                                                                                                             0.1s
 => => exporting config sha256:e343a86051c4573895587106a5f675f071e65bcbca1eae006fd53613df8db1bb                                                                                                               0.1s
 => => exporting attestation manifest sha256:ba018457d95bed412172be322d1707c7c2876f2287df3b39a869d697d3443be6                                                                                                 0.1s
 => => exporting manifest list sha256:3254045d8fac27ebd7bac71f886a6817633470a9976a6aff562aac45df42e90a                                                                                                        0.1s
 => => naming to docker.io/library/exercice-2-api:latest                                                                                                                                                      0.0s
 => => unpacking to docker.io/library/exercice-2-api:latest                                                                                                                                                   0.0s
 => resolving provenance for metadata file                                                                                                                                                                    0.0s
[+] up 3/3
 ✔ Image exercice-2-api       Built                                                                                                                                                                            1.2s
 ✔ Network exercice-2_default Created                                                                                                                                                                          0.0s
 ✔ Container exercice-2-api-1 Created                                                                                                                                                                          0.2s
Attaching to api-1
api-1  | Server started on port 3000
api-1  | Environment: production
api-1  | API Key provided: true
17:23 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-2} (main *%=) 👌 curl http://localhost:3000/config
{"port":3000,"hasApiKey":true,"environment":"production","message":"Running in production mode"}
```