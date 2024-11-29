import React, { ReactNode } from 'react'
import Navnbar from '../../components/Navnbar'

function layout({children}:Readonly<{children:React.ReactNode}>) {
  return (

    <main className='font-work-sans'>
            <Navnbar/>
        {children}</main>
  )
}

export default layout