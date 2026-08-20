# Site Touchbase — page d'accueil

Page d'accueil de **Touchbase Real Estate**, implémentée à partir de la maquette Figma
*Immocontact — Touchbase*, frame `touchbase-final-redesign` (`4821:452`).

HTML / CSS / JS statique, sans dépendance ni étape de build.

## Lancer en local

N'importe quel serveur statique à la racine du projet :

```bash
npx serve -l 5180 .
```

Puis ouvrir http://localhost:5180.

## Structure

- `index.html` — la page complète, une section par bloc de la maquette
- `css/tokens.css` — jetons de design (couleurs, typographie, rayons, espacements, ombres)
- `css/styles.css` — styles, numérotés dans le même ordre que les sections de la page
- `js/i18n.js` — moteur bilingue FR / EN et dictionnaire de traductions
- `js/main.js` — comportements d'interface (menu mobile)
- `assets/` — logos, icônes et images exportés du Figma

## Sections implémentées

| # | Section | Nœud Figma |
|---|---------|------------|
| 1 | En-tête | `4821:453` |
| 2 | Héro — « chaque acteur de l'immobilier » | `4821:472` |
| 3 | Application mobile | `4821:693` |
| 4 | Bandeau de chiffres clés | `4821:759` |
| 5 | Bandeau « Touchbase handles the rest » | `4821:772` |
| 6 | Grille de fonctionnalités | `4821:782` |
| 7 | Innovation | `4821:823` |
| 8 | Logos clients | `4821:852` |
| 9 | Témoignage | `4821:866` |
| 10 | Manifeste | `4821:876` |
| 11 | Encart d'aide | `4821:879` |
| 12 | Pied de page | `4821:886` |

## Bilinguisme

L'anglais est la langue par défaut ; le bouton de l'en-tête bascule vers le français et
mémorise le choix dans `localStorage`.

Pour ajouter du texte traduisible :

```html
<p data-i18n="ma.cle">Texte anglais par défaut</p>
<img data-i18n-alt="ma.cleAlt" alt="…">
```

puis ajouter `ma.cle` dans les deux dictionnaires de `js/i18n.js`. Les attributs pris en
charge sont `alt`, `aria-label`, `placeholder` et `title`.

## Écarts assumés par rapport à la maquette

- **Section Innovation** — la maquette place 589 + 64 + 614 px d'enfants dans une zone de
  1200 px : ses blocs débordent. L'implémentation garde l'intention (titre sur deux lignes,
  seconde ligne en rouge) en donnant 674 px au texte et le reste à l'image.
- **Badge Google Play** — le SVG exporté est retourné verticalement ; il est remis à
  l'endroit en CSS.
- **Adaptatif** — la maquette ne couvre que le bureau (1440 px). Les points de rupture à
  1180, 1024, 900 et 720 px ont été définis pour ce site.
