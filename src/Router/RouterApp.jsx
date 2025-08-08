import { FooterApp, NavBarApp } from '../Shared'
import { Route, Routes } from 'react-router-dom'
import { PagesRouterApp } from '../Components/Router/PagesRouterApp'

export const RouterApp = () => {
  return (
    <>
        <NavBarApp />
        <Routes>
            <Route path='/*' element={<PagesRouterApp />} />
        </Routes>
        <FooterApp />
    </>
  )
}
