import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary: 'bg-secondary text-white hover:brightness-110 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    outline: 'border border-gray-200 bg-transparent text-text-main hover:border-primary hover:text-primary hover:bg-brand-off',
    ghost: 'bg-transparent text-text-main hover:bg-brand-off hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    full: 'w-full py-3.5 px-6',
  };

  return (
    <button 
      className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 gap-2 font-body active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
