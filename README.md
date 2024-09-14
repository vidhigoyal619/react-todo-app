# To-Do App with React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is a simple and interactive To-Do application built using React and Vite. It demonstrates the basic concepts of React such as state management (useState) and component-based structure. The app enables users to add tasks to a list and display them dynamically.

## Key Features
1. Add Tasks: Users can add new tasks to the to-do list.
2. Display Tasks: All added tasks are displayed in a list.
3. Fast Development: Thanks to Vite, the app benefits from fast development times and HMR (Hot Module Replacement).

## Technologies Used
1.  Vite: For fast development, bundling, and HMR. Vite helps in creating a super-fast dev environment.
2.  React: For building the user interface, managing component states, and efficiently rendering the to-do list.

## Concepts Used
1.  React useState: For managing the state of the to-do list and input values.
2.  Props: Passing data between parent (App) and child components (TodoInput and TodoList).
3.  Component Structure: The app is divided into three main components:


         a. App: The parent component managing the state.
         b. TodoInput: A component for adding new tasks.
         c. TodoList: A component for displaying the list of tasks.

## Installation
To get started, clone the repository and install the dependencies:
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
```
## Running the Project
To run the project locally, use the following command:
```bash
npm run dev
```






