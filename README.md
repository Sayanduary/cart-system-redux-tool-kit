# EcomApp (React + Redux Toolkit)

Short interview documentation for this frontend project.

## 1) Project Summary

EcomApp is a small e-commerce frontend built with React, React Router, and Redux Toolkit.

Main user flow:

- Browse products on Home page (fetched from DummyJSON API)
- Add or remove products from cart
- Change quantity in cart
- See live totals (subtotal, savings, tax, shipping)

## 2) Tech Stack

- React + Vite
- React Router
- Redux Toolkit + React Redux
- Axios
- Tailwind CSS

## 3) How Redux Works In This Project

State management is centralized in a Redux store with two slices:

- `counterStore` (learning/demo slice)
- `cartStore` (real business state)

Cart state shape:

- `cartCount`: array of cart items

Redux flow used here:

1. UI event triggers `dispatch(...)` (example: Add to Cart button)
2. Action goes to reducer in `cartSlice`
3. Reducer updates state (Immer allows simple mutable-style code)
4. Updated state is persisted to `localStorage`
5. Components re-render automatically through `useSelector`

Implemented cart actions:

- `addToCart`
- `deleteCart`
- `changeQty`

Persistence strategy:

- Initial state is hydrated from `localStorage` (`CART` key)
- Every cart update writes back to `localStorage`
- This keeps cart data after page refresh

## 4) Why I Chose Redux Toolkit

I chose Redux Toolkit because:

- Predictable global state: cart data is shared across Header, Home, and Cart without prop drilling.
- Cleaner architecture: business logic (add/remove/change qty) is in one place instead of duplicated in components.
- Easy debugging: actions and reducers make state transitions explicit.
- Scalable pattern: adding wishlist/auth/order slices later is straightforward.
- Better DX: Redux Toolkit reduces boilerplate compared to classic Redux.

In short: for an e-commerce app, cart is cross-page, frequently updated, and business-critical. Redux Toolkit is a reliable fit for that type of state.

## 5) What I Would Improve Next

- Prevent duplicate cart items by increasing quantity instead of adding another row.
- Move `localStorage` side effects from reducers to middleware/listeners (cleaner Redux pattern).
- Add loading/error states for product fetch.
- Add unit tests for reducers and integration tests for cart flows.

## 6) 30-Second Interview Pitch

"This is a React e-commerce frontend where I implemented a centralized cart with Redux Toolkit. I used slices to isolate state logic and React Redux hooks to connect UI with store updates. Cart state is persisted in localStorage, so data survives refresh. I chose Redux because cart data is shared across multiple pages and needs predictable updates, easy scaling, and maintainable business logic."
