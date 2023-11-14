import Link from "next/link"
import Header from "./Header"

export default function Layout({children}){
  return (
    <>
      <Header>
      <main>{children}</main>
      </Header>
      
    </>
  )
}