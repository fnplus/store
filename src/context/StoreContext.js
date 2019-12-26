import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'fnplus-store.myshopify.com',
  storefrontAccessToken: '0cb5611e357df3ccbf6ad22e9e4c2cf0'
})

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateQuantity: () => {},
  toggleCart: () => {}
}

export default React.createContext(defaultStoreContext)
