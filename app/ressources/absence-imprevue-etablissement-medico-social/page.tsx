import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FaqAccordion, type FaqItem } from '@/components/FaqAccordion'

/**
 * URL de campagne pilotée par variable d'environnement (repli en dur pour que
 * la production fonctionne même si la variable n'est pas définie sur Vercel).
 * Les deux liens « diagnostic » et « guide » pointent vers cette même URL.
 */
const CAMPAGNE1_URL =
  process.env.NEXT_PUBLIC_CAMPAGNE1_URL || 'https://landing-sam.vercel.app/'

const TITRE =
  'Absence imprévue en établissement médico-social : pourquoi chaque cas repart de zéro, et comment y remédier'

const META_DESCRIPTION =
  'Dans les établissements médico-sociaux, chaque absence imprévue est souvent traitée comme la première. Une méthode existe pour changer ça, sans plus de moyens.'

const PATH = '/ressources/absence-imprevue-etablissement-medico-social'

export const metadata: Metadata = {
  title: TITRE,
  description: META_DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITRE,
    description: META_DESCRIPTION,
    url: PATH,
    type: 'article',
    locale: 'fr_FR',
  },
}

const FAQ: FaqItem[] = [
  {
    question:
      'Qu’est-ce qu’une absence imprévue en établissement médico-social ?',
    answer:
      'C’est l’absence d’un professionnel non planifiée à l’avance (arrêt maladie de dernière minute, imprévu personnel, urgence familiale) qui oblige l’établissement à réorganiser son fonctionnement dans un délai très court, souvent le jour même.',
  },
  {
    question:
      'Pourquoi la gestion des absences imprévues est-elle particulièrement difficile dans le secteur médico-social ?',
    answer:
      'Parce que la continuité des soins et de l’accompagnement ne peut pas être suspendue : contrairement à d’autres secteurs, un poste non couvert a un impact direct sur les résidents ou les personnes accompagnées. Cette contrainte, combinée à une tension déjà forte sur les ressources humaines du secteur, rend chaque absence imprévue plus critique à gérer que dans d’autres environnements de travail.',
  },
  {
    question:
      'Combien de temps les managers d’établissement passent-ils à gérer les plannings et les absences ?',
    answer:
      'Selon l’ANAP, la gestion des plannings mobilise plus de 50 % du temps des cadres et managers dans les établissements de santé et médico-sociaux, une charge qui augmente mécaniquement avec chaque absence imprévue mal anticipée.',
  },
  {
    question: 'Faut-il un logiciel pour mieux gérer les absences imprévues ?',
    answer:
      'Pas nécessairement pour commencer. La première amélioration vient d’une méthode : centraliser les ressources mobilisables, formaliser les informations essentielles, et conserver une mémoire des absences déjà gérées. Un outil devient utile pour faire vivre cette méthode dans la durée, une fois qu’elle a été définie.',
  },
  {
    question:
      'Comment savoir si mon établissement est bien préparé face aux absences imprévues ?',
    answer:
      'Le plus simple est de faire un état des lieux objectif sur quatre dimensions : la visibilité des ressources mobilisables, la qualité de la transmission d’informations, l’organisation en situation d’urgence, et la capacité à capitaliser sur les absences déjà gérées. Notre auto-diagnostic gratuit en 15 questions permet d’obtenir ce constat en trois minutes.',
  },
  {
    question: 'Qu’est-ce que SAM ?',
    answer:
      'SAM est une solution en cours de développement, conçue pour donner aux établissements médico-sociaux la visibilité, la transmission et la mémoire qui leur manquent le jour où une absence survient. Le diagnostic et le guide proposés sur ce site sont les premières briques de cette démarche.',
  },
]

/** JSON-LD FAQPage : contenu identique à l'accordéon visible. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const linkClass =
  'font-semibold text-violet-500 underline decoration-violet-500/40 underline-offset-2 transition-colors hover:text-violet-400 hover:decoration-violet-400'

export default function AbsenceImprevuePage() {
  return (
    <>
      <Header />
      <main>
        <article className="section-pad">
          <div className="shell">
            <div className="mx-auto max-w-[720px]">
              {/* En-tête */}
              <span className="eyebrow inline-block rounded-full bg-cream px-3 py-1.5 text-orange-500">
                Ressources
              </span>
              <h1 className="mb-6 mt-4 text-[30px] font-extrabold leading-[1.15] text-navy-900 [text-wrap:balance] lg:text-[40px]">
                {TITRE}
              </h1>

              {/* Corps de l'article */}
              <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-gray-600">
                <p>
                  Il est 6h45. Le téléphone sonne. Une aide-soignante prévient
                  qu’elle ne pourra pas assurer son poste ce matin. En quelques
                  minutes, il faut retrouver qui contacter, quelles informations
                  transmettre, et qui décide. Dans la plupart des établissements
                  médico-sociaux, ces réponses existent, mais elles sont dans la
                  tête de deux ou trois personnes, sur un post-it, ou perdues
                  dans un ancien mail.
                </p>
                <p>
                  Ce scénario se répète dans presque tous les établissements
                  sanitaires, sociaux et médico-sociaux (ESMS) de France,
                  plusieurs fois par mois. Et à chaque fois, ou presque,
                  l’organisation repart de zéro, comme si c’était la première
                  absence imprévue jamais gérée.
                </p>
                <p>
                  Ce n’est pas une fatalité. C’est un problème d’organisation de
                  l’information, qui se diagnostique et qui se corrige.
                </p>

                <Section title="Un phénomène structurel, pas un problème ponctuel">
                  <p>
                    L’absentéisme dans le secteur médico-social n’a rien
                    d’anecdotique. Selon l’Agence nationale de performance
                    sanitaire et médico-sociale (ANAP), plus de la moitié du
                    temps des cadres et managers d’établissement est aujourd’hui
                    absorbée par la gestion des plannings. Ce chiffre, à lui
                    seul, dit quelque chose d’important : la gestion des absences
                    n’est pas un imprévu occasionnel dans le quotidien des ESMS,
                    elle en est devenue une composante structurelle.
                  </p>
                  <p>
                    La tendance ne va pas en s’améliorant. D’après la Caisse
                    nationale de solidarité pour l’autonomie (CNSA), le taux de
                    vacance de postes dans les établissements et services
                    médico-sociaux a plus que doublé entre 2017 et 2023, passant
                    de 2,1 % à 4,5 %. Moins de personnel disponible en temps
                    normal signifie, mécaniquement, moins de marge de manœuvre
                    quand une absence imprévue survient.
                  </p>
                  <p>
                    Face à cette réalité, la question n’est plus de savoir si une
                    organisation va devoir gérer des absences imprévues (elle le
                    fait déjà, en permanence), mais si elle a les moyens de le
                    faire sans tout reconstruire à chaque fois.
                  </p>
                </Section>

                <Section title="Pourquoi chaque absence semble repartir de zéro">
                  <p>
                    Trois causes reviennent presque systématiquement lorsqu’on
                    observe le fonctionnement réel des établissements face à une
                    absence imprévue.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      Les ressources mobilisables sont dispersées.
                    </strong>{' '}
                    Un établissement connaît, en général, plusieurs
                    professionnels capables d’intervenir en renfort : d’anciens
                    remplaçants, des candidats déjà rencontrés, des
                    professionnels du réseau local. Le problème n’est pas
                    l’absence de ces ressources, c’est leur dispersion : personne
                    n’a une vision centralisée et à jour de qui est mobilisable,
                    à quelles conditions, et depuis quand.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      La transmission d’informations repose sur l’oral.
                    </strong>{' '}
                    Les consignes prioritaires, les points de vigilance sur un
                    poste, les habitudes du service : tout cela existe, mais
                    rarement sous une forme écrite et accessible. Résultat,
                    chaque nouvelle personne qui intervient doit reconstituer
                    cette connaissance en partie seule, ou en mobilisant une
                    collègue déjà en tension.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      Aucune mémoire collective ne se construit.
                    </strong>{' '}
                    Une absence gérée en mars n’aide en rien à gérer celle
                    d’avril, parce que rien n’a été conservé de la première
                    expérience. L’énergie dépensée hier ne sert pas aujourd’hui.
                    Chaque absence imprévue redémarre à froid.
                  </p>
                  <p>
                    Ce triple constat explique un paradoxe fréquent : des équipes
                    compétentes, un encadrement investi, et pourtant une
                    sensation persistante de gérer l’urgence dans
                    l’improvisation.
                  </p>
                </Section>

                <Section title="Ce qui change lorsqu’une organisation est préparée">
                  <p>
                    Les établissements qui gèrent mieux leurs absences imprévues
                    n’ont pas nécessairement plus de moyens que les autres. Ce
                    qui change, c’est la structuration de trois éléments : la
                    visibilité sur les ressources, la formalisation de la
                    transmission, et la capitalisation sur l’expérience.
                  </p>
                  <p>
                    Concrètement, cela veut dire disposer d’une liste à jour des
                    professionnels mobilisables et de leurs disponibilités,
                    préparer à l’avance les informations essentielles à
                    transmettre plutôt que de les improviser dans l’urgence, et
                    conserver une trace exploitable de chaque absence gérée : ce
                    qui a fonctionné, ce qui a été difficile, ce qu’il faudrait
                    anticiper la prochaine fois.
                  </p>
                  <p>
                    Ce n’est pas une question de logiciel avant d’être une
                    question de méthode. Un établissement peut commencer à
                    progresser sur ces trois axes avec des outils très simples, à
                    condition de sortir du mode réactif pur.
                  </p>
                </Section>

                <Section title="Une méthode en quatre étapes pour sécuriser la continuité">
                  <p>
                    Structurer la gestion des absences imprévues repose sur une
                    progression en quatre temps.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      1. Cartographier les ressources existantes.
                    </strong>{' '}
                    Avant d’ajouter quoi que ce soit, il s’agit de recenser ce
                    qui existe déjà : professionnels déjà intervenus, contacts de
                    remplacement, compétences disponibles en interne. Cette
                    cartographie, une fois faite, se met à jour bien plus
                    facilement qu’elle ne se crée.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      2. Formaliser les informations essentielles.
                    </strong>{' '}
                    Les consignes qu’un professionnel doit connaître avant de
                    prendre un poste en urgence peuvent être préparées à
                    l’avance, une fois pour toutes, plutôt que réexpliquées
                    oralement à chaque remplacement.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      3. Clarifier les rôles en situation d’urgence.
                    </strong>{' '}
                    Qui décide de la solution retenue lorsqu’une absence survient
                    ? Qui contacte qui ? Sans réponse claire à ces questions, la
                    décision retombe systématiquement sur la même personne, ce
                    qui devient un point de fragilité en soi.
                  </p>
                  <p>
                    <strong className="font-semibold text-navy-900">
                      4. Capitaliser sur chaque expérience.
                    </strong>{' '}
                    Un retour d’expérience, même bref, après chaque absence gérée,
                    transforme un événement isolé en connaissance réutilisable
                    pour l’établissement entier.
                  </p>
                  <p>
                    Cette progression n’exige pas de tout changer d’un coup.
                    Chaque étape, prise isolément, produit déjà une amélioration
                    mesurable.
                  </p>
                </Section>

                <Section title="Le jour où ça arrive : une aide à la décision">
                  <p>
                    Même avec une bonne préparation en amont, le moment où
                    l’absence survient reste un moment de tension. Se poser
                    quelques questions dans un ordre précis aide à objectiver la
                    décision plutôt que de la prendre dans la précipitation : le
                    service peut-il fonctionner temporairement sans remplacement
                    immédiat ? Existe-t-il une solution interne avant de chercher
                    à l’extérieur ? Une personne connaît-elle déjà ce service et
                    ces résidents ? Les informations de transmission sont-elles
                    prêtes à être communiquées rapidement ?
                  </p>
                  <p>
                    Répondre à ces questions dans l’ordre, plutôt que dans
                    l’urgence et le désordre, change concrètement la qualité de
                    la décision prise, et le temps qu’elle prend à être prise.
                  </p>
                </Section>

                <Section title="Par où commencer">
                  <p>
                    Il n’est pas nécessaire de refondre toute l’organisation d’un
                    établissement pour progresser sur ce sujet. La première étape
                    utile consiste à évaluer objectivement où en est votre
                    organisation aujourd’hui sur ces quatre dimensions :
                    visibilité des ressources, transmission des informations,
                    organisation de l’urgence, capitalisation et pilotage.
                  </p>
                  <p>
                    C’est exactement ce que permet{' '}
                    <a
                      href={CAMPAGNE1_URL}
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      notre auto-diagnostic gratuit en 15 questions
                    </a>
                    , qui prend trois minutes et donne un score par dimension
                    ainsi que des priorités concrètes selon votre situation.
                  </p>
                  <p>
                    Pour aller plus loin,{' '}
                    <a
                      href={CAMPAGNE1_URL}
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      notre guide complet <em>Absence imprévue : comment
                      préserver la continuité de service sans repartir de zéro à
                      chaque fois</em>
                    </a>{' '}
                    détaille cette méthode en quatre étapes, les réflexes à
                    installer progressivement, et un outil d’aide à la décision
                    utilisable dès la prochaine absence.
                  </p>
                </Section>
              </div>

              {/* Bandeau CTA */}
              <div className="mt-10 flex flex-col items-start gap-4 rounded-xl bg-gradient-to-br from-violet-50 via-cream/40 to-orange-100 p-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-[16px] font-medium text-navy-900">
                  Évaluez votre organisation en 3 minutes, gratuitement.
                </p>
                <a
                  href={CAMPAGNE1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-sm bg-violet-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-xl hover:shadow-violet-500/30"
                >
                  Faire le diagnostic
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* FAQ */}
              <section aria-labelledby="faq-titre" className="mt-16">
                <h2
                  id="faq-titre"
                  className="mb-6 text-[26px] font-extrabold text-navy-900 lg:text-[30px]"
                >
                  Questions fréquentes
                </h2>
                <FaqAccordion items={FAQ} />
              </section>

              {/* Retour Ressources */}
              <div className="mt-14">
                <Link
                  href="/"
                  className="inline-flex min-h-[44px] items-center text-[14px] font-semibold text-violet-500 transition-colors hover:text-violet-400"
                >
                  ← Retour à l’accueil
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 flex flex-col gap-5">
      <h2 className="text-[22px] font-extrabold leading-[1.2] text-navy-900 [text-wrap:balance] lg:text-[26px]">
        {title}
      </h2>
      {children}
    </div>
  )
}
