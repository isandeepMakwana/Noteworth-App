# Noteworth App

## Overview

The Noteworth App is a streamlined solution for managing restaurant information. It supports various functionalities including the creation, viewing, editing, and deletion of restaurant records. Additionally, it allows users to rate restaurants and sort them based on these ratings

## Requirements

- User can create a restaurant with details such as name, food type, address, and rating.
- User can obtain a list of restaurants.
- User can view details of a specific restaurant.
- User can edit and delete a restaurant.
- User can submit a rating for a restaurant.
- User can sort the list of restaurants by highest rating.

## How to Run the Application

### Cloning the Project

Clone the project repository using the following command:

```bash
git clone <link>
```

### Setting Up Backend

#### Navigate to the cloned directory in your terminal.

#### Run initial migrations for the backend by executing the following command:

```bash
bin/restaurant update_database
```

#### Start the backend server by running:

```bash
bin/restaurant server
```

## Running the React App

#### Start the React app with the following command:

```bash
bin/restaurant client
```

## Performing Tests

#### To perform tests, open a terminal in the cloned directory and run:
```bash
bin/restaurant tests
```
## How to Use the Application

1. Visit `localhost:3000` on your web browser.
2. Initially, create some restaurants to see the application's functionality.

### Creating New Restaurants:
   - Click on the "Create" tab.
   - Fill in the information for the new restaurant.
   - Click "Submit" to create the new restaurant.

### Viewing All Restaurant Details:
   - Click on the "View" tab.

### Editing Restaurant Information:
   - In the "View" tab, click on the edit icon next to the restaurant you want to edit.
   - Modify the information as needed.
   - Click "Submit" to save the changes.

### Deleting a Restaurant:
   - In the "View" tab, click on the delete icon next to the restaurant you want to delete.

### Sorting Restaurants According to Rating:
   - Click on the "Rating" label in the "View" tab to sort the restaurants by rating.




> This README provides clear instructions on how to set up and use the Noteworth App, ensuring a smooth experience for developers and users alike.
