#!/usr/bin/env bash
# Génère du trafic HTTP pour faire monter les métriques dans Grafana.
# Usage : ./scripts/traffic.sh [URL_BASE] [happy|errors]
# Exemples :
#   ./scripts/traffic.sh http://127.0.0.1:31381 happy
#   ./scripts/traffic.sh http://localhost:3000 happy

BASE="${1:-http://localhost:3000}"
MODE="${2:-happy}"

echo "Trafic vers $BASE (mode: $MODE)"

case "$MODE" in
  happy)
    for _ in $(seq 1 50); do
      curl -s "$BASE/health" > /dev/null
      curl -s "$BASE/api/tasks" > /dev/null
      sleep 0.2
    done
    ;;
  errors)
    for _ in $(seq 1 50); do
      curl -s "$BASE/api/route-inexistante" > /dev/null
      sleep 0.2
    done
    ;;
  *)
    echo "Modes : happy | errors"
    exit 1
    ;;
esac

echo "Terminé."
