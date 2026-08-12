import React from "react";
import movies from "../data/Movies";
import Card from "../Components/Card";
import {useState} from "react";
import "../Styles/Navbar.css";


function Search(){
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className="search-container">
            <h1>Search Movies</h1>

            <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-results">
                
                   {(filteredMovies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))
                )}
            </div>
        </div>
       
    )
}

export default Search;