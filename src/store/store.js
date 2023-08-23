import { configureStore } from '@reduxjs/toolkit'
import noticiasSlice from './noticias/noticiasSlice'

export default configureStore({
  reducer: {
    noticias: noticiasSlice
  }
})