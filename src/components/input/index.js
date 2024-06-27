import React from 'react';
import { Container } from './styles';

export default function LoginInput({ onChange, onKeyPress, value }) {
  return (
    <Container>
      <input 
        type='text'
        placeholder=''
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <span className="custom-placeholder">Digite aqui</span>
    </Container>
  );
}
