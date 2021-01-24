import React, { useState, useRef, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import slugify from "slugify";

function Search(props) {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const inputValue = useRef();
  const [SearchResult, setSearchResult] = useState([]);


  useEffect(async () => {
    const response = await axios.get("http://localhost:3000/articles");

    if (q) {
      inputValue.current.value = q;
      const searchItem = response.data
        .filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
        .map((item) => (
          <li key={item.id} className="list-group-item">
            <Link
              to={`/detail/${item.id}/${slugify(item.title, { lower: true })}`}
            >
              {item.title}
              
            </Link>
          </li>
        ));
      setSearchResult(searchItem);
      
    } 
  }, [q]);

  const handleForm = (e) => {
    e.preventDefault();
    history.push(`/arama/?q=${inputValue.current.value}`);
    
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="search">Urun Arama</label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            ref={inputValue}
            placeholder="aramaya başlayın..."
          ></input>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-2">
            Ara
          </button>
        </div>
        <ul className="list-group">
          <p>{`${SearchResult.length} adet makale bulundu.`}</p>
          {SearchResult}
        </ul>
      </form>
    </>
  );
}

export default Search;
