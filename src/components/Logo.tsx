import React from 'react'
import blueLogo from '../assets/blue_netbots_logo.png'
import whiteLogo from '../assets/white_netbots_logo.png'

interface LogoProps {
  variant?: 'blue' | 'white'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'blue', className = '' }) => {
  const logoSrc = variant === 'white' ? whiteLogo : blueLogo
  
  return (
    <div className={className}>
      <img 
        src={logoSrc} 
        alt="NetBots Logo" 
        className="h-full w-auto"
      />
    </div>
  )
}

export default Logo 