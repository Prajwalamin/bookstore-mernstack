import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/createBooks'
import ShowBook from './pages/showBook'
import EditBooks from './pages/editBooks'
import DeleteBooks from './pages/DeleteBooks'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditBooks/>} />
      <Route path='/books/delete/:id' element={<DeleteBooks/>} />
    </Routes>
  )
}

export default App