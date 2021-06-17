import React from "react"
import * as containerWrapperStyles from "./containerWrapper.module.css"
import Container from "../components/container"
import compImg1 from "../images/Component1.png"
import compImg2 from "../images/Component2.png"
import compImg3 from "../images/Component3.png"

export default function ContainerWrapper({padding}) {
    return <div className={containerWrapperStyles.containerWrapper} style={{padding: padding}} role='main'>
        <Container title='CDM Training' imgSrc={compImg1}>
        This program provides participants with the basic knowledge of continuous monitoring concepts. It includes live demonstrations using the search, query, and reporting capabilities of the CDM Agency Dashboard to identify and report on vulnerabilities.
        </Container>
        <Container title='Cybersecurity Awareness' imgSrc={compImg2}>
        Security Awareness Training provides every employee with a fundamental understanding that there are imminent and ongoing cyber threats, preparing enterprise employees for common cyberattacks and threats.
        </Container>
        <Container title='Skill-Based Training' imgSrc={compImg3}>
        Training is essential to preparing the cybersecurity workforce of tomorrow, and the Department of Homeland Security (DHS) is committed to providing the nation with access to cybersecurity training and workforce development efforts to develop a more resilient and capable cyber nation.
        </Container>
      </div>
  }