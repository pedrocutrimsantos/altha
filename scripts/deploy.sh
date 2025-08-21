#!/bin/bash

# Script de deploy para Docker Hub
set -e

# Configurações
IMAGE_NAME="altha-contabilidade"
DOCKER_USERNAME="seu-usuario"  # Substitua pelo seu username do Docker Hub
VERSION="latest"

echo "🚀 Iniciando deploy da Altha Contabilidade..."

# Build da imagem
echo "📦 Fazendo build da imagem Docker..."
docker build -t $IMAGE_NAME:$VERSION .

# Tag da imagem para o Docker Hub
echo "🏷️  Criando tag para Docker Hub..."
docker tag $IMAGE_NAME:$VERSION $DOCKER_USERNAME/$IMAGE_NAME:$VERSION

# Push para o Docker Hub
echo "⬆️  Enviando imagem para Docker Hub..."
docker push $DOCKER_USERNAME/$IMAGE_NAME:$VERSION

echo "✅ Deploy concluído com sucesso!"
echo "📋 Para executar a aplicação:"
echo "   docker run -p 3000:3000 $DOCKER_USERNAME/$IMAGE_NAME:$VERSION"
echo "   ou"
echo "   docker-compose up -d"
