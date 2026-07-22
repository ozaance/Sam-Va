import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Un package-lock.json sans rapport traîne dans le dossier personnel de la
   * machine de dev. Depuis Next 15.5, la détection automatique de racine le
   * choisissait comme workspace root et traçait les fichiers serveur depuis
   * là. On fixe la racine sur le projet.
   */
  outputFileTracingRoot: projectRoot,
}

export default nextConfig
