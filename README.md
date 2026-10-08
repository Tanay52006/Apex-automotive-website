# APEX — Interactive Automotive Experience

This version preserves the original v0 visual direction and adds a complete client-side navigation/demo experience.

## Routes
- `/` Home
- `/cars` Collection
- `/cars/[id]` Vehicle detail
- `/cars/[id]/360` Interactive 360-style viewer
- `/cars/[id]/interior` Interior experience
- `/configure/[id]` Configurator
- `/compare` Compare
- `/wishlist` Wishlist
- `/cart` Cart
- `/checkout` Demo checkout
- `/orders` Orders
- `/account` Account
- `/account/profile` Profile
- `/account/settings` Settings
- `/configurations` Saved configurations
- `/test-drive` Test drive
- `/locations` Locations
- `/offers` Offers
- `/search` Search
- `/experience` Experience
- `/technology` Technology

## Run
```bash
npm install
npm run dev
```

The wishlist/cart demo state uses localStorage so the interactions survive page refreshes in the same browser.
