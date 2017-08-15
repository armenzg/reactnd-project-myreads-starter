import React, { Component } from 'react';

/* Sample data from the BooksAPI
  allowAnonLogging    true
  authors:["William E. Shotts, Jr."]
  averageRating:4
  canonicalVolumeLink:"https://market.android.com/details?id=book-nggnmAEACAAJ"
  categories:["COMPUTERS"]
  contentVersion:"1.2.2.0.preview.2"
  description:"Long text"
  id:"nggnmAEACAAJ"
  imageLinks:{
    smallThumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  }
  industryIdentifiers:
    0:{type: "ISBN_13", identifier: "9781593273897"}
    1:{type: "ISBN_10", identifier: "1593273894"}
  length:2
  infoLink:"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
  language:"en"
  maturityRating:"NOT_MATURE"
  pageCount:480
  panelizationSummary:{containsEpubBubbles: false, containsImageBubbles: false}
  previewLink:"http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
  printType:"BOOK"
  publishedDate:"2012"
  publisher:"No Starch Press"
  ratingsCount:2
  readingModes:{text: true, image: false}
  shelf:"currentlyReading"
  subtitle:"A Complete Introduction"
  title:"The Linux Command Line"
*/
function Book(props) {
  var book = props.book
  debugger;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.map((author, index) =>
          <span key={index}>{author}</span>
        )}</div>
      </div>
    </li>
  )
}

export default Book
