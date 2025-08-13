// Importing necessary dependencies
import React, { useState } from 'react';
import './App.css'; // Custom styles
import Searchinput from './components/Searchinput.jsx';
import ImageList from './components/ImagesList.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageCard from './components/Card.jsx';
import ImageDetail from './components/ImageDetail';

// Functional App component
const App = () => {
  // Declaring 'images' state using useState hook
  const [images, setImages] = useState([]);

  // Function to handle search and fetch images from Pixabay API
  const onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=3061424-2d8e74a0fcb44ce299788cdd6&q=${entry}&image_type=photo&pretty=true`
    );

    // Update state with the API response
    setImages(response.data.hits);
  };

  // Return the rendered JSX
  return (
    // Enable routing
    <BrowserRouter>

      {/* Always show the navbar */}
      <Navbar />

      {/* Define app routes */}
      <Routes>

        {/* About page route */}
        <Route path='/about' element={<About />} />

        {/* Home page route */}
        <Route path='/home' element={<Home />} />

        {/* Root route with search and image list */}
        <Route
          path='/'
          element={
            <div className=''>
              {/* Pass search function to Searchinput */}
              <Searchinput onSearchSubmit={onSearchSubmit} />

              {/* Pass images array to ImageList */}

              <div className='columns-2 md:columns-4 gap-4 mt-10 p-1 lg:p-10 space-y-4
              '>
                {images.map((image, index) =>
                  <ImageCard key={image.id} imagesdata={image} />
                )}
              </div>


              {/*  */}

              {/* Display how many images were fetched */}

            </div>
            
          }
        />
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export functional App component
export default App;
