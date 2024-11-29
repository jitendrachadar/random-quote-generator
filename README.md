# Random Quote Generator App

A simple and modern **Random Quote Generator** React app built using **Vite** and styled with **Tailwind CSS**. This app fetches random quotes from a public API and maintains a history of quotes viewed by the user. The quote history persists even after refreshing the page using the browser's `localStorage`.

## Features

- Fetch random quotes from an API with a single click.
- Displays the quote and its author in an aesthetically pleasing card layout.
- Maintains a **history of quotes** viewed by the user.
- **Persistent storage**: The quote history is saved in `localStorage` and is retained even after refreshing the page.
- Modern UI design with **Tailwind CSS**, including a glassmorphic effect for history cards.
- Responsive design for seamless usage on both desktop and mobile devices.

---

## Installation and Setup

Follow these steps to run this app on your local system:

### Prerequisites
- Node.js (v16 or later)
- npm or yarn package manager

### Steps to Install

```bash
# Clone the Repository
git clone https://github.com/your-username/random-quote-generator.git
cd random-quote-generator

# Install Dependencies
npm install
# or
yarn

# Run the Development Server
npm run dev
# or
yarn dev

# Open in Browser
# Open the URL provided by the development server (e.g., http://localhost:5173) to see the app in action.

```

## Usage
### Fetching Quotes:

- Click the quote button to fetch a new random quote from the API.
- The new quote will be displayed in the main card.

### Quote History:

- Below the current quote, you can see the quote history section.
- Each fetched quote is stored and displayed as a card in the history section.
- The history persists even after refreshing the page.
 
### Code Modifications:

- To customize the app (e.g., styling, API endpoint, or features), edit the source files in the src directory:
- src/App.jsx: Main application logic.
- src/Components/Quote.jsx: Component for displaying the current quote.
- src/Components/QuoteHistory.jsx: Component for displaying the history of quotes.

## Tech Stack
- React: Frontend library for building the UI.
- Vite: Fast and modern build tool for React projects.
- Tailwind CSS: Utility-first CSS framework for styling.
- LocalStorage: For persistent storage of quote history.

## API Details

The app fetches quotes from the following API:

- Endpoint: https://dummyjson.com/quotes/random
- The API provides random quotes along with the author's name.

## Deployment

This app can be deployed on platforms like GitHub Pages, Netlify, or Vercel. For GitHub Pages:

- Install the gh-pages package:

```bash
npm install gh-pages --save-dev
```

- Add the following scripts to your package.json:


```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Deploy the app:

```bash
npm run deploy
```

## Contributions
Feel free to fork this repository and submit pull requests for any improvements or new features. Contributions are always welcome!

