import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import foto from './foto.jpeg'
import img1 from './img1.png'
import img2 from './img2.png'
import email from './email.jpeg'
import casa from './casa.jpeg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto}
          nome="Rômulo Vaz" 
          descricao="Oi, eu sou o Rômulo, estudo Desenvolvimento Web Full Stack e gosto de codar
          pelas manhãs, ouvindo musica; esse é o meu mantra pra não me estressar com os códigos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      
      <div>
        <CardPequeno
        imgCard= {email}
        tituloEmail= "Email: "
        email= " euromulovaz@gmail.com"
        />
  
        <CardPequeno
        imgCard= {casa}
        tituloEndereco= "Endereço: "
        endereco= " Ananindeua, Pará - 67120-485."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {img1} 
          nome="Aprendiz de Manutenção Mecânica Industrial." 
          descricao="Apoio e realização de manutenções preventivas em caminhões." 
        />
        
        <CardGrande 
          imagem= {img2} 
          nome="Operador de Equipamentos Industriais." 
          descricao="Inspeção, operação e limpeza em equipamentos estaticos e 
          moveis na área da Usina de Beneficiamento de Bauxita." 
        />
      </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;