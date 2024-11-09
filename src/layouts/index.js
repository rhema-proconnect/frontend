import React from 'react'
import { Outlet } from 'react-router-dom'


export default function DashbordLayout() {
  return (
    <div>
        <main style={{ minHeight:"100%"}}>
          <Outlet/>
        </main>
    </div>
  )
}
