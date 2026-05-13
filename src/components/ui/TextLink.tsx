import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

function TextLink({ children, className = '', ...props }: TextLinkProps) {
  const classes = ['text-link', className].filter(Boolean).join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

export default TextLink
