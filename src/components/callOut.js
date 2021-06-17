import React from "react"
import * as callOutStyles from "./callOut.module.css"

export default function CallOut({ children, title, leftPadding, rightPadding}) {
  return <div className={callOutStyles.callOut} role='complementary'>
      <h2 style={{padding: '20px 10px 20px '+leftPadding }}>{title}</h2>
      <p style={{paddingRight: rightPadding}}>{children}</p>
    </div>
}