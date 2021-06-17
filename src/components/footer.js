import React from "react"
import * as footerStyles from "./footer.module.css"

export default function Footer({leftPadding}) {
    return (
        <div role='contentinfo'>
          <div className={footerStyles.footerTop} style={{paddingLeft: leftPadding}}>
            <div>
                CYBERSECURITY & INFRASTRUCTURE SECURITY AGENCY
            </div>
            <div>
                <a href='/'>Contact Us</a>
            </div>
          </div>
          <div className={footerStyles.footerBottom}>
            <a href='https://www.dhs.gov/performance-financial-reports' target='_blank' rel='noopener'>Accountability</a>
            <a href='https://www.cisa.gov/privacy-policy' target='_blank' rel='noopener'>Privacy Policy</a>
            <a href='https://www.dhs.gov/freedom-information-act-foia' target='_blank' rel='noopener'>FOA</a>
            <a href='https://www.dhs.gov/homeland-security-no-fear-act-reporting' target='_blank' rel='noopener'>No Fear Act</a>
            <a href='https://www.dhs.gov/accessibility' target='_blank' rel='noopener'>Accessibility</a>
            <a href='https://www.dhs.gov/plain-writing-dhs' target='_blank' rel='noopener'>Plain Writing</a>
            <a href='https://www.dhs.gov/plug-information' target='_blank' rel='noopener'>Plug-ins</a>
            <a href='https://www.oig.dhs.gov/' target='_blank' rel='noopener'>Inspector General</a>
            <a href='https://www.dhs.gov/' target='_blank' rel='noopener'>DHS</a>
            <a href='https://www.whitehouse.gov/' target='_blank' rel='noopener'>The White House</a>
            <a href='https://www.usa.gov/' target='_blank' rel='noopener'>USA.gov</a>
          </div>
      </div>
        )
}