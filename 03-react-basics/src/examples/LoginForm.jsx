/** @jsx jsx */
import { jsx, keyframes } from '@emotion/react';

import * as React from 'react';
import { Dialog as ReachDialog } from '@reach/dialog';
import { FaSpinner } from 'react-icons/fa';

import styled from '@emotion/styled/macro';

export const base = 'white';
export const text = '#434449';
export const gray = '#f1f2f7';
export const gray10 = '#f1f1f4';
export const gray20 = '#e4e5e9';
export const gray80 = '#6f7077';
export const indigo = '#3f51b5';
export const indigoDarken10 = '#364495';
export const indigoLighten80 = '#b7c1f8';
export const yellow = '#ffc107';
export const green = '#4caf50';
export const danger = '#ef5350';
export const orange = 'orange';

export const large = '@media (min-width: 1200px)';
export const medium = '@media (min-width: 992px) and (max-width: 1199px)';
export const small = '@media (max-width: 991px)';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

const buttonVariants = {
  primary: {
    background: indigo,
    color: base,
  },
  secondary: {
    background: gray,
    color: text,
  },
};
const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({ variant = 'primary' }) => buttonVariants[variant]
);

const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${gray10}`,
  background: gray,
  padding: '8px 12px',
});

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: base,
  color: text,
  border: `1px solid ${gray10}`,
  cursor: 'pointer',
});

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [small]: {
    width: '100%',
    margin: '10vh auto',
  },
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export { Button, Input, FormGroup, CircleButton, Dialog };

function LoginForm({ onSubmit, buttonText }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <Input id='username' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <Input id='username' />
      </FormGroup>
    </form>
  );
}

function App() {
  const [openModal, setOpenModal] = React.useState('none');

  function login(formData) {
    console.log('login', formData);
  }

  function register(formData) {
    console.log('register', formData);
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <div>LOGO</div>
      <h1>Bookshelf</h1>
      <div>
        <Button onClick={() => setOpenModal('login')}>Login</Button>
      </div>
      <div>
        <Button onClick={() => setOpenModal('register')}>Register</Button>
      </div>
      <Dialog aria-label='Login form' isOpen={openModal === 'login'}>
        <div>
          <Button onClick={() => setOpenModal('none')}>Close</Button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText='Login' />
      </Dialog>
      <Dialog aria-label='Registration form' isOpen={openModal === 'register'}>
        <div>
          <Button onClick={() => setOpenModal('none')}>Close</Button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText='Register' />
      </Dialog>
    </div>
  );
}

export { App as default };
