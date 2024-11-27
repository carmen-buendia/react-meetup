# Documentation of Changes in `package.json`

## Summary

Updates and modifications have been made to the `package.json` file to include new dependencies and configurations in the `react-meetup` project. The primary update includes the addition of `react-router-dom` for navigation.

## Detailed Changes

### Dependencies

1. **`react-router-dom` added**:

   - **Version**: `^5.3.4`
   - **Description**: This library is essential for managing routes and navigation in a React application. It has been added to enable dynamic routing functionality within the app.
   - **Usage**: Enables navigation between different pages of the application without reloading the entire page.

   ```json
   "react-router-dom": "^5.3.4"
   ```

# Documentation of Meetup Data Changes

The descriptions of the second and third meetups were updated to correct the incorrect reference to "first". The description of the first meetup remained unchanged.

# Changes in `App.js`

1. **Added `react-router-dom` for navigation**: Routing has been implemented using `BrowserRouter`, `Route`, and `Switch` to manage navigation between the app's pages.
2. **Use of Context Providers**: `FavoritesProvider` and `MeetupsProvider` contexts were added to manage the global state of favorites and meetups in the application.
3. **Removal of `useState` and `getCurrentPageComponent`**: The page-changing logic using state (`useState`) was replaced by React Router's routing, eliminating the need for state to control the current page.
4. **Routing instead of conditional rendering**: Pages like `AllMeetupsPage`, `NewMeetupsPage`, and `FavoritesPage` are now managed through routes, instead of being controlled by a conditional switch in state.

# Changes in `MainNavigation` - Navigation Component Update

## Summary

The `MainNavigation` component was refactored to improve code organization and reusability. Navigation links are now managed via an array of objects (`navLinks`), which makes it easier to modify routes and update navigation items in one place.

# Components and Functionality

## Changes in `MeetupItem.js`

1. **Use of `useFetch` Hook**: The custom `useFetch` hook was implemented to fetch data from a JSON file (`/data.json`). This replaces the need for static data and allows dynamic loading of meetup information.
2. **Loading Handling**: A validation was added to show a "Loading..." message while data is being fetched from the source.
3. **Data Rendering**: Once the data is loaded, the first `item` from the data is used to render the `image`, `title`, `address`, and `description` properties.
4. **Component Structure**: Meetups are rendered inside a `Card` component, and a button to add the meetup to favorites is displayed.

5. **Use of `navLinks`**:

   - Navigation links such as "All Meetups", "Add New Meetup", and "My Favorites" are now defined in an array `navLinks`, improving flexibility and code reusability.
   - This allows for centralized adding, removing, or modifying of links without directly modifying the JSX of the component.

6. **Use of `Link` from `react-router-dom`**:

   - The use of `<a href="#">` has been replaced with the `Link` component from `react-router-dom` for better navigation handling in a Single Page Application (SPA).
   - This ensures that routes do not reload the entire page and keeps navigation functionality without reloading.

7. **Use of Favorites Context**:

   - The `useFavorites` hook is used to get the current number of favorites and display the number of favorites in the corresponding link. This ensures that the favorite count is dynamically updated and displayed correctly in the component.

8. **Conditional Badge Handling**:
   - In the "My Favorites" link, a badge is displayed showing the number of favorites only if the user is on the "Favorites" page.

## Changes in `NewMeetupForm.js`

1. **Use of `useState` to manage form state**: Local states for each form field (title, image, address, and description) were added using the `useState` hook.
2. **Change Handlers Implementation**: Functions such as `titleChangeHandler`, `imageChangeHandler`, `addressChangeHandler`, and `descriptionChangeHandler` were created to update the values of each form field in their respective states.

3. **Use of `useMeetups` Context**: The `MeetupsContext` was integrated to access the `addMeetup` function, which is used to add a new meetup to the global state.

4. **Submit Handler**: The form now handles submission through the `submitHandler` function. Upon submission, a meetup object is created with the field values and added to the context using `addMeetup`. The page then redirects to `/meetups`, and the form fields are reset to empty values.

5. **Controlled Form**: The form fields are now controlled, as their values are managed by the component's local state (using `value` and `onChange` for each field).

## Creation of `FavoritesContext` and `MeetupsContext`

### **1. `FavoritesContext.js`**

**Purpose**: The `FavoritesContext` is responsible for managing the favorites of meetups, as well as all meetup data loaded from a JSON file.

- **Context**: A context named `FavoritesContext` is created with `createContext`, used to share the favorite and meetup data across the application.
- **State**:
  - `favorites`: A state that stores the meetups marked as favorites.
  - `meetups`: A state that stores all available meetups, loaded from the `data.json` file.
- **Loading Data**:

  - `useEffect` is used to load meetup data from the `data.json` file when the component mounts. The data is stored in the `meetups` state.

- **Functions**:
  - `addFavorite`: Adds a meetup to the favorites list.
  - `removeFavorite`: Removes a meetup from the favorites list based on the meetup `id`.
- **Provider**:
  - `FavoritesProvider` is a component that wraps children and provides the context to the child components using `FavoritesContext.Provider`.
- **Custom Hook**:
  - `useFavorites`: A hook that allows access to the favorites context in any component. An error is thrown if the context is not available.

## Changes in `AllMeetupsPage.js`

### **Purpose**:

In this file, the `AllMeetupsPage` component was updated to use the `FavoritesContext` and display available meetups. Instead of rendering multiple static `MeetupItem` components, meetups are now fetched from the context and displayed dynamically.

### **Change Details**:

**Imports**:

- The `useFavorites` hook is imported from `FavoritesContext` to access the meetups stored in the favorites context.
- The `MeetupItem` component is imported to display each individual meetup.
- The import of CSS styles for the meetup list component is maintained.

## Summary of Changes

- **Dependency Update**: `react-router-dom` was added for navigation, improving route management without page reloads.
- **Use of Context API**: `FavoritesContext` and `MeetupsContext` were implemented to manage the global state of meetups and favorites.
- **Navigation Optimization**: `MainNavigation` was refactored to use an array of objects (`navLinks`), making route management and updates easier.
- **Improved Styling**: The styling for the favorites page was updated to enhance the presentation of items in the favorites list.
