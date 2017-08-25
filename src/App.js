import React, { Component } from 'react'

import './App.css'
import * as BooksAPI from './BooksAPI'
import { SearchBook } from './Search'
import { ListBooks } from './ListBooks'


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    foundBooks: [],
    query: '',
    showSearchPage: false
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
    if (query) {
      BooksAPI.search(query, 20).then(books =>
        this.setState({foundBooks: books})
      ).catch(error =>
        this.setState({foundBooks: ''})
      )
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((ret) => {
      this.setState((state) => ({
        books: Object.keys(state.books).map((keyName, index) => {
          const b = state.books[keyName]
          if (b === book) {
            b.shelf = shelf
          }
          return b
        })
      }))
    })
  }

  hideSearch = () => {
    this.setState({
      showSearchPage: false,
      foundBooks: '',
      query: ''
    })
  }

  showSearch = () => {
    this.setState({ showSearchPage: true })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
            value={this.state.query}
            onHideSearch={this.hideSearch}
            onChange={this.updateQuery}
            foundBooks={this.state.foundBooks}
          />
        ) : (
          <ListBooks
            books={this.state.books}
            onMoveBook={this.moveBook}
            onShowSearch={this.showSearch}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
