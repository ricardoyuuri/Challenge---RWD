import Link from "next/link"
import "./Header.css"



export default function Layout({children}){
  return (
    <>
      <nav>
        <div className = "bike_logo"><Link className = "Navbar" href ="/Home">BikeCheck</Link></div>
        <ul>
          <li><Link className = "Navbar" href ="/Home">Home</Link></li>
          <li><Link className = "Navbar" href ="/Contato">Contato</Link></li>
          <li><Link className = "Navbar" href ="/Sobre">Sobre a Empresa</Link></li>
          <li><Link className = "Navbar" href ="/SobreNos">Sobre Nós</Link></li>  
          <li><Link className = "Navbar" href ="/Vistoria">Vistoria</Link></li>
          <li><Link className = "Navbar" href ="/Organograma">Organograma</Link></li>
          <li ><Link className = "Navbar Login" href ="/Login">Login</Link></li>
        </ul>
      </nav>
    </>
  )
}