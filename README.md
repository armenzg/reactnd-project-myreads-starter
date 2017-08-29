This project is a fork of [Udacity's react fundamentals: reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter).

## Description

This app allows you to maintain a book library.
You can search for new books (this reaches a Udacity server with a small collection of books)
and add them to one of your shelves ('Currently reading', 'Want to read' and 'Read').

You can also move books between your shelves.

## Requirements

* [Node.js](https://nodejs.org)

## Run

In order to run this project checkout this repository and run the following steps:

* npm install
* npm start (This will open the project on your browser)

## Backend note
Udacity's backend API uses a fixed set of cached search results and is limited to
a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).
That list of terms are the _only_ terms that will work with the backend, so don't be
surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
