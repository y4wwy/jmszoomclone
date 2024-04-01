import React, {ReactNode} from 'react'

const RootLayout = ({children}:  {children: ReactNode}) => {
  return (
    <main>
        NAVBAR
        {children}
        FOOTER
    </main>
  )
}

export default RootLayout