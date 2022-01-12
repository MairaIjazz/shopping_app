import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PageLink = () => {
  return (
    <div className="link_container">
      <ul className="link_list">
        <Link to="/wintercollection">
          <li className="link_item">Winter Collection</li>
        </Link>
        <Link to="/festivecollection">
          <li className="link_item">Festive Collection</li>
        </Link>
        <Link to="/lawncollection">
          <li className="link_item">Lawn Collection</li>
        </Link>
      </ul>
    </div>
  );
};

export default PageLink;
