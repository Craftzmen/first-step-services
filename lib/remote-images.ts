/** Stable Unsplash paths (hostname allowlisted in next.config.mjs). */

export const UNSPLASH = {
  workshop:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=70",
  /** Dealership / new car — photo above was removed from CDN (404). */
  carExterior:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=70",
  carSide:
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=70",
  mechanic:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=70",
  garageNight:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=70",
  dashboard:
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=70",
  sedan:
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80",
  suv:
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=70",
} as const

/** Backgrounds for service cards (order matches listing). */
export const SERVICE_CARD_IMAGES = [
  `${UNSPLASH.workshop}&w=800`,
  `${UNSPLASH.dashboard}&w=800`,
  `${UNSPLASH.carExterior}&w=800`,
  `${UNSPLASH.carSide}&w=800`,
  `${UNSPLASH.mechanic}&w=800`,
  `${UNSPLASH.garageNight}&w=800`,
] as const
