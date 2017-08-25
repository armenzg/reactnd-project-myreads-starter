import React from 'react'

import { Book } from './Book'

export function SearchBook(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search"
          onClick={props.onHideSearch}>Close</a>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So,
            don't worry if you don't find a specific author or title. Every search is limited
            by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.foundBooks ? (
            props.foundBooks.map((book, index) => (
              <Book
                book={book}
                key={index}
              />
            ))) : (<span></span>)
          }
        </ol>
      </div>
    </div>
  )
}
