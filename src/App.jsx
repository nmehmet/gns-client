import React from 'react';
import TouchButton from './components/ui/TouchButton';
import useCart from './features/pos/hooks/useCart';

export default function App() {

  const {cart, addToCart, cartTotal} = useCart();

  return(
    <div className='flex flex-col h-screen bg-slate-900 text-slate100 select-none overflow-hidden'>
      {/* NAVBAR */}
      <header className = "h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6 shrink-0"> 
        <div className = "font-bold text-xl text-emerald-400">GNS POS</div>
        <div className = "flex gap-4">
          <TouchButton variant = "secondary" className = "min-h-40px px-4 py-1 text-lg">Ürün Yönetimi</TouchButton>
          <TouchButton variant = "secondary" className = "min-h-40px px-4 py-1 text-lg">Gün Sonu</TouchButton>
        </div>
      </header>

      {/* 2. Main area (takes all area except header nav bar ) */}
      <main className = "flex-1 flex overflow-hidden">

        {/* Left Panel cart and transaction section */}
        <section className = "w-1/3 flex flex-col border-r border-slate700 bg-slate-800/50">

          {/* Cart List (Scrollable) */}
          <div className = " flex-1 overflow-y-auto p-4 space-y-2">
            {/* If the cart is empty give some info to user */}
            {cart.length === 0 && (
              <div className = "text-slate-400 text-center mt-4">Sepet şu an boş...</div>
            )}

            {/* if cart is not empty return products that inside cart. */}
            {cart.map((item) => (
              <div key = {item.id} className = "p-4 bg-slate-800 rounded-lg border border-slate-700 flex justify-between items-center">
                <div>
                  <h3 className = "font-bold text-lg text-emerald-50">{item.name}</h3>
                  <p className = "text-slate-400 text-sm">{item.quantity} x {item.price.toFixed(2)} TL</p>
                </div>
                <div className = "font-bold text-xl text-emerald-400">
                  {(item.price * item.quantity).toFixed(2)} TL
                </div>
              </div>
            ))}
          </div>
          {/* Summary and payment part */}
          <div className = "p-4 bg-slate-800 border-t border-slate-700 space-y-3">
            <div className = "flex justify-between text-2xl font-bold mb-4">
              <span className = "text-slate-50">GENEL TOPLAM</span>
              <span className = "text-emerald-400">{cartTotal.toFixed(2)} TL</span>
            </div>
            <div className = "grid grid-cols-2 gap-3">
              <TouchButton variant = "danger" className = "min-h-16 text-xl">İptal</TouchButton>
              <TouchButton variant = "primary" className = "min-h-16 text-xl">Öde</TouchButton>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL : Quick products, Categories and numpad */}
        <section className = "flex-1 flex flex-col">

          {/* Upper right Categories and products */}
          <div className = "flex-1 p-4 overflow-y-auto">
            <h2 className = "text-xl font-bold mb-4 text-slate-300">Hızlı Ürünler</h2>
            <div className = "grid grid-cols-6 gap-4">
              <TouchButton 
              variant = "secondary" 
              className = "min-h-20 flex-col"
              onClick={() => addToCart({id: 1, name:'Çay', price: 15.00})}>
                <span className = "text-lg">Çay</span>
                <span className = "text-emerald-400 font-bold">15 TL</span>
              </TouchButton>
              <TouchButton variant = "secondary" 
              className = "min-h-20 flex-col"
              onClick={() => addToCart({id: 2, name:'Su', price:10.00})}>
                <span className = "text-lg">Su</span>
                <span className = "text-emerald-400 font-bold">15 TL</span>
              </TouchButton>
            </div>
          </div>

          {/* Bottom right section Numpad and quick fuctions */}
          <div className = "h-1/3 bg-slate-800 border-t border-slate-700 p-4">
            <h2 className = "text-slate-400 mb-2 text-lg">Hızlı İşlemler / Numpad alanı</h2>
            {/* later numpad numbers and characters comes here  */}
            <div className = "grid grid-cols-5 gap-3">
              <TouchButton variant = "secondary" className = "min-h-16"> Miktar Çarp </TouchButton>
              <TouchButton variant = "warning" className = "min-h-16"> Fiyatı Gör </TouchButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className = "h-10 bg-slate-900 border-t border-slate-800 flex items-center justify-between px-6 text-slate-400 test-sm sgring-0">
        <div>Kasiyer : Necdet Mehmet Güneş</div>
        <div>22 Ekim 2026 - 14:30</div>
      </footer>
    </div>
  );
}