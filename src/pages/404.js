import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import headerImg from "../images/cisa_icon_sm.png"
import bannerImg from "../images/banner_img_sm.png"

const leftPadding = '8%'
const rightPadding = '8%'
const padding = '0 '+rightPadding+' 0 '+leftPadding

export default function dev_404() {
  return <Layout padding={padding} leftPadding={leftPadding} headerImg={headerImg}>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <title>CISA Training Environment: Error Page</title>
    </Helmet>
  <Banner bannerText="Page Not Found" bannerImg={bannerImg} padding={leftPadding}>
  <Link href="\">Click here</Link> to return to the landing page.
  </Banner>
</Layout>
}