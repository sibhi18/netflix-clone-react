import Card from "../Components/Card";
import "../Styles/Row.css";
import { useRef } from "react";


function Row({ title, movies, onAdd }) {

    const rowRef = useRef(null);

    const leftScroll = () => {
           rowRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }

    const rightScroll = () => {
           rowRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }

    return(

        <section className="row">
            <h2>{title}</h2>

            <div className="row-buttons">
                <button type="button" className="row-button" onClick={leftScroll}>{"<"}</button>
                <button type="button" className="row-button" onClick={rightScroll}>{">"}</button>
            </div>
            <div ref={rowRef} className="row-cards">
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} onAdd={onAdd} />
                ))}
            </div>
        </section>
    )
}

export default Row;