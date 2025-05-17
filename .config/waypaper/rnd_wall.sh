#!/bin/bash

# Caminho da pasta com os wallpapers
WALLPAPER_DIR="$HOME/Wallpaper"

# Verifica se o swww está rodando; se não, inicializa
if ! pgrep -x "swww-daemon" > /dev/null; then
    swww init
fi

# Escolhe um arquivo de imagem aleatoriamente
WALLPAPER=$(find "$WALLPAPER_DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.jpeg" \) | shuf -n 1)

# Aplica o wallpaper
if [[ -n "$WALLPAPER" ]]; then
    swww img "$WALLPAPER"
else
    echo "Nenhuma imagem encontrada em $WALLPAPER_DIR"
    exit 1
fi
