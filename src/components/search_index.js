import React from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination
} from 'react-instantsearch/dom';

import SearchResult from './search_result';

const SearchIndex = () => {
  return (
    <div>
      <InstantSearch
        apiKey="c83d19e3b0b3a318f6ca7c8fabb6971b"
        appId="2CMWP5K29W"
        indexName="cats"
      >
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">Search</h1>
            <SearchBox translations={{placeholder: 'Search for cats...'}}/>
          </div>
        </div>

        <div className="container">
          <Hits hitComponent={SearchResult}/>
          <Pagination showLast />
        </div>
      </InstantSearch>
    </div>
  );
}

export default SearchIndex;
