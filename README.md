# React Profile  Application

**Demo Link:** [View Demo](https://prince-kumar-assignment.netlify.app/)

## Overview

This React.js application creates a profile UI with various components to showcase user information and posts. Here's an overview of the key components:

### App Component (App.js):

- The root component responsible for rendering the entire application.
- Imports and utilizes the Profile component.

### Profile Component (Profile.jsx):

- The main profile UI component displaying user information.
- Sub-components include Posts, utilizing data from the Data file.
- Utilizes Material-UI icons for various features.

### Posts Component (Posts.jsx):

- Represents individual posts in the profile.
- Displays post header, content, tags, author name, date, times read, and views.
- Utilizes Material-UI IconButton for the like button.

### Data File (Data.js):

- Contains sample data for user profile details and an array of posts.

## Libraries and Plugins Used

- **React.js:** A JavaScript library for building user interfaces.
- **@mui/icons-material:** Material-UI's icon library for adding icons to the application.
- **Tailwind CSS:** A utility-first CSS framework used for styling the components.

## File Structure

- **App.js:** Root component rendering the main application structure.
- **Profile.jsx:** Main profile component with user details and posts.
- **Posts.jsx:** Component for rendering individual posts.
- **Data.js:** Sample data file containing user details and an array of posts.
- **Profile.css:** Styles specific to the Profile component.
- **App.css:** Global styles for the entire application.

## Component Breakdown

### App Component (App.js):

- Sets up the overall structure of the application.
- Imports the Profile component.

### Profile Component (Profile.jsx):

#### Header Section:

- Displays a cover image and user details.
- Includes a section for user statistics (followers, following, designation, link).

#### Statistics Section:

- Displays user statistics with icons (Stars, Thumbs Up, Eye, Heart) and their respective counts.

#### Posts Section:

- Displays the number of posts and a list of posts using the Posts component.

### Posts Component (Posts.jsx):

- Displays an individual post with header, content, like button, tags, author details, date, times read, and views.

### Data File (Data.js):

- Contains sample user and post data used in the application.

## Styling

- **Tailwind CSS:** Used for styling with utility-first classes.
- **Inline Styles:** Some components use inline styles for dynamic styling.

## Running the Application

1. Install dependencies using `npm install`.
2. Run the application with `npm start`.

