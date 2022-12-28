import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

type Book = { bookId: string; title: string }

const booksAdapter = createEntityAdapter<Book>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (book) => book.bookId,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

// AVAILABLE FUNCTIONS - https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      booksAdapter.setAll(state, action.payload.books)
    },
  },
})

// // Action creators are generated for each case reducer function
export const { bookAdded, booksReceived } = booksSlice.actions;

export default booksSlice.reducer;