import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./Contato.css"

export default function Contato(){
  return (
    <>
      <Layout></Layout>
      <div className="box_contato">
        <div>
          <h1 className="h1_contato">Entre em contato</h1>
          <p className="p_contato">Fale com a gente em qualquer horário, sempre que precisar</p>
        </div>
        <div>
        <img src="logo5.png" alt="Descrição da imagem" className="img_contato" />
        </div>
      </div>
      <div className="box_button">
        <div className="box_block">
          <h2 className="h2_contato">Whatsapp</h2>
          <button className="button_contato">11 30003 9303</button>
        </div>
        <div>
          <h2 className="h2_contato">E-mail</h2>
          <button className="button_contato">porto@porto.com.br</button>
        </div>
        <div>
          <h2 className="h2_contato">Ouvidoria</h2>
          <button className="button_contato">0800-401-325</button>
        </div>
        <div>
          <h2 className="h2_contato">Encontre um corretor</h2>
          <button className="button_contato">0800-401-325</button>
        </div>
      </div>      
      <Footer></Footer>
    </>
    
  )
}