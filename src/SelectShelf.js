import React from 'react'

export function SelectShelf(props) {
  let shelf = props.shelf
  if (!shelf) {
    shelf = 'none'
  }
  return(
    <select onChange={props.onChange} value={shelf}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )
}
