import React from "react"
import * as buttonStyles from "./loginButton.module.css"

export default function LoginButton({ children, href}) {
        return (
            <a href={href} className={buttonStyles.loginButton}>
                {children}
            </a>
        );
}