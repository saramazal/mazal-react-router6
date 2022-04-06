import { Outlet } from 'react-router-dom';

import CustomLink  from './CustomLink'

 
 export default function Layout() {
  return (
      <>
   <header>
        <CustomLink to='/' >Home</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
        <CustomLink to='/skills' >Skills</CustomLink>
        <CustomLink to='/posts' >Blog</CustomLink>
        <CustomLink to='/contacts' >Contacts</CustomLink>
    </header>
             <main className="container">
               <Outlet />

             </main>
          

             <footer>Sara Mazal &copy; 2022</footer>
      </>
  )
}

