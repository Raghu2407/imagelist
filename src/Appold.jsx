// Importing core React library
import React from 'react';

// Importing app-specific styling
import './App.css';

// Importing components used in the app
import Searchinput from './components/Searchinput.jsx';
import ImageList from './components/ImagesList.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

// Axios is used to make HTTP requests (to fetch image data from API)
import axios from 'axios';

// Importing React Router v6 components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Creating main App component using a class-based approach
class App extends React.Component {

  // Constructor to initialize component state and bind methods
  constructor(props) {
    super(props);

    // Initial state: images is an empty array
    this.state = { images: [] };

    // Binding the 'onSearchSubmit' method to this instance
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  // Method to handle search input and make API call to Pixabay
  async onSearchSubmit(entry) {
    // Make GET request to Pixabay API with search query
    const response = await axios.get(
      `https://pixabay.com/api/?key=3061424-2d8e74a0fcb44ce299788cdd6&q=${entry}&image_type=photo&pretty=true`
    );

    // Update component state with the results from API
    this.setState({ images: response.data.hits });
  }

  // Render method returns JSX to be displayed
  render() {
    return (
      // Enables routing across the app
      <BrowserRouter>

        {/* Navbar component shown on every route */}
        <Navbar />

        {/* Defining all the routes for the app */}
        <Routes>

          {/* Route for About page */}
          <Route path='/about' element={<About />} />

          {/* Route for Home page */}
          <Route path='/home' element={<Home />} />

          {/* Root route (default): search input and image results */}
          <Route
            path='/'
            element={
              <div className='text-3xl font-bold'>

                {/* Pass the onSearchSubmit method as prop to Searchinput component */}
                <Searchinput onSearchSubmit={this.onSearchSubmit} />

                {/* Pass the images state as prop to ImageList component */}
                <ImageList images={this.state.images} />

                {/* Display how many images are currently fetched */}
                we have {this.state.images.length} images

              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

// Exporting App so it can be imported and used in index.js
export default App;