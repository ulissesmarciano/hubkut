import React from 'react';
import { Container } from './styles';

export default function LoginInput({ onChange, onKeyPress, value, error }) {
  return (
    <Container>
      <input 
        type='text'
        placeholder=''
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {!error && <span className="custom-placeholder">Digite aqui</span>}
    </Container>
  );
}
