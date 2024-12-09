/*REACT*/
import React from 'react';
import { Link } from "react-router";

export default function Main() {
  return (
      <>
        <div>
          <Link to="/sport">Спортивный фестиваль в горах</Link>
        </div>

        <div>
          <Link to="/music">фестиваль электронной музыки</Link>
        </div>
      </>
  )
}