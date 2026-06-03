```bash
16:56 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker network create app-network
04c6ed155e89e535ba95aecc88c0006c68d30a36f8924faf91540b0e6113856f
16:56 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker run -dit --name serveur --network app-network alpine sh
328b47b078dbd48c912fc2caa31d6e3c29b0a066c837908643bba0efe6b19e3f
16:56 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker exec serveur apk add --no-cache curl
(1/9) Installing brotli-libs (1.2.0-r0)
(2/9) Installing c-ares (1.34.6-r0)
(3/9) Installing libunistring (1.4.1-r0)
(4/9) Installing libidn2 (2.3.8-r0)
(5/9) Installing nghttp2-libs (1.69.0-r0)
(6/9) Installing libpsl (0.21.5-r3)
(7/9) Installing zstd-libs (1.5.7-r2)
(8/9) Installing libcurl (8.19.0-r0)
(9/9) Installing curl (8.19.0-r0)
Executing busybox-1.37.0-r30.trigger
OK: 13.0 MiB in 25 packages
16:56 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker run -dit --name client --network app-network alpine sh
3504bfc8a4018518b366f0e7545364a178b53dfda1005c09ff1c2aa1b9ddc2d2
16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker exec client apk add --no-cache curl
(1/9) Installing brotli-libs (1.2.0-r0)
(2/9) Installing c-ares (1.34.6-r0)
(3/9) Installing libunistring (1.4.1-r0)
(4/9) Installing libidn2 (2.3.8-r0)
(5/9) Installing nghttp2-libs (1.69.0-r0)
(6/9) Installing libpsl (0.21.5-r3)
(7/9) Installing zstd-libs (1.5.7-r2)
(8/9) Installing libcurl (8.19.0-r0)
(9/9) Installing curl (8.19.0-r0)
Executing busybox-1.37.0-r30.trigger
OK: 13.0 MiB in 25 packages
16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker exec client ping -c 3 serveur
PING serveur (172.21.0.2): 56 data bytes
64 bytes from 172.21.0.2: seq=0 ttl=64 time=0.074 ms
64 bytes from 172.21.0.2: seq=1 ttl=64 time=0.090 ms
^C16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker network inspect app-network
[
    {
        "Name": "app-network",
        "Id": "04c6ed155e89e535ba95aecc88c0006c68d30a36f8924faf91540b0e6113856f",
        "Created": "2026-06-03T14:56:45.612509058Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv4": true,
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.21.0.0/16",
                    "Gateway": "172.21.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Options": {
            "com.docker.network.enable_ipv4": "true",
            "com.docker.network.enable_ipv6": "false"
        },
        "Labels": {},
        "Containers": {
            "328b47b078dbd48c912fc2caa31d6e3c29b0a066c837908643bba0efe6b19e3f": {
                "Name": "serveur",
                "EndpointID": "eb3756e4ca584391fd2b239df4a471102fdf344f63696619fb5142d4d3d38a45",
                "MacAddress": "3e:52:9b:e4:40:14",
                "IPv4Address": "172.21.0.2/16",
                "IPv6Address": ""
            },
            "3504bfc8a4018518b366f0e7545364a178b53dfda1005c09ff1c2aa1b9ddc2d2": {
                "Name": "client",
                "EndpointID": "609054bc56335b6e4890db4a71ae373ca0a69f3af14ef60f5bb752b59c71e3c9",
                "MacAddress": "da:25:c7:33:49:62",
                "IPv4Address": "172.21.0.3/16",
                "IPv6Address": ""
            }
        },
        "Status": {
            "IPAM": {
                "Subnets": {
                    "172.21.0.0/16": {
                        "IPsInUse": 5,
                        "DynamicIPsAvailable": 65531
                    }
                }
            }
        }
    }
]
16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker network create other-network
11e7918343b728e2fc3d1a42c4d8351edf7ce443885ce8f2644634398ffe3563
16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker run -dit --name isole --network other-network alpine sh
d89c1713e7545bdecd6e285b3d90b95182aa8388c5ca1a308a2c24226508f079
16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker exec client ping -c 3 isole
ping: bad address 'isole'
16:57 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker exec isole ping -c 3 client
PING client (::ffff:192.168.1.20): 56 data bytes
ping: sendto: Network unreachable
16:58 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker stop serveur client isole
serveur
client
isole
16:58 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker rm serveur client isole
serveur
client
isole
16:58 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker network rm app-network other-network
app-network
other-network
16:58 axfortunato {~/cours/ue3/projet-docker} (main =) 👌 docker network ls
NETWORK ID     NAME                    DRIVER    SCOPE
a19a182285d4   bridge                  bridge    local
237e6d39cd38   host                    host      local
3ff20965a067   ipssi_project_default   bridge    local
d494966aa599   kind                    bridge    local
c0ca1532cfa1   none                    null      local
9c10c68280a7   projet-docker_default   bridge    local

```
