```bash
17:04 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose up -d
[+] up 4/5
 ✔ Network exercice-2_backend      Created                                                                                                                                                                     0.0s
 ✔ Network exercice-2_frontend     Created                                                                                                                                                                     0.0s
 ⠼ Container exercice-2-nginx-1    Starting                                                                                                                                                                    0.5s
 ✔ Container exercice-2-database-1 Started                                                                                                                                                                     0.5s
 ✔ Container exercice-2-api-1      Started                                                                                                                                                                     0.5s
Error response from daemon: ports are not available: exposing port TCP 0.0.0.0:80 -> 127.0.0.1:0: listen tcp 0.0.0.0:80: bind: address already in use

What's next:
    Debug this Compose error with Gordon → docker ai "help me fix this compose error"
    Filter, search, and stream logs from all your Compose services
    in one place with Docker Desktop's Logs view. docker-desktop://dashboard/logs?appId=exercice-2
17:04 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 ddev
default
Current context is now "default"
17:05 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker ps
CONTAINER ID   IMAGE                                                 COMMAND                  CREATED        STATUS       PORTS                                                                                      NAMES
72ce51a62958   docker.elastic.co/kibana/kibana:9.1.1                 "/bin/tini -- /usr/l…"   3 months ago   Up 6 hours   0.0.0.0:5601->5601/tcp, [::]:5601->5601/tcp                                                kibana
8097e6770000   nicolargo/glances:latest-full                         "/bin/sh -c '/venv/b…"   3 months ago   Up 6 hours   0.0.0.0:61208->61208/tcp, [::]:61208->61208/tcp, 61209/tcp                                 glances
6fee8eb29af8   phpmyadmin/phpmyadmin:latest                          "/docker-entrypoint.…"   7 months ago   Up 6 hours   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp                                                    searchproject-phpmyadmin-1
cf9ec9daf7d1   mysql:8.0                                             "docker-entrypoint.s…"   7 months ago   Up 6 hours   0.0.0.0:3306->3306/tcp, [::]:3306->3306/tcp, 33060/tcp                                     searchproject-mysql-1
36fbab7d5b8a   docker.elastic.co/elasticsearch/elasticsearch:9.1.1   "/bin/tini -- /usr/l…"   7 months ago   Up 6 hours   0.0.0.0:9200->9200/tcp, [::]:9200->9200/tcp, 0.0.0.0:9300->9300/tcp, [::]:9300->9300/tcp   es
17:05 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 dcours
desktop-linux
Current context is now "desktop-linux"
17:05 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose down -v
[+] down 5/5
 ✔ Container exercice-2-api-1      Removed                                                                                                                                                                     1.5s
 ✔ Container exercice-2-database-1 Removed                                                                                                                                                                     0.5s
 ✔ Container exercice-2-nginx-1    Removed                                                                                                                                                                     0.1s
 ✔ Network exercice-2_frontend     Removed                                                                                                                                                                     0.4s
 ✔ Network exercice-2_backend      Removed                                                                                                                                                                     0.2s
17:05 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose up -d
[+] up 5/5
 ✔ Network exercice-2_backend      Created                                                                                                                                                                     0.0s
 ✔ Network exercice-2_frontend     Created                                                                                                                                                                     0.0s
 ✔ Container exercice-2-database-1 Started                                                                                                                                                                     0.7s
 ✔ Container exercice-2-nginx-1    Started                                                                                                                                                                     0.7s
 ✔ Container exercice-2-api-1      Started                                                                                                                                                                     0.9s

What's next:
    Filter, search, and stream logs from all your Compose services
    in one place with Docker Desktop's Logs view. docker-desktop://dashboard/logs?appId=exercice-2
17:05 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec nginx ping -c 2 api
PING api (172.22.0.3): 56 data bytes
64 bytes from 172.22.0.3: seq=0 ttl=64 time=0.110 ms
64 bytes from 172.22.0.3: seq=1 ttl=64 time=0.109 ms

--- api ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.109/0.109/0.110 ms
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec nginx ping -c 2 database
ping: bad address 'database'

What's next:
    Debug this Compose error with Gordon → docker ai "help me fix this compose error"
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec nginx ping -c 2 
api       database  nginx     
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec nginx ping -c 2 
api       database  nginx     
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec nginx ping -c 2 database
ping: bad address 'database'

What's next:
    Debug this Compose error with Gordon → docker ai "help me fix this compose error"
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec api ping -c 2 database
PING database (172.21.0.2): 56 data bytes
64 bytes from 172.21.0.2: seq=0 ttl=64 time=0.068 ms
64 bytes from 172.21.0.2: seq=1 ttl=64 time=0.084 ms

--- database ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.068/0.076/0.084 ms
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose exec database ping -c 2 nginx
ping: bad address 'nginx'

What's next:
    Debug this Compose error with Gordon → docker ai "help me fix this compose error"
17:06 axfortunato {~/cours/ue3/projet-docker/exercice/exercice-2} (main %=) 👌 docker compose down
[+] down 5/5
 ✔ Container exercice-2-nginx-1    Removed                                                                                                                                                                     0.5s
 ✔ Container exercice-2-database-1 Removed                                                                                                                                                                     0.5s
 ✔ Container exercice-2-api-1      Removed                                                                                                                                                                     1.5s
 ✔ Network exercice-2_backend      Removed                                                                                                                                                                     0.2s
 ✔ Network exercice-2_frontend     Removed                                                                                                                                                                     0.4s
```