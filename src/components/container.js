import React from "react"
import * as containerStyles from "./container.module.css"

export default function Container({ children, title, imgSrc }) {
  return <div className={containerStyles.container} >
      <h4>{title}</h4>
      <div style={{backgroundImage: "url(" + imgSrc + ")"}}></div>
      <p>{children}</p>
    </div>
}