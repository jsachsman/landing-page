import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import * as layoutStyles from "./layout.module.css"


export default function Layout({ children, padding, leftPadding, headerImg }) {
    return <div className={layoutStyles.layout}>
        <div className={layoutStyles.layoutMain}>
          <Header padding={padding} headerImg={headerImg} />
         {children}
         </div>
        <Footer leftPadding={leftPadding}/>
    </div>
}