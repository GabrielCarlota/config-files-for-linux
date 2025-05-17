#!/bin/bash

# Directory containing your wallpapers
WALLPAPER_DIR="$HOME/Wallpaper"

# Select a random wallpaper
WALLPAPER=$(find "$WALLPAPER_DIR" -type f | shuf -n 1)

# Apply the wallpaper using swww
swww img "$WALLPAPER" --transition-type center --transition-fps 144
