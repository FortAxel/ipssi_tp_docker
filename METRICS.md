# Phase 5 — Monitoring (K3s + Prometheus + Grafana)

## Architecture

| Composant | Où il tourne | Rôle |
|-----------|--------------|------|
| **Todo API** (×2) | K3s | App + `GET /metrics` (`prom-client`) |
| **PostgreSQL** | K3s — `k8s/postgres.yaml` | BDD |
| **Prometheus** | Docker Compose | Scrape `/metrics` |
| **Grafana** | Docker Compose | Dashboard **Todo API** |

---

## Tableau de métriques

| Métrique | Valeur mesurée | Comment l’obtenir |
|----------|----------------|-------------------|
| Durée totale pipeline (lint → deploy) | 1min6s |
| Taille image Docker (avant optimisation) | 195MB|
| Taille image Docker (après optimisation) | Phase 6 | — |
| Temps rolling update | 9.6s | 
| Nombre de pods en charge | **2** | 
| Latence p95 API (Grafana) | 0.0095 s |

---

## Scénarios

- **Happy path :** `./scripts/traffic.sh http://127.0.0.1:31381 happy` → `docs/captures/grafana.png`
- **Prometheus :** target `todo-api-k3s` UP → `docs/captures/prometheus.png`
- **Trafic curl :** `docs/captures/client.png`
- **Adverse :** boucle `curl` + `kubectl delete pod` → `docs/captures/delete_pods.png`

---

