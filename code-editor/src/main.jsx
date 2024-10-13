import React from 'react'
import ReactDom  from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App></App>
  </ChakraProvider>
    
  </React.StrictMode>,
)
