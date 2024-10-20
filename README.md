![ian-hadinoto-high-resolution-logo-transparent](https://github.com/user-attachments/assets/8dc345d8-82d2-4cc0-8ea8-4bd3a350d565)

Electron React App
==================

This project is a desktop application template built with [Electron](https://www.electronjs.org/), [React](https://reactjs.org/), and [Chakra UI](https://chakra-ui.com/), utilizing a [Horizon UI](https://horizon-ui.com/) + TypeScript template. It provides a foundation for creating cross-platform desktop applications with a modern React front-end and Electron back-end integration, including inter-process communication (IPC) for advanced file system operations.

Features
--------

-   **Electron for Desktop**: Allows building cross-platform applications (Windows, macOS, Linux).
-   **React for Frontend**: Develop with a popular JavaScript library to create interactive UIs.
-   **Chakra UI + Horizon UI Template**: Build visually appealing UIs with the Chakra UI framework and the Horizon UI template for React Admin dashboards, featuring TypeScript support.
-   **File System Operations**: Use IPC to read directories and handle file operations from the renderer process.
-   **Hot Reloading**: Integrated hot-reloading for Electron and React, speeding up the development process.
-   **Modular Structure**: Clear separation between Electron's main process and React's renderer process.

Prerequisites
-------------

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

Getting Started
---------------

### Clone the Repository

```
git clone https://github.com/IHadinoto/electron-react-app.git
cd electron-react-app
```

### Install Dependencies

```
npm install
```

### Run the Application

To start the Electron app with React:

```
npm start
```

This command will build the React app and start Electron in development mode.

### Build for Production

To package the app for production, use:

```
npm run make
```

This will create a distributable version of the app in the `dist` folder, ready for deployment.

Project Structure
-----------------

-   `src/main`: Contains the Electron main process code (including IPC).
-   `src/renderer`: Contains the React frontend code.
-   `src/components`: UI components built with Chakra UI and Horizon UI templates.
-   `out`: The output directory for production builds.

Technologies Used
-----------------

-   **Electron**: Framework for creating native applications with web technologies.
-   **React**: A JavaScript library for building user interfaces.
-   **Chakra UI**: A simple, modular, and accessible component library for building React applications.
-   **IPC (Inter-Process Communication)**: Enables communication between the Electron main and renderer processes.
-   **Webpack**: Module bundler to build and optimize the application.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.
