import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/Routes';
import TelaPadrao from './src/componentes/TelaPadrao/index'

export default function App() {
  return (
    <TelaPadrao>
      <Routes />
    </TelaPadrao>
  );
}
