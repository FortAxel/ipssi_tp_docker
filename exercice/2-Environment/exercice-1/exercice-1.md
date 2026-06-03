```bash
17:14 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker build -t env-test .
[+] Building 4.1s (9/9) FINISHED                                                                                                                                                              docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.1s
 => => transferring dockerfile: 151B                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                                                             0.1s
 => [internal] load .dockerignore                                                                                                                                                                             0.1s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [1/4] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.1s
 => => resolve docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.1s
 => [internal] load build context                                                                                                                                                                             0.1s
 => => transferring context: 623B                                                                                                                                                                             0.0s
 => CACHED [2/4] WORKDIR /app                                                                                                                                                                                 0.0s
 => [3/4] RUN npm init -y && npm install express                                                                                                                                                              2.4s
 => [4/4] COPY server.js .                                                                                                                                                                                    0.1s 
 => exporting to image                                                                                                                                                                                        1.0s 
 => => exporting layers                                                                                                                                                                                       0.4s 
 => => exporting manifest sha256:92ba07be85619aa1be328be0867a393fda9699e22ea5505ac99217521b247985                                                                                                             0.1s 
 => => exporting config sha256:5b3d93f98f53fc26d3f767b0f6cef5c8fa9f13c1c012adabd0354871c001eb70                                                                                                               0.1s 
 => => exporting attestation manifest sha256:3cb0eebaa5a65c1869900d8fd69c26d9b62760053b71e5f432fa6a3b061e021d                                                                                                 0.1s 
 => => exporting manifest list sha256:8f61b679be816197bf93464ee9c0029d49b05ce5f128b6df9a4254360de96e65                                                                                                        0.1s
 => => naming to docker.io/library/env-test:latest                                                                                                                                                            0.0s
 => => unpacking to docker.io/library/env-test:latest                                                                                                                                                         0.2s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/o1y9vzu3ikbhqmbvieepgc4qa
17:14 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker run -p 3000:3000 env-test
Server started on port 3000
Environment: development
API Key provided: false
^C^C^C
got 3 SIGTERM/SIGINTs, forcefully exiting
17:14 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker run -p 3000:3000 \
-e NODE_ENV=production \
-e API_KEY=secret123 \
-e PORT=3000 \
env-test

What's next:
    Debug this container error with Gordon → docker ai "help me fix this container error"
docker: Error response from daemon: failed to set up container networking: driver failed programming external connectivity on endpoint nervous_dhawan (eeed251a099b197aea5d5bc9c0b0ba144602967724df6f72cdf02856a41ecb08): Bind for 0.0.0.0:3000 failed: port is already allocated

Run 'docker run --help' for more information
17:14 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS                                         NAMES
c47537e93ab6   env-test   "docker-entrypoint.s…"   27 seconds ago   Up 27 seconds   0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp   magical_diffie
17:14 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker stop magical_diffie 
magical_diffie
17:15 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker rm magical_diffie 
magical_diffie
17:15 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker run -p 3000:3000 -e NODE_ENV=production -e API_KEY=secret123 -e PORT=3000 env-test
Server started on port 3000
Environment: production
API Key provided: true


17:16 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 curl http://localhost:3000/config
{"port":"3000","hasApiKey":true,"environment":"production","message":"Running in production mode"}
```

```bash
17:18 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 docker compose up
WARN[0000] /home/axfortunato/cours/ue3/projet-docker/exercice/2-Environment/exercice-1/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Building 1.1s (11/11) FINISHED                                                                                                                                                                                 
 => [internal] load local bake definitions                                                                                                                                                                    0.0s
 => => reading from stdin 596B                                                                                                                                                                                0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.0s
 => => transferring dockerfile: 151B                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                                                             0.1s
 => [internal] load .dockerignore                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [1/4] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.1s
 => => resolve docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.0s
 => [internal] load build context                                                                                                                                                                             0.0s
 => => transferring context: 31B                                                                                                                                                                              0.0s
 => CACHED [2/4] WORKDIR /app                                                                                                                                                                                 0.0s
 => CACHED [3/4] RUN npm init -y && npm install express                                                                                                                                                       0.0s
 => CACHED [4/4] COPY server.js .                                                                                                                                                                             0.0s
 => exporting to image                                                                                                                                                                                        0.5s
 => => exporting layers                                                                                                                                                                                       0.0s
 => => exporting manifest sha256:5dc707a2e41d45ccb297092348a2d8b15f611d70062325a8024b0f165af2bd10                                                                                                             0.1s
 => => exporting config sha256:cc42d559049d8c0c684f2a07688f6c340b35be47578d399610ee66e593cb4711                                                                                                               0.1s
 => => exporting attestation manifest sha256:eb89302969c26ae94c6c30a948e9c626685032ec1a6908ede0ab43d31485171e                                                                                                 0.1s
 => => exporting manifest list sha256:bc810132810e51d6ac22a4471c2747c3c46dce57760496e1b082f98fa4964f1d                                                                                                        0.1s
 => => naming to docker.io/library/exercice-1-api:latest                                                                                                                                                      0.0s
 => => unpacking to docker.io/library/exercice-1-api:latest                                                                                                                                                   0.0s
 => resolving provenance for metadata file                                                                                                                                                                    0.0s
[+] up 3/3
 ✔ Image exercice-1-api       Built                                                                                                                                                                            1.1s
 ✔ Network exercice-1_default Created                                                                                                                                                                          0.0s
 ✔ Container exercice-1-api-1 Created                                                                                                                                                                          0.2s
Attaching to api-1
Error response from daemon: failed to set up container networking: driver failed programming external connectivity on endpoint exercice-1-api-1 (1082f60f66706b4b3db843e8d6092b4d00d60d49302beb43960f3a6154286042): Bind for 0.0.0.0:3000 failed: port is already allocated

What's next:
    Debug this Compose error with Gordon → docker ai "help me fix this compose error"
17:18 axfortunato {~/cours/ue3/projet-docker/exercice/2-Environment/exercice-1} (main %=) 👌 curl http://localhost:3000/config
{"port":"3000","hasApiKey":true,"environment":"production","message":"Running in production mode"}
```