import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@src/pages/NotFound'
import { Home } from '@src/pages/Home'
import { Settings } from '@src/pages/Settings'

export const Router: FC = () => (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)
