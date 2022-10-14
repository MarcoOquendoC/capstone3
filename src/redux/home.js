import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ran = (max) => {
  // Generate a random number from 1 to max
  const randomNumber = Math.floor(Math.random() * max) + 1;
  return randomNumber;
};

const URL = `https://picsum.photos/v2/list?page=${ran(100)}&limit=9`;
const baseUrl = 'https://picsum.photos/id/';
const size = '/200/300/';

const fetchImagesInfo = createAsyncThunk(
  'image/fetchingImageInfo',
  async () => {
    const response = await fetch(URL);
    const images = await response.json();

    const imagesInfo = images.map(({
      id, author, width, height, url,
    }) => ({
      id,
      author,
      width,
      height,
      url,
      picsumUrl: `${baseUrl}${id}${size}`,
      blurUrl: `${baseUrl}${id}${size}?blur`,
      grayUrl: `${baseUrl}${id}${size}?grayscale`,
      grayBlurUrl: `${baseUrl}${id}${size}?grayscale&blur`,
    }));
    return imagesInfo;
  },
);

const initialState = [];
export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: { },
  extraReducers: {
    [fetchImagesInfo.fulfilled]: (state, action) => action.payload,
  },
});

export { fetchImagesInfo };
export default imageSlice.reducer;
