import { setList } from '../reducer';

export const get_list = () => {
  return async (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setList(data));
    } catch (error) {
      console.error("Error fetching list:", error);
    }
  };
};