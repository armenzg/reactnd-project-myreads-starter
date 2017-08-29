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
        this.setState((state) => ({
          foundBooks: books.map(b => {
            const bookInShelf = state.books.filter(book => book.id === b.id)
            if (bookInShelf.length === 1) {
              b.shelf = bookInShelf[0].shelf
            }
            return b
          })
        }))
      ).catch(error =>
        this.setState({foundBooks: []})
      )
    } else {
      this.setState({foundBooks: []})
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((ret) => {
      this.setState((state) => ({
        books: Object.keys(state.books).map((keyName, index) => {
          const b = state.books[keyName]
          if (b.id === book.id) {
            b.shelf = shelf
          }
          return b
        })
      }))
    }).catch(error =>
      console.log(error)
    )
  }

  addToLibrary = (book, shelf) => {
    let foundBook = this.state.books.find((element) => (element.id === book.id))
    if (!foundBook) {
      book.shelf = shelf
      BooksAPI.update(book, shelf).then((ret) => {
        this.setState(state => ({
          books: state.books.concat(book)
        }))
      })
    } else {
      this.moveBook(book, shelf)
    }
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
            onAddToLibrary={this.addToLibrary}
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
