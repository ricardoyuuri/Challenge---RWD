import Layout from "../components/Layout";
import "./Home.css"
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <Layout>
      
      </Layout>

      <main>


        <img className="img_Home" src="logo1.png" alt="Descrição da imagem" />
        <button className="text-over-image">Contrate</button>


        <section>
          <h2>Sobre o desafio: </h2>
          <p>
            A Porto há algum tempo vem tentando aderir em seu sistema o modelo de vistoria de bicicletas de forma totalmente online e sem a intervenção humana, a empresa já tentou realizar essa implementação anteriormente, porém não obteve o sucesso esperado. Em cima deste assunto já decorrido, a empresa decidiu repassar este caso para nós estudantes criarmos uma solução, da qual se espera sanar esse problema.
          </p>
        </section>
        <section>
          
          <div className="section2">
            <h2>Solução para o cliente:</h2>
            <p>
              Nosso cliente poderá solicitar a vistoria totalmente online informando o número do seguro, e enviando na hora fotos e vídeos da bike em todas as posições chave necessárias (Ex: frente, traseiro e lados), para facilitar a análise automatizada.
            </p>
          </div>
          

        </section>
        <section>
          <h2>Solução para a Porto</h2>
          <p>Essa forma de vistoria visa melhorar e acelerar o processo de vistoria da bike, validação de suas condições, e emissão da apólice de seguro para o cliente, reduzindo consideravelmente o tempo gasto para realizar este processo.</p>

        </section>
      </main>
      <Footer></Footer>
    </>


    
  )
}

