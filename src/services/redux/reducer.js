import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: []
  },
  reducers: {
    get_list: state => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      try {
        const response = fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        state.value = response.json();
      } catch (error) {
        console.error(error.message);
      }
    }
  }
})

export const { get_list } = listSlice.actions

export default listSlice.reducer