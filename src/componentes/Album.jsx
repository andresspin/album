import React, { useState } from "react";
import "./album.css";

const Album = (props) => {
  const textStyles = { fontWeight: "bolder", fontSize: "100px" };

  return (
    <div className="card">
      <div className="photo">
        <img
          className="img"
          src={require(`${props.src}`)}
          alt="Grupo Musical imagen"
        ></img>
        <div className="band">
          <h1 className="title" style={textStyles}>
            {props.nameAlbum}
          </h1>
        </div>
      </div>
      <div className="info">
        <ul className="data">
          <li> 🎸Artista: {props.artist}</li>
          <li> 🎤Cantante y compositor {props.composer}</li>
          <li> 🗓️Año:{props.year}</li>
          <li> 🕳️Genero:{props.gender}</li>
          <div className="boton">
            <button className="css-button-sliding-to-bottom--black ">
              Te gusta?
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Album;
