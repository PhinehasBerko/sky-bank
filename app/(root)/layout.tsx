import React from "react"

const RootLayout =({children}:Readonly<{children:React.ReactNode}>)=>{
    return(
        <main>
            <div>
                SIDEBAR
            </div>
            {children}
        </main>
    )
}
export default RootLayout