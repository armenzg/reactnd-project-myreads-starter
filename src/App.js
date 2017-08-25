import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import * as BooksAPI from './BooksAPI'
import { SearchBook } from './Search'
import { ListBooks } from './ListBooks'


class BooksApp extends Component {
  state = {
    books: [],
    foundBooks: [],
    query: ''
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

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook
            value={this.state.query}
            onHideSearch={() =>
              history.push('/')}
            onChange={this.updateQuery}
            foundBooks={this.state.foundBooks}
          />
        )}/>
        <Route exact path='/' render={({ history })=>(
          <ListBooks
            books={this.state.books}
            onMoveBook={this.moveBook}
            onShowSearch={() => {
              history.push('/search')
              this.setState({
                foundBooks: '',
                query: ''
              })
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
