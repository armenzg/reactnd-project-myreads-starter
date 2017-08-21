import React from 'react'
import { Book } from './Book'

export function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books.filter(book =>
                  book.shelf === 'currentlyReading').map((book, index) =>
                  <Book
                    onChange={props.onMoveBook}
                    book={book}
                    key={index}
                    shelf='currentlyReading' />
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books.filter(book =>
                  book.shelf === 'wantToRead').map((book, index) =>
                  <Book
                    onChange={props.onMoveBook}
                    book={book}
                    key={index}
                    shelf='wantToRead' />
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books.filter(book =>
                  book.shelf === 'read').map((book, index) =>
                  <Book
                    onChange={props.onMoveBook}
                    book={book}
                    key={index}
                    shelf='read' />
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <a onClick={props.onShowSearch}>Add a book</a>
      </div>
    </div>
  )
}
