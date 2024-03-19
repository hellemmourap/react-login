import React, { useState} from 'react';
import './App.css';
import { ReactComponent as Toolzz } from './svg/caminho257.svg';
import { ReactComponent as Logo } from './svg/caminho-logo.svg';
import { ReactComponent as Tz } from './svg/tz.svg';
import { ReactComponent as Fb } from './svg/fb.svg';
import { ReactComponent as Apple } from './svg/apple.svg';
import { ReactComponent as Tt } from './svg/tt.svg';
import { ReactComponent as Line } from './svg/line.svg';
import { ReactComponent as Captcha } from './svg/captcha.svg';
import { ReactComponent as Enter } from './svg/enter.svg';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.text();
        setMessage(`Erro ao fazer login: ${errorData}`);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setMessage('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="logo" id='logo'>  
          <div className="icon">
            <Logo/>
          </div>               
          <div className="svg-aligner">
            <Toolzz/>
          </div>              
        </div>
        <div className='create-account'> 
          <button className="button">Criar Conta</button>
        </div>
      </div>
      <div className='text-info'>
        <div className="welcome-message">
          <h2>Boas-vindas!</h2>
        </div>
        <div className="options">
          <h5>Entre utilizando uma das opções abaixo</h5>
        </div>
      </div>
      <div className='social-buttons'>
        <button className="icon-button">
          <Tz />
        </button>
        <button className="icon-button">
          <Fb />
        </button>
        <button className="icon-button">
          <Apple />
        </button>
        <button className="icon-button">
          <Tt />
        </button>
      </div>
      <div className='lines'>
        <div className='line'> 
          <Line /> {' '} 
        </div>
        <div className="or">OU</div>
        <div className='line'> 
          <Line /> 
        </div>
      </div>
      <div className='inputs'>
        <div className="input-container">
          <label htmlFor="username">Usuário</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
        < label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="keep-connected">
        <input type="checkbox" id="keep-connected" />
        <label htmlFor="keep-connected">Manter conectado</label>
      </div>
      <div className='capctcha'>
        <div className="captcha-icon">
          <Captcha/>
        </div>               
      </div>
      <button className="login-button"onClick={handleLogin}> 
        <Enter />Entrar
      </button>
      <div className="login-message">{message}</div>
      <div className="forgot-password">
        <div className="forgot-text">Esqueceu sua senha?</div>
        <div className="recover">Recuperar senha</div>
      </div>
    </div>
  );
}

export default Login;

