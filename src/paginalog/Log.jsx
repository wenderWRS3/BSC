import './Log.css';

export default function Log() {
  return (
    <div id="log">
      <div id="cinquenta">
        <p id="textoLog">
          crie sua conta e aproveite as vantagens de comprar com a gente!
        </p>
        <h2>Login</h2>
        <p>Cadastre-se e aproveite ofertas exclusivas, rastreie seus pedidos e muito mais</p>
      </div>


       <div id="circuloLogDois">    
          <form id="formLog">
            <input type="text" placeholder="Nome de usuário" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>  
         </div>
    </div>
  )
}