# Test Tech Zelda

## Assets disponibles

* **map.js** : contient la map au format texte.

* **sprite.png** : contient les images pour afficher la map (sol, buisson, diamant, boue), le joueur (Link) et le diamant.

## Resultat

Une image vaut mieux que 1000 mots :

![](resultat.gif)

On fait bouger le joueur avec les flèches du clavier. On ne doit pas pouvoir bouger dans les buissons. La partie est perdue si on s'embourbe dans un carré de boue. Le but du jeu est d'aller s'emparer du diamant et de ressortir de la map sur la sortie à droite dans le meilleur temps possible.

En cas de victoire, le temps de jeu doit être envoyé à l'API.  
Les meilleurs scores sont récupérés via l'API pour être affichés.
