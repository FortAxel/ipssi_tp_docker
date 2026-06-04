#!/usr/bin/env bash
# Build l'image, l'importe dans K3s et recrée les pods todo-api.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Build image (sans cache)"
docker build --no-cache -t axfortunato/todo-api:latest .

echo "==> Import dans K3s"
docker save axfortunato/todo-api:latest | sudo k3s ctr images import -

echo "==> Apply deployment + recréer les pods"
sudo kubectl apply -f k8s/deployment.yaml
sudo kubectl delete pod -l app=todo-api --wait=false
sudo kubectl wait --for=condition=ready pod -l app=todo-api --timeout=120s

NODE_PORT="$(sudo kubectl get svc todo-api -o jsonpath='{.spec.ports[0].nodePort}')"
echo "==> Test /metrics sur le NodePort ${NODE_PORT}"
curl -sf "http://127.0.0.1:${NODE_PORT}/metrics" | head -5

echo "OK — image déployée sur K3s."
