// Aviso que ven los comensales mientras la carta pública está fuera de línea.
// /admin sigue funcionando. Para volver a publicar la carta, en main.tsx cargar CartaView en lugar de este.
export default function CartaCerradaView() {
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-zinc-950 text-zinc-50 px-4 text-center">
      <div className="max-w-sm">
        <h1 className="text-2xl font-semibold">Carta no disponible</h1>
        <p className="mt-3 text-zinc-400">Esta carta digital ya no está activa.</p>
      </div>
    </div>
  )
}
