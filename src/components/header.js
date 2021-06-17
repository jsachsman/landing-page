import React from "react"
import * as headerStyles from "./header.module.css"
import LoginButton from "../components/loginButton"
const top = 20

export default function Header({padding, headerImg}) {
    return (
        <div className={headerStyles.header} style={{padding: padding}} role='navigation'>
            <div>
            <h3 style={{paddingTop: top+"px", minHeight: (75-top)+"px",
                    backgroundImage: "url("+headerImg+")"}}>CISA Training Environment</h3>
            <LoginButton href='\'>LOG IN / SIGN UP</LoginButton>
            </div>
        </div>
        )
}