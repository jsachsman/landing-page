import React from "react"
import * as bannerStyles from "./banner.module.css"

export default function Banner({children, bannerText, bannerImg, padding}) {
  return (
    <div className={bannerStyles.banner} style={{backgroundImage: "url("+bannerImg+")", paddingLeft: padding}}
      role='banner'>
        <div>
            <h1>{bannerText}</h1>
            <p>{children}</p>
        </div>
    </div>
  )
}