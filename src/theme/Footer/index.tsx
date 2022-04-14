import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import customFields from "../../config/customFields"

import useMetadataContext from "@theme/useMetadataContext"
import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

import LinkedInLogo from "../../../static/img/pages/index/linkedin.svg"
import FacebookLogo from "../../../static/img/pages/index/facebook.svg"
import InstagramLogo from "../../../static/img/pages/index/instagram.svg"
import TwitterLogo from "../../../static/img/pages/index/twitter.svg"
import YoutubeLogo from "../../../static/img/pages/index/youtube.svg"

import SvgImage from "../../components/SvgImage"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
  const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
  const linkTo = useBaseUrl(to ?? "")

  return (
    <a
      className={footerStyles.footer__link}
      {...(href != null
        ? {
            href: linkHref,
            rel: "noopener noreferrer",
            target: "_blank",
          }
        : { href: linkTo })}
      {...props}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const { siteConfig } = useDocusaurusContext()
  const metadataContext = useMetadataContext()
  const {
    themeConfig: {
      footer: { links },
    },
  } = siteConfig

  return (
    <footer
      className={clsx(footerStyles.footer, sectionCss.section, {
        [footerStyles["footer--alt"]]: metadataContext.altFooter,
      })}
    >
      <div
        className={clsx(
          footerStyles.footer__inner,
          sectionCss["section--inner"],
        )}
      >
        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--left"],
          )}
        >
          <a href="/">
            <img
              alt="Zum Rails logo"
              className={footerStyles.footer__logo}
              height={33}
              src="/img/zum_icon_white.png"
              title="Zum Rails"
              width={78}
            />
          </a>
          <p className={footerStyles.footer__tagline}>{siteConfig.tagline}</p>
          <p className={footerStyles.footer__text}>
            Zūm puts all the pieces together to solve your payment puzzle
          </p>
          <div className={footerStyles.footer__social}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/zumrails/"
            >
              <SvgImage
                image={<LinkedInLogo width="25" height="25" />}
                title="Linkedin"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ZumRails/"
            >
              <SvgImage
                image={<FacebookLogo width="25" height="25" />}
                title="Facebook"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/zum.rails/"
            >
              <SvgImage
                image={<InstagramLogo width="25" height="25" />}
                title="Instagram"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/zumrails"
            >
              <SvgImage
                image={<TwitterLogo width="25" height="25" />}
                title="Twitter"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCNefEZKqPOlM_Lf3fPn6zJw/videos"
            >
              <SvgImage
                image={<YoutubeLogo width="25" height="25" />}
                title="Youtube"
              />
            </a>
          </div>
          <p className={footerStyles.footer__text}>{customFields.copyright}</p>
        </div>

        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--right"],
          )}
        >
          {links.map((linkItem, i) => (
            <div key={i} className={footerStyles.footer__links}>
              <ul className={footerStyles.footer__items}>
                {linkItem.title != null && (
                  <li className={footerStyles.footer__title}>
                    {linkItem.title}
                  </li>
                )}

                {linkItem.items?.map((item) => (
                  <li
                    className={footerStyles.footer__item}
                    key={item.href ?? item.to}
                  >
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
