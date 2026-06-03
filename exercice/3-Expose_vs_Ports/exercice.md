```bash
17:34 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker compose up -d --build
WARN[0000] /home/axfortunato/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Building 4.4s (11/11) FINISHED                                                                                                                                                                                 
 => [internal] load local bake definitions                                                                                                                                                                    0.0s
 => => reading from stdin 596B                                                                                                                                                                                0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.0s
 => => transferring dockerfile: 148B                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                                                             0.0s
 => [internal] load .dockerignore                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [1/4] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.1s
 => => resolve docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                                       0.0s
 => [internal] load build context                                                                                                                                                                             0.0s
 => => transferring context: 28B                                                                                                                                                                              0.0s
 => CACHED [2/4] WORKDIR /app                                                                                                                                                                                 0.0s
 => [3/4] RUN npm init -y && npm install express pg                                                                                                                                                           2.5s
 => [4/4] COPY app.js .                                                                                                                                                                                       0.1s 
 => exporting to image                                                                                                                                                                                        1.2s 
 => => exporting layers                                                                                                                                                                                       0.4s 
 => => exporting manifest sha256:711bcab190116b02eca300b95fba5865a3d4f98708288f5f32a28a798bd3ec0e                                                                                                             0.1s 
 => => exporting config sha256:fa6d880dbb6ba8b7ad7e3366b0caab56e5aaf72bad299ef32e3e83f812891930                                                                                                               0.1s 
 => => exporting attestation manifest sha256:f76b63ba79b15755a4d886eab6f60e8885024c7c3be4b055999d0d06021bde65                                                                                                 0.1s 
 => => exporting manifest list sha256:4a762b895f46abb88c1d6f651696fe694630e725806908b051f16c03f0a26b2d                                                                                                        0.1s
 => => naming to docker.io/library/3-expose_vs_ports-api:latest                                                                                                                                               0.0s
 => => unpacking to docker.io/library/3-expose_vs_ports-api:latest                                                                                                                                            0.3s
 => resolving provenance for metadata file                                                                                                                                                                    0.0s
[+] up 4/4
 ✔ Image 3-expose_vs_ports-api            Built                                                                                                                                                                4.4s
 ✔ Network 3-expose_vs_ports_default      Created                                                                                                                                                              0.0s
 ✔ Container 3-expose_vs_ports-database-1 Started                                                                                                                                                              0.7s
 ✔ Container 3-expose_vs_ports-api-1      Started                                                                                                                                                              0.7s

What's next:
    Filter, search, and stream logs from all your Compose services
    in one place with Docker Desktop's Logs view. docker-desktop://dashboard/logs?appId=3-expose_vs_ports
17:34 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker ps
CONTAINER ID   IMAGE                   COMMAND                  CREATED         STATUS         PORTS                                         NAMES
3c53e8acba74   3-expose_vs_ports-api   "docker-entrypoint.s…"   4 seconds ago   Up 2 seconds   0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp   3-expose_vs_ports-api-1
0656351e6ef6   postgres:15-alpine      "docker-entrypoint.s…"   4 seconds ago   Up 2 seconds   5432/tcp                                      3-expose_vs_ports-database-1
17:34 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 curl http://localhost:3000/health
{"status":"ok"}17:34 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 ^C
17:34 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 curl http://localhost:3000/db-test
{"success":true,"time":"2026-06-03T15:35:04.267Z"}17:35 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 ^C
17:35 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 psql -h localhost -U postgres -d testdb
bash: psql : commande introuvable
17:35 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker exec -it 3-expose_vs_ports-database-1 psql -U postgres -d testdb
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  database "testdb" does not exist

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug 3-expose_vs_ports-database-1
    Learn more at https://docs.docker.com/go/debug-cli/
17:35 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker compose down
WARN[0000] /home/axfortunato/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] down 3/3
 ✔ Container 3-expose_vs_ports-api-1      Removed                                                                                                                                                              1.4s
 ✔ Container 3-expose_vs_ports-database-1 Removed                                                                                                                                                              0.4s
 ✔ Network 3-expose_vs_ports_default      Removed                                                                                                                                                              0.2s
17:36 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker compose up -d
WARN[0000] /home/axfortunato/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] up 3/3
 ✔ Network 3-expose_vs_ports_default      Created                                                                                                                                                              0.0s
 ✔ Container 3-expose_vs_ports-database-1 Started                                                                                                                                                              0.6s
 ✔ Container 3-expose_vs_ports-api-1      Started                                                                                                                                                              0.6s

What's next:
    Filter, search, and stream logs from all your Compose services
    in one place with Docker Desktop's Logs view. docker-desktop://dashboard/logs?appId=3-expose_vs_ports
17:36 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 psql -h localhost -U postgres -d testdb
bash: psql : commande introuvable
17:36 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker exec -it 3-expose_vs_ports-database-1 psql -U postgres -d testdb
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  database "testdb" does not exist

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug 3-expose_vs_ports-database-1
    Learn more at https://docs.docker.com/go/debug-cli/
17:36 axfortunato {~/cours/ue3/projet-docker/exercice/3-Expose_vs_Ports} (main *%=) 👌 docker exec -it 3-expose_vs_ports-database-1 psql -U postgres -d testdb
psql (15.18)
Type "help" for help.

testdb=# 
testdb=# 
testdb=# 
testdb=# 
testdb=# 
testdb=# exit

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug 3-expose_vs_ports-database-1
    Learn more at https://docs.docker.com/go/debug-cli/

```