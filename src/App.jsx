// Importing necessary dependencies
import React, { useState } from 'react';
import './App.css'; // Custom styles
import Searchinput from './components/Searchinput.jsx';
import ImageCard from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ImageDetail from './components/ImageDetail';
import axios from 'axios';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Functional App component
const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=3061424-2d8e74a0fcb44ce299788cdd6&q=${entry}&image_type=photo&pretty=true`
    );
    setImages(response.data.hits);
  };

  return (
    <Router>
      {/* Always show the navbar */}
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/"
          element={
            <div>
              <Searchinput onSearchSubmit={onSearchSubmit} />
              <div className="columns-2 md:columns-4 gap-4 mt-10 p-1 lg:p-10 space-y-4">
                {images.map((image) => (
                  <ImageCard key={image.id} imagesdata={image} />
                ))}
              </div>
            </div>
          }
        />

        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
