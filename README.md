# Tuesday - not Monday

## Prerquisites
- Pnpm (https://pnpm.io/installation)

## Installation
1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`
4. Open `http://localhost:5173` in your browser

## Design
The app is designed with a component-based approach in mind.
- `Dashboard` is the main component, containing the two primary sections of the app: `Header` and `Widgets`.
- `DashboardHeader` is a container component that manages the state mode (`view`/`edit`).
- The state and the callback function to update the mode are passed down to the child components.
- `WidgetsContainer` is responsible for displaying the widgets, maintaining the widgets' layout state, and syncing it with localStorage.

## Libraries Used
- `react-grid-layout` for the grid layout of the widgets, providing built-in drag-and-drop and responsive layout functionality.
- `use-local-storage` for seamless integration with localStorage state.
- `figtree` font for a "Monday-like" typography style.
- Various Vite plugins for React, real-time type checking, and simplified import paths.  


