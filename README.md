# Car Rental Web Application

Welcome to the Car Rental Web Application! This web application allows users to browse and search for cars available for rent. It provides a user-friendly interface to explore a variety of cars and find the one that suits their needs.

## Table of Contents

- [Folder Structure](#folder-structure)
- [JSON Data](#json-data)
- [Components](#components)
- [Material Tailwind CSS](#material-tailwind-css)

## Folder Structure

The project is organized with the following folder structure:

- `Components/`: Contains sub-folders for different types of components used in the application.
  - `Layout/`: Includes the `Card.jsx` component, which represents a card displaying car details.
  - `Global/`: Contains the `Navbar.jsx` component, which serves as the global navigation bar.
  - `Home/`: Contains the `Home.jsx` component, which is the main page of the application.

- `JSON/`: Contains the `cars.json` file, which holds details about 60 cars, including their names, images, capacities, fuel types, drive modes, release years, and rental prices.

## JSON Data

The `cars.json` file contains an array of car objects. Each car object has the following properties:

- `id`: A unique identifier for the car.
- `carName`: The name of the car.
- `imageUrl`: URL of the car's image.
- `capacity`: The seating capacity of the car.
- `fuelType`: The type of fuel the car uses.
- `driveMode`: The drive mode of the car (e.g., Automatic).
- `releaseYear`: The year the car was released.
- `carRent`: The rental price of the car per month.

## Components

### Card Component (Card.jsx)

The `Card.jsx` component is used to display detailed information about a car. It includes the car's image, name, capacity, fuel type, drive mode, release year, and rental price.

### Navbar Component (Navbar.jsx)

The `Navbar.jsx` component represents the global navigation bar of the application. It includes a search input field and dropdowns for filtering car listings.

### Home Component (Home.jsx)

The `Home.jsx` component is the main page of the application. It displays a list of cars, paginated for user convenience. Users can navigate between pages, search for cars, and view car details.

## Material Tailwind CSS

The project utilizes the Material Tailwind CSS framework to style components and create a visually appealing user interface. Material Tailwind CSS provides pre-built components and utility classes to streamline the design process.

To apply styles to components, classes like `rounded-md`, `shadow-2xl`, `bg-[#f4f4fd]`, and more have been used throughout the application to achieve consistent and responsive designs.

For further information on Material Tailwind CSS and its available classes, please refer to the official documentation: [Material Tailwind CSS Documentation](https://material-tailwind.com/docs/introduction)

Feel free to explore the codebase and customize the application as needed to meet your requirements. Enjoy using the Car Rental Web Application!
