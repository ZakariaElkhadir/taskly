<p align="center">
    <a href="https://frontendmasters.com" target="_blank" rel="noopener noreferrer">
        <img src="https://btholt.github.io/intro-to-web-dev-v2/static/f72cae0c73fecbb6beecea606d8fabd3/5a190/FrontendMastersLogo.png" alt="Frontend Masters logo" width="480" />
    </a>
</p>
# Taskly

A React Native learning project built with Expo and TypeScript, following the Frontend Masters course by Kadi Kraman.
<p align="center">
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="React logo" width="120" />
    </a>
</p>
## About This Project

This is a practice project where I'm practicing React Native  by building a task management application. The course covers modern React Native development using Expo Router for navigation and TypeScript for type safety.

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform and tooling
- **Expo Router** - File-based routing system
- **TypeScript** - Type-safe JavaScript
- **React 19** - Latest React features
- **ESLint & Prettier** - Code quality and formatting

## Project Structure

```
app/                    # App screens and routing
  _layout.tsx          # Root layout
  index.tsx            # Home screen
  idea.tsx             # Ideas screen
  counter/             # Counter feature
    _layout.tsx
    history.tsx
    index.tsx
components/            # Reusable components
  CloseCircleIcon.tsx
  ShoppingListItem.tsx
assets/                # Images, fonts, and other assets
```

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo Go app (for mobile testing)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App

```bash
# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

## Learning Resources

- **Course**: [Frontend Masters - React Native Course](https://frontendmasters.com) by Kadi Kraman
- **Instructor**: [Kadi Kraman](https://github.com/kadikraman)

## Features Implemented

- ✅ File-based routing with Expo Router
- ✅ Counter functionality with history
- ✅ Shopping list with custom components
- ✅ Custom icons and theming
- ✅ TypeScript integration

## Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run in web browser
- `npm run lint` - Lint code with ESLint

## Development

This project uses:
- **ESLint** with Expo config for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

## License

This is a learning project for educational purposes.
