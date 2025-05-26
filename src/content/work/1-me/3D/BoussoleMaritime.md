---
title: Boussole Maritime
publishDate: 2025-02-26 00:00:00
img: /assets/work/1-me/3D/BoussoleMaritime.jpg
img_alt: Sculpture
miniature: /assets/work/1-me/3D/BoussoleMaritime_miniature.jpg
description: |
  Modélisation d'un prop sur Blender & Substance Painter 3D
  
tags:
  - Blender
  - Substance Painter
  - Modélisation 3D
---

Dans le cadre de la création d’un jeu en 3D et de la recherche d'éléments optimisés pour le rendu en temps réel, je me suis essayé à la modélisation de divers objets qui m’inspiraient.Comme je souhaite intégrer une boussole dans mon jeu, j’ai essayé de recréer une boussole d'exploration maritime.

J’ai donc d’abord modélisé sur Blender la boussole en plusieurs éléments qui la composent : le couvercle, le support, le compas, le locquet et l’anneau pour l’accrocher.

Pour chaque élément, j’ai d’abord créé des formes simples avec peu de polygones dans l'objectif de l’utiliser dans un moteur temps réel et de configurer son UV map pour pouvoir le texturer. Ensuite, j’ai créé une copie du modèle d'origine avec davantage de détails, dans le but d’obtenir un modèle plus réaliste.
J’ai ensuite importé le modèle à faible nombre de polygones dans le logiciel Adobe Substance 3D Painter afin de lui appliquer les normales du modèle plus réaliste.Une fois la préparation réalisée sur Substance Painter, j’ai créé des textures pour chaque élément à l’aide de la bibliothèque fournie par le logiciel. J’ai également importé l’image d’une rosace des vents stylisée afin de l’appliquer sur le compas.

Mon objectif était de créer un asset avec un aspect réaliste, j’ai donc ajouté des effets de dégradation sur les textures.

Enfin, j’ai exporté tous les éléments essentiels à l’intégration du modèle sur le moteur Unreal Engine 5 afin de le rendre interactif dans ce dernier. Je précise également que les étapes de réalisation présentées ici seront globalement similaires à celles des modèles présentés par la suite dans ce portfolio.