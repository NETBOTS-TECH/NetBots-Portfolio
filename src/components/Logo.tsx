import React from 'react'
import blueLogo from '../assets/blue_netbots_logo.png'
import whiteLogo from '../assets/white_netbots_logo.png'

interface LogoProps {
  variant?: 'blue' | 'white'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'blue', className = '' }) => {
  const logoSrc = variant === 'blue' ? blueLogo : whiteLogo

  return (
    <img
      src={logoSrc}
      alt="NetBots Logo"
      className={`h-8 w-auto ${className}`}
    />
  )
}

export default Logo 