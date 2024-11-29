  import Link from 'next/link'
  import React from 'react'
  import Image from 'next/image'
  import {auth,signIn,signOut} from '@/auth'


  const Navnbar =  async() => {
      const session = await auth();
    return (
      <>
      <header className='px-5 py-3  bg-white shadow-sm front-work-sans'> 
      <nav className='flex justify-between item-center'>
          <Link href="/">
          <Image  src="/logo.png" alt='logo' width={144} height={30} />
          </Link>
          <div className='flex items-center gap-4 text-black'> 
            {session && session?.user ? (
                   <>
                                  <Link href="/startup/create">
              
                                     <span>Create</span>
                                 </Link>
                                 <form action={async () =>{
                'use server'
                await signOut();
              }}>
                  <button type='submit' >
                  <span>Sign Out</span>
              </button>
              </form>
                                   <Link href={`/user/${session?.id}`}>
                                       <span>{session?.user?.name}</span>
                                   </Link>
                    </>
            ):(
              <form action={async () =>{
                'use server'
                await signIn();
              }}>
                  <button type='submit' >
                  <span>Login</span>
              </button>
              </form>
          
          
              )}

  </div>
        
      </nav>
    
      </header>
      </>
    )
  }

  export default Navnbar