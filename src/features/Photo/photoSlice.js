import {createSlice} from '@reduxjs/toolkit'

const initialValues = [
    {
        id: 91176,
        categoryId: 5,
        photo: 'https://picsum.photos/id/131/300/300',
        title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
      },
      {
        id: 82605,
        categoryId: 1,
        photo: 'https://picsum.photos/id/140/300/300',
        title: 'Ad officia magna veniam sunt.'
      },
      {
        id: 74760,
        categoryId: 3,
        photo: 'https://picsum.photos/id/112/300/300',
        title: 'Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.'
      },
      {
        id: 39588,
        categoryId: 5,
        photo: 'https://picsum.photos/id/52/300/300',
        title: 'Deserunt in tempor est id consectetur cupidatat.'
      },
      {
        id: 72133,
        categoryId: 4,
        photo: 'https://picsum.photos/id/184/300/300',
        title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
      },
      {
        id: 95333,
        categoryId: 1,
        photo: 'https://picsum.photos/id/155/300/300',
        title: 'Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.'
      },
]
const photos = createSlice({
    name: 'photos',
    initialState:initialValues,
    reducers:{
        addPhoto:(state, action) =>{
            const newPhoto = action.payload;
            state.push(newPhoto)
        },
        removePhoto:(state, action) =>{
          const removePhoto = action.payload;
          return state.filter(photo => photo.id !== removePhoto);
        },
        updatePhoto:(state, action) =>{
          const editPhoto = action.payload;
          console.log(editPhoto)
          return state.map(photo => photo.id === editPhoto.id ? {...editPhoto}:photo);
        }
    }
})

const {reducer, actions} = photos
export const {addPhoto,removePhoto,updatePhoto} = actions
export default reducer