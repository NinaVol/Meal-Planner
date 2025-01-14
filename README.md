# Meal Planner Application

This is a React-based **Meal Planner** application that allows users to plan their meals, organize ingredients, and manage meal plans efficiently.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features
- **Add Meals**: Create new meal plans with placeholder content.
- **Delete Meals**: Remove a meal from the list.
- **Edit Meals and Ingredients**: Update meal details and their respective ingredients.
- **Local Storage**: Meal plans are saved locally and persist after refreshing the page.

---

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Hooks**: Utilized `useState` and `useEffect` for managing state and side effects.
- **uuid**: Generates unique IDs for each meal plan.
- **CSS**: Used for styling the application.

---

## Getting Started
To run the project on your local machine, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/meal-planner.git](https://github.com/NinaVol/Meal-Planner.git
   cd meal-planner
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage
1. **Add a Meal**: Use the `Add Meal` button to create a new meal plan.
2. **Edit Meals**: Click on a meal and update the title or ingredients.
3. **Delete Meals**: Remove a meal by clicking the delete icon.
4. **Persistent Storage**: All changes are saved in your browser's `localStorage`.

---

## Components
### `App.js`
- The main component managing the state and logic for the meal plans.
- Key Functions:
  - `addMeal`: Adds a new meal with placeholder text and a unique ID.
  - `deleteDay`: Deletes a selected meal.
  - `updatedDay`: Updates the title or ingredients of a meal.
  - `getActiveMeal`: Retrieves the currently selected meal.

### `MyList`
- Displays the list of meals.
- Allows selecting, deleting, and adding meals.

### `MyMealsAndIngredients`
- Allows editing the ingredients and details of the selected meal.

---

## Future Improvements
- **Add Validation**: Ensure meal titles and ingredients cannot be empty.
- **Filter/Search**: Add functionality to filter or search meal plans.
- **Drag and Drop**: Reorder meals using a drag-and-drop interface.
- **Responsive Design**: Improve usability on mobile devices.

---

## License
This project is licensed under the MIT License.

---

### Author
- **Nina Volegova**
- [GitHub Profile](https://github.com/NinaVol)

Feel free to contribute or report any issues!
