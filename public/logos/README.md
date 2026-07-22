# Logos partenaires

Fichiers servis par le bandeau `components/PartnerMarquee.tsx`.
Copiés depuis le dossier source `logo/` à la racine (qui n'est pas servi).

| Fichier | Organisation | Source | État |
|---|---|---|---|
| `melting.webp` | Melting | 640×200 | OK |
| `apeai-ouest-herault.png` | APEAI Ouest Hérault | 797×384 | Marges blanches incluses, agrandi à 1,2× |
| `arseaa.png` | ARSEAA — action solidaire | 649×207 RGBA | OK |
| `croix-rouge-francaise.png` | Croix-Rouge française | 1024×341 | OK |
| `pep34.png` | Les PEP 34 | 495×152 | ⚠️ variante « PEP34 Vacances » |
| `gem-gambetta.jpg` | GEM Gambetta Montpellier | 325×195 JPEG | ⚠️ basse déf. + fond non détouré |
| `mon-sauveteur.png` | MonSauveteur | 618×262 | ⚠️ blanc sur aplat bleu |

## Fichiers à remplacer en priorité

1. **`gem-gambetta.jpg`** — 325×195 seulement, et en JPEG donc sans
   transparence. À 51px de haut le sous-titre « Groupe d'Entraide Mutuelle »
   est illisible. Demander un PNG ou SVG détouré, ≥ 600px de large.
2. **`mon-sauveteur.png`** — logo blanc sur aplat bleu. Impossible à poser sur
   fond blanc sans cadre ; affiché en pastille arrondie en attendant. Demander
   la version détourée (bleu sur transparent).
3. **`pep34.png`** — c'est le logo « PEP34 Vacances ». La capture que tu m'as
   envoyée montrait « Les PEP 34 — La solidarité en action ». À confirmer.

## Conventions

- Hauteur de rendu de base **44px**, largeur automatique (plafond 220px).
- Correction optique par logo via `scale` dans `PARTNERS`
  (`components/PartnerMarquee.tsx`) : à hauteur égale, un logo dense paraît
  plus lourd qu'un logo large.
- `boxed: true` arrondit les coins des logos à fond opaque.
- SVG ou PNG transparent de préférence. Détourer les marges superflues.

## Repli

Si un fichier manque ou est renommé, `PartnerLogo` bascule sur le nom de
l'organisation en texte. Jamais d'image cassée.

## Droits

Ces logos appartiennent à leurs organisations. S'assurer d'avoir leur accord
pour un affichage sous « Ils construisent le réseau avec nous », qui vaut
affirmation de partenariat.
