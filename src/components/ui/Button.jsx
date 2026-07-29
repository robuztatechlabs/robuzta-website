import Link from 'next/link';
import { cn } from '@/utils/cn';

export function Button({
  href = '',
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const classes = cn('button', `button-${variant}`, className);

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#');

    if (isInternal) {
      return (
        <Link className={classes} href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}

