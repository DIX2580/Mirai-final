import { Link } from 'react-router-dom';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
};

type ButtonProps = BaseProps & (
  | ({ to: string } & Omit<ComponentProps<typeof Link>, 'to' | 'className'>)
  | ({ href: string; target?: string; rel?: string } & Omit<ComponentProps<'a'>, 'href' | 'className'>)
  | (Omit<ComponentProps<'button'>, 'className'>)
);

function classes(variant: Variant, disabled?: boolean) {
  const base = 'inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-300 transform';
  const state = disabled ? ' opacity-50 cursor-not-allowed' : ' active:scale-95';
  
  switch (variant) {
    case 'primary':
      return base + ' text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 border border-blue-500/50' + state;
    case 'secondary':
      return base + ' text-white bg-slate-700 hover:bg-slate-600 border-2 border-slate-600 hover:border-slate-500 shadow-lg shadow-slate-900/50' + state;
    case 'ghost':
    default:
      return base + ' text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20' + state;
  }
}

export default function Button(props: ButtonProps) {
  const { children, leftIcon, rightIcon, fullWidth, variant = 'primary', className = '', disabled, ...rest } = props as any;
  const cls = classes(variant, disabled) + (fullWidth ? ' w-full' : '') + (className ? ` ${className}` : '');

  if ('to' in rest && rest.to) {
    const { to, ...r } = rest as any;
    return (
      <Link to={to} className={cls} {...r} aria-disabled={disabled}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }
  if ('href' in rest && rest.href) {
    const { href, target, rel, ...r } = rest as any;
    return (
      <a href={href} target={target} rel={rel} className={cls} {...r} aria-disabled={disabled}>
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }
  const r = rest as any;
  return (
    <button className={cls} disabled={disabled} {...r}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
