import { useState } from "react";
import Card from "../Components/Card";
import "../Styles/Mylist.css";

function MyList() {

  const [myList, setMyList] = useState(() => {

    const savedMovies = localStorage.getItem("myList");

    return savedMovies ? JSON.parse(savedMovies) : [];

  });

  const removeFromMyList = (movie) => {
    const updatedList = myList.filter((item) => item.id !== movie.id);
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  return (
    <div className="my-list">

      <h1>❤️ My List</h1>


        <div className="movie-container">
          {myList.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onAdd={removeFromMyList}
              buttonText="Remove"
              buttonClass="remove-button"
            />
          ))}
        </div>
      

    </div>
  );
}

export default MyList;