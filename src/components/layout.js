import * as React from "react"
import { Link } from "gatsby"
import Dose from '../images/dose.png'
import AwesomeButton from "react-awesome-button"
import "react-awesome-button/dist/styles.css";


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <img
     src={Dose} 
      >
      </img>
      <main>{children}</main>
      <button
       style={{
        '--color-1': 'deepskyblue',
        '--color-2': 'yellow',
        

        background: `
          linear-gradient(
            170deg,
            var(--color-1),
            var(--color-2) 80%
          )
        `,
    
        // Unrelated styles:
        color: 'white',
        textAlign: 'center',
        padding: 30,
        borderRadius: 12,
      }}
      
    >
      Good Vibes
      </button>
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout
