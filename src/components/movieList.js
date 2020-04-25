import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function MovieList(props) {
  let filtred = props.movieList.filter((el) => el.rating >= props.rateSearch);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems:"center"
    }}>
      {filtred.map((el) => {
        return (
          <div
          style={{alignItems:"center"}}>
            
            <h2 onClick={() => {props.setmovieCard(el); props.setShowsec(true); }} >
              {el.name}
            </h2>
            <img  alt='' src={el.pic}  onClick={() => {
                props.setmovieCard(el);
                props.setShowsec(true);
              }} >

            </img>

            <StarRatingComponent
              name={el.name}
              value={el.rating}
              starCount={"5"}
              starColor={"#ffb400"}
              emptyStarColor={"#333"}
              editing={false}
            />
          </div>
        );
      })}
    </div>
  );
}
