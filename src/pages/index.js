import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import ContainerWrapper from "../components/containerWrapper"
import Banner from "../components/banner"
import CallOut from "../components/callOut"
import headerImg from "../images/cisa_icon_sm.png"
import bannerImg from "../images/banner_img_sm.png"

const leftPadding = '7%'
const rightPadding = '6%'
const padding = '0 '+rightPadding+' 0 '+leftPadding


export default function Home() {
  return (
  <Layout padding={padding} leftPadding={leftPadding} headerImg={headerImg}>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <title>CISA Training Environment: Home Page</title>
    </Helmet>
    <Banner bannerText="Cybersecurity Training" bannerImg={bannerImg} padding={leftPadding}>
    <strong>CISA</strong> is the nation's risk advisor, working with partners to defend against today's threats and collaborating to build more secure and resilient infrastructure for the future.
    </Banner>
    <ContainerWrapper padding={padding}/>
    <CallOut title='Start Learning Today' leftPadding={leftPadding} rightPadding={rightPadding}>
    Start learning today using our <strong>CDM Agency Dashboard Micro-Learn Videos</strong>.
    These short videos (3-10 minutes) of the new CDM Agency Dashboard will provide a foundation level of knowledge and background that will help end users of the dashboard prepare for our in-person training demonstrations and hands-on activities, as well as the implementation of the new dashboard.
    </CallOut>
  </Layout>
  )
}


