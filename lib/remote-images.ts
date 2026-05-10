/** Stable Unsplash paths (hostname allowlisted in next.config.mjs). */

export const UNSPLASH = {
  studio:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=70",
  storefront:
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=70",
  product:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=70",
  analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=70",
  commerceDark:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=70",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=70",
  packing:
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=70",
  device:
    "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=70",
  team:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=70",
  shoppingBags:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=70",
} as const

/** Backgrounds for service cards (order matches the services grid listing). */
export const SERVICE_CARD_IMAGES = [
  `${UNSPLASH.storefront}&w=800`,
  `${UNSPLASH.commerceDark}&w=800`,
  `${UNSPLASH.analytics}&w=800`,
  `${UNSPLASH.device}&w=800`,
  `${UNSPLASH.product}&w=800`,
  `${UNSPLASH.packing}&w=800`,
] as const
