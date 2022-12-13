import React, { useState } from 'react';
import '../CSS/Search.css';

const SearchFlights = (props) => {


  return (
    <div className="search-engine">
    <form onSubmit={(event)=>  props.handleSubmit(event).then((event)=>  props.getSearchResults(event))}>
      <label>
        Origin:
        <input
          type="text"
          value={props.origin}
          onChange={event => props.setOrigin(event.target.value)}
        />
      </label>
      <label>
        Destination:
        <input
          type="text"
          value={props.destination}
          onChange={event => props.setDestination(event.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="text"
          value={props.date}
          onChange={event => props.setDate(event.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
    </div>
  );
}

export default SearchFlights