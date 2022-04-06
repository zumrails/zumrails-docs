import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import customFields from "../../config/customFields"

import useMetadataContext from "@theme/useMetadataContext"
import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

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
