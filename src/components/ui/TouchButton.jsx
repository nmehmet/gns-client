import React from 'react'

export default function TouchButton({ 
    children,
     variant = 'primary',
      onClick, className = '',
       disabled = false,
        ...props 
    }) {
  
    const baseStyles = 'min-h-[50px] px-5 rounded-xl font-semibold text-lg flex items-center justify-center transition-all duration-100 cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 ';

  // Gelen 'variant' değerine göre butonun rengini belirleyen ufak bir sözlük (Dictionary)
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:bg-emerald-700',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white shadow-sm active:bg-slate-800',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white shadow-md active:bg-rose-700',
    warning: 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md active:bg-amber-600',
};

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button 
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${selectedVariant} ${className}`}
        {...props}
    >
        {children}
    </button>
  );
}