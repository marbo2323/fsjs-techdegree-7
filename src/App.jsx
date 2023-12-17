import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from "../config";
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from './components/PhotoList';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cats");
  const [loading, setLoading] = useState(true);

  const fetchData = (isActiveFetch) => {
    if (!query) {
      return;
    }
    setLoading(true);
    let searchUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
    searchUrl += `&api_key=${apiKey}`;
    searchUrl += "&per_page=24";
    searchUrl += "&format=json";
    searchUrl += "&nojsoncallback=1";
    searchUrl += "&privacy_filter=1";
    searchUrl += `&text=${query}`;

    axios
    .get(searchUrl)
    .then((response) => {
      // handle success
      if (isActiveFetch) {
        setPhotos(response.data.photos.photo);
        setLoading(false);
      }
    })
    .catch((error) => {
      // handle error
      console.log("Error fetching and parsing data.", error);
    });
  }

  useEffect(() => {
    let activeFetch = true;
    fetchData(activeFetch);
    
    return () => {
      activeFetch = false;
    };
  }, [query]);

  return (
    <>
      <div className="container">
        <Search setSearchText={ setQuery } />
        <Nav />
        <Routes>
          <Route index element={<Navigate replace to="cats" />} />
          <Route path="cats" element={<PhotoList  loading={loading} photos={ photos}/>} />
          <Route path="dogs" element={<PhotoList  loading={loading} photos={ photos}/>} />
          <Route path="computers" element={<PhotoList loading={loading} photos={ photos}/>} />
          <Route path="search/:query" element={<PhotoList loading={loading} photos={photos} />} />
          <Route path="*" element={<p>Page Not Found</p>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
