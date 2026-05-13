import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

export default ButtonLink
