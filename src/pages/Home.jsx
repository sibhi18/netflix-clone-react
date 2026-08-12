import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import movies from "../data/Movies";
import Row from "../Components/Row";
import { useState } from "react";

function Home() {



  const [myList, setMyList] = useState(() => {

    const saved = localStorage.getItem("myList");

    return saved ? JSON.parse(saved) : [];

  });

  const addToMyList = (movie) => {

    const exists = myList.some(
      (item) => item.id === movie.id
    );

    if (exists) {
      return;
    }

    const updatedList = [...myList, movie];

    setMyList(updatedList);

    localStorage.setItem(
      "myList",
      JSON.stringify(updatedList)
    );
  };
  const SciFiMovies = movies.filter(movie => movie.category === "Sci-Fi");

  const ActionMovies = movies.filter(movie => movie.category === "Action");

  const AdventureMovies = movies.filter(movie => movie.category === "Adventure");

  const DramaMovies = movies.filter(movie => movie.category === "Drama");

  const ComedyMovies = movies.filter(movie => movie.category === "Comedy");

  const FantasyMovies = movies.filter(movie => movie.category === "Fantasy");

  const crimeMovies = movies.filter(movie => movie.category === "Crime");

  const ThrillerMovies = movies.filter(movie => movie.category === "Thriller");
  return (
    <>
      <Navbar />
      <Hero />

 <Row title="🚀 Sci-Fi" movies={SciFiMovies} onAdd={addToMyList} />

<Row title="😂 Comedy" movies={ComedyMovies} onAdd={addToMyList} />

<Row title="💥 Action" movies={ActionMovies} onAdd={addToMyList} />

<Row title="🔪 Thriller" movies={ActionMovies} onAdd={addToMyList} />

<Row title="🎭 Drama" movies={DramaMovies} onAdd={addToMyList} />

<Row title="🌎 Adventure" movies={AdventureMovies} onAdd={addToMyList} />

<Row title="🧙 Fantasy"  movies={FantasyMovies} onAdd={addToMyList} />

<Row title="🕵️ Crime" movies={crimeMovies} onAdd={addToMyList}/>

      {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px" , background: "black"}}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>  */}


    </>
  );
}

export default Home;
