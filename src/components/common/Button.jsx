/*REACT*/
import React from 'react';
import { Link } from "react-router";

export default function Button({ text, url, color }) {
    return (
      <Link to={ url } className={`button button-${color}`} target='_blank'>{ text }</Link>
    );
}