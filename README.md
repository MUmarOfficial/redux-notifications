
# 🚀 Redux Notifications

A beginner-friendly project demonstrating a simple, clean notification system built with **React**, **Redux Toolkit**, and **TypeScript**.

## 📋 Overview

This application showcases a practical example of managing global state in a React application using Redux. It provides a simple UI where users can trigger different types of notifications (like success, error, and info), which are then centrally managed by a Redux store and displayed by a dedicated `Notifications` component.

This project is an excellent starting point for anyone looking to understand the core concepts of Redux Toolkit, including:

* **Slices**: Creating reducers and actions in one file.
* **Dispatch**: Sending actions from components to the store.
* **Selectors**: Reading and subscribing to state from components.

### ✨ Features

* **Centralized State**: All notification data is held in a single Redux store.
* **Component-Agnostic**: Dispatch notifications from any component in the app.
* **Multiple Notification Types**: Easily create and display 'success', 'error', or 'info' notifications.
* **Auto-Dismiss**: Notifications can be set to disappear automatically after a delay.
* **Built with Modern Tools**: TypeScript, Vite, and Redux Toolkit.

---

## Demo

Check out the live demo:
**[https://mumarofficial.github.io/redux-notifications/](https://mumarofficial.github.io/redux-notifications/)**

---

## 🛠️ Tech Stack

* **[Vite](https://vitejs.dev/)**: A blazing-fast frontend build tool.
* **[React](https://react.dev/)**: The library for web and native user interfaces.
* **[TypeScript](https://www.typescriptlang.org/)**: JavaScript with syntax for types.
* **[Redux Toolkit](https://redux-toolkit.js.org/)**: The official, opinionated, batteries-included toolset for efficient Redux development.
* **[CSS Modules](https://github.com/css-modules/css-modules)**: For locally-scoped CSS.

---

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/MUmarOfficial/redux-notifications.git](https://github.com/MUmarOfficial/redux-notifications.git)
   cd redux-notifications
   ```
2. **Install dependencies:**
   (Using `npm` or your package manager of choice)

   ```bash
   npm install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

---

## 📁 Project Structure

Here is a high-level overview of the `src` directory:

```
src/
├── app/
│   └── store.ts          # Main Redux store configuration
├── components/
│   ├── Notifications/    # The component that renders the list of notifications
│   └── ...               # Other UI components (e.g., buttons to trigger notifications)
├── features/
│   └── notifications/
│       └── notificationSlice.ts  # Redux slice (actions + reducer) for notifications
├── App.tsx             # Main application component
└── main.tsx            # Entry point of the application
```

### How It Works

1. **Component**: A user action (like a button click) dispatches an action from the `notificationSlice` (e.g., `addNotification`).
2. **Action**: The action carries a payload, such as `{ message: 'Profile updated!', type: 'success' }`.
3. **Reducer**: The `notificationSlice` receives the action, creates a new notification object (often with a unique ID), and adds it to the `notifications` array in the Redux state.
4. **Selector**: The `<Notifications />` component, which is subscribed to the store, sees the state update and re-renders to display the new notification.

---

## 📜 Available Scripts

In the project directory, you can run:

* `npm run dev`: Runs the app in development mode.
* `npm run build`: Builds the app for production.
* `npm run lint`: Lints the code using ESLint.
* `npm run preview`: Serves the production build locally.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving this project, please feel free to:

1. **Fork** the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a **Pull Request**.

Please make sure your code adheres to the existing code style.

---

## 📄 License

This project is open-source and available under the **MIT License**.
