import React from 'react';
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';
import './style.css'

import foto from './img/foto.jpeg'
import blue from './img/blue.jpeg'
import gray from './img/gray.jpeg'
import color from './img/color.jpeg'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'Yellow'}
            fotoUsuario= {foto}
            fotoPost={blue}
            //fotoSalvar=
            //fotoShare=
          />

          <Post2
            nomeUsuario={'Yellow'}
            fotoUsuario= {foto}
            fotoPost={gray}
          />

          <Post3
            nomeUsuario={'Yellow'}
            fotoUsuario= {foto}
            fotoPost={color}
          />
  </div>

  
)

}


export default App;
