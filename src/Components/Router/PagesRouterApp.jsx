import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EstadisticasApp, EstadisticasPartidosApp, HomeApp, TablaGeneralApp } from '../Pages'
import { PartidoEnVivoApp } from '../Pages/PartidoEnVivoApp'

export const PagesRouterApp = () => {
  return (
    <>
    <Routes>
        <Route path='home' element={<HomeApp />} />
        <Route path='/tabla' element={<TablaGeneralApp />} />
        <Route path='/estadisticas' element={<EstadisticasApp />} />
        <Route path='/estadisticas-partido' element={<EstadisticasPartidosApp />} />
        <Route path='/en-vivo' element={<PartidoEnVivoApp />} />

        <Route path='/*' element={<HomeApp/>} />
    </Routes>
    </>
  )
}
