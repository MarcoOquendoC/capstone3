import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ran = (max) => {
  // Generate a random number from 1 to max
  const randomNumber = Math.floor(Math.random() * max) + 1;
  return randomNumber;
};

const URL = `https://picsum.photos/v2/list?page=${ran(10)}&limit=100`;
const baseUrl = 'https://picsum.photos/id/';
const size = '/200/300/';

const fetchImagesInfo = createAsyncThunk(
  'image/fetchingImageInfo',
  async () => {
    const response = await fetch(URL);
    const images = await response.json();
    const imagesInfo = images.map(({
      // eslint-disable-next-line camelcase
      id, author, width, height, url, download_url,
    }) => ({
      id: parseInt(id, 10),
      author,
      width,
      height,
      url,
      // eslint-disable-next-line camelcase
      downloadUrl: download_url,
      picsumUrl: `${baseUrl}${id}${size}`,
      nosizeUrl: `${baseUrl}${id}`,
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
