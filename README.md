<div align="center">

# 📱 Taskly

### A Modern React Native Task Management App

Built with Expo, TypeScript, and React 19 following Frontend Masters best practices

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<img src="https://btholt.github.io/intro-to-web-dev-v2/static/f72cae0c73fecbb6beecea606d8fabd3/5a190/FrontendMastersLogo.png" alt="Frontend Masters" width="300" />

</div>

---

## 🎯 About

A hands-on practice project for mastering React Native development through building a practical task management application. This project follows the [Frontend Masters React Native course](https://frontendmasters.com) by **Kadi Kraman**, implementing modern mobile development patterns with Expo Router and TypeScript.

## ✨ Features

- 📋 **Task Management** - Create and organize your daily tasks
- 🔢 **Counter with History** - Track counts with historical data
- 🛒 **Shopping List** - Manage shopping items with custom UI
- 🎨 **Custom Theming** - Personalized icons and visual design
- 🧭 **File-based Routing** - Intuitive navigation with Expo Router
- 🔒 **Type Safety** - Full TypeScript integration

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile framework |
| **Expo** | Development platform and build tools |
| **Expo Router** | File-based navigation system |
| **TypeScript** | Static type checking |
| **React 19** | Latest React features and optimizations |
| **ESLint & Prettier** | Code quality and consistent formatting |

## 📁 Project Structure

```
taskly/
├── app/                      # Application screens and routing
│   ├── _layout.tsx          # Root layout configuration
│   ├── index.tsx            # Home screen
│   ├── idea.tsx             # Ideas screen
│   └── counter/             # Counter feature module
│       ├── _layout.tsx
│       ├── history.tsx
│       └── index.tsx
├── components/               # Reusable UI components
│   ├── CloseCircleIcon.tsx
│   └── ShoppingListItem.tsx
└── assets/                   # Static resources (images, fonts)
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm or yarn package manager
- [Expo Go](https://expo.dev/client) app on your mobile device

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZakariaElkhadir/taskly.git
   cd taskly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Running on Different Platforms

```bash
# iOS Simulator (macOS only)
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Launch on Android device/emulator |
| `npm run ios` | Launch on iOS simulator (macOS only) |
| `npm run web` | Run in web browser |
| `npm run lint` | Run ESLint code analysis |

## 📚 Learning Resources

- **Course**: [React Native V3](https://frontendmasters.com) - Frontend Masters
- **Instructor**: [Kadi Kraman](https://github.com/kadikraman)
- **Documentation**: 
  - [Expo Docs](https://docs.expo.dev/)
  - [React Native Docs](https://reactnative.dev/docs/getting-started)
  - [Expo Router Docs](https://docs.expo.dev/router/introduction/)

## 🔧 Development Tools

- **Code Linting**: ESLint with Expo configuration
- **Code Formatting**: Prettier for consistent style
- **Type Checking**: TypeScript strict mode
- **Hot Reload**: Fast Refresh for instant updates

## 📄 License

This project is created for educational purposes as part of the Frontend Masters React Native course.

---

<div align="center">

**Happy Coding!** 🚀

Made with ❤️ while practicing React Native

</div>