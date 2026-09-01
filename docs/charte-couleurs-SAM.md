# SAM — Charte couleurs

Référence de la palette telle qu'implémentée sur le site
(`tailwind.config.ts` + `app/globals.css`). Codes en HEX.

---

## 1. Couleurs de marque

### Violet — primaire

Le fil conducteur : boutons, titres accentués, logo (le « M »), icônes.

| Nom          | HEX       | Usage                                   |
|--------------|-----------|-----------------------------------------|
| Violet 500   | `#8D3CFF` | Couleur principale, boutons, accents    |
| Violet 400   | `#A45CFF` | États survol (hover)                    |
| Violet 100   | `#EFE4FF` | Fonds de pastilles d'icônes             |
| Violet 50    | `#F7F1FF` | Fonds très légers                       |

### Lila — neutres froids

| Nom          | HEX       | Usage                                   |
|--------------|-----------|-----------------------------------------|
| Lila clair   | `#EFECF9` | Fonds de section alternés               |
| Lila foncé   | `#C7C4D8` | Bordures, séparateurs                   |

### Orange — accent chaud

Ponctuation, à petites doses.

| Nom          | HEX       | Usage                                   |
|--------------|-----------|-----------------------------------------|
| Orange 500   | `#F06400` | Icônes secondaires, texte d'accent      |
| Orange 400   | `#FF7A26` | États survol                            |
| Orange 100   | `#FEEAD9` | Fonds orange légers                     |

### Jaune crème — accent chaud

Souvent associé à l'orange (fond crème + texte orange).

| Nom          | HEX       | Usage                                   |
|--------------|-----------|-----------------------------------------|
| Crème        | `#FFE6B4` | Boutons sur fond violet, pastilles, tuiles |
| Crème survol | `#FFD98F` | Hover du bouton crème                   |

---

## 2. Neutres (texte & surfaces)

| Nom       | HEX       | Usage                                      |
|-----------|-----------|--------------------------------------------|
| Navy 900  | `#1A2340` | Titres, texte principal                    |
| Navy 700  | `#2D3A5A` | Texte secondaire fort                      |
| Gray 600  | `#5A6180` | Corps de texte, descriptions               |
| Gray 400  | `#9AA0B4` | Labels discrets, placeholders              |
| Gray 200  | `#EEF0F4` | Bordures de cartes                         |
| Gray 100  | `#F7F8FA` | Fonds internes des maquettes               |
| Blanc     | `#FFFFFF` | Fond principal, cartes                     |

> La palette de marque SAM (violet, lila, jaune, orange) ne définit pas de
> couleur de texte foncé : le navy et les gris ci-dessus assurent la
> lisibilité et proviennent de la charte d'origine.

---

## 3. Logique d'usage

- **Violet** — présent partout, couleur d'identité.
- **Lila** — respirations froides : fonds de section, bordures.
- **Orange + crème** — touches chaudes, par petites doses, souvent
  ensemble (ex. pastille crème + texte orange sur les sur-titres).
- **Navy / gris** — l'ensemble du texte.

Équilibre visé : dominante violette/froide, réchauffée ponctuellement par
l'orange et le crème. Éviter d'inonder une section de jaune ou d'orange.

---

## 4. Teintes intermédiaires (informel)

Ce ne sont **pas** des couleurs de marque, mais des dégradés du violet et de
l'orange vers le blanc, utilisés pour des fonds légers, des barres de
graphiques et des états. Un designer peut les recalculer librement ; elles
sont listées ici pour information.

**Violet vers blanc**

| Palier | HEX       |    | Palier | HEX       |
|--------|-----------|----|--------|-----------|
| 7 %    | `#F5EFFF` |    | 30 %   | `#DDC5FF` |
| 12 %   | `#F1E8FF` |    | 40 %   | `#D1B1FF` |
| 14 %   | `#EFE4FF` |    | 45 %   | `#CCA7FF` |
| 20 %   | `#E8D8FF` |    | 55 %   | `#BE94FF` |
| 22 %   | `#E6D4FF` |    | —      |           |

Violet assombri (plaques d'ombre) : `#7A33E0`

**Orange vers blanc**

| Palier | HEX       |
|--------|-----------|
| 12 %   | `#FDECE0` |
| 14 %   | `#FDE9DB` |
| 20 %   | `#FCE0CC` |
| 40 %   | `#F9C199` |

---

## 5. Typographie

Police : **DM Sans** (Google Fonts), graisses 400 à 800.
Titres en 700/800, corps en 400.

---

*Palette SAM — générée à partir du code du site. Source de vérité :
`tailwind.config.ts`.*
