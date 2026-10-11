import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById('root')!)

// /admin es el editor de DLX; todo lo demás es la carta pública. Se cargan por separado
// para que los clientes no descarguen el editor.
// La carta pública está fuera de línea: se muestra un aviso. Para reactivarla, cargar CartaView aquí.
if (/^\/admin\/?$/.test(window.location.pathname)) {
  import('./AdminView.tsx').then(({ default: AdminView }) => {
    root.render(<StrictMode><AdminView /></StrictMode>)
  })
} else {
  import('./CartaCerradaView.tsx').then(({ default: CartaCerradaView }) => {
    root.render(<StrictMode><CartaCerradaView /></StrictMode>)
  })
}
