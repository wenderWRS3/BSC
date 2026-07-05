import './Log.css';

export default function Log() {
  return (
    <div id="log">
      <div id="cinquenta">
        <div id="log_Stayle">
          <p className='text_log' >crie sua conta.</p>
          <h2 id="texto_Log">Bem-vindo(a)!</h2>
          <h1 id="MARCA">
            <strong id='BSC'> B</strong>om 
             <strong id='BSC'> S</strong>imples  
            é 
             <strong id='BSC'> C</strong>onfortavel</h1>
          
          <p id="Plog_sty">Cadastre-se e aproveite ofertas exclusivas, rastreie seus pedidos e muito mais</p>
        </div>
      </div>


      <div id="circuloLogDois">
        <div id="Ckblog">
          <h2 id='texlog'><strong id='cLog'>C</strong>riar Conta</h2 >
          <p id="Plog">Preencha os campos abaixo para criar sua conta</p>
          <form action="" id="formlog">
            <fiedset id="fiedsetlog">
              {/*Log nome*/}
              <div className="nomeSobrenome">
                <div className="boxStyle">
                  <label htmlFor="nome" className="form-nome">Nome</label>

                  <input type="text" name="nome" id="nome" placeholder="Digite seu nome"
                    required className="form-nome" id="form-nome" />

                </div>
                <div className="boxStyle">
                  <label htmlFor="sobrenome" className="form-nome">Sobrenome</label>

                  <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite seu sobrenome"
                    required className="form-nome" id="form-sobrenome" />

                </div>
              </div>
              {/*Log G-mail*/}
              <div className="nomeSobrenome">
                <div id="emailbox">
                  <label htmlFor="email" className="form-nome">E-mail</label>

                  <input type="email" name="email" id="email" placeholder="Digite seu e-mail"
                    required className="form-nome" className="form-elem_cheiro" />

                </div>

              </div>
              {/*Data e Telefone*/}
              <div className="nomeSobrenome">
                <div className="boxStyle">
                  <label htmlFor="data" className="form-nome">Data de Nascimento</label>
                  <input type="date" name="data" id="data" required className="form-nome" id="form-data" />
                </div>
                <div className="boxStyle">
                  <label htmlFor="telefone" className="form-nome">Telefone</label>

                  <input type="tel" name="telefone" placeholder="Digite seu telefone"
                    required className="form-nome" id="form-tel" />

                </div>
              </div>
              <br />
              <hr id='linhalog' />
              {/*Log Senha*/}
              <div className="nomeSobrenome">
                <div className="boxStyle">
                  <label htmlFor="senha" className="form-nome">Senha</label>
                  <input type="password" name="senha" id="senha" placeholder="Digite sua senha"
                    required className="form-nome" className="form-elem_cheiro" />

                  <label htmlFor="confirmarSenha" className="form-nome">Confirmar Senha</label>
                  <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="Confirme sua senha"
                    required className="form-nome" className="form-elem_cheiro" />
                </div>
              </div>
              {/*Botão de criar conta*/}
              <div className="nomeSobrenome">
                <div className="boxStyle">
                  <button type="submit" className="form-elem_cheiro" id="bLog">Criar Conta</button>
                </div>
              </div>
              {/*Links de login e recuperação de senha*/}
              <div >
                <div id="divLog">
                  <p id='TelLog'>Já tem conta? <a href="/login">Faça login</a></p>
                </div>
                <div id="divLog">
                  <p id='TelLog'>Esqueceu sua senha? <a href="/login">Recupere aqui</a></p>
                </div>
                <p id='Plog_ter_uso'>Ao criar uma conta, você concorda <a href="/termos" className="ter_uso">com os termos de uso </a>
                  e a <a href="/politica-de-privacidade" className="ter_uso"><br />política de privacidade</a>.</p>
              </div>
            </fiedset>



          </form>
        </div>
      </div>
    </div>
  )
}