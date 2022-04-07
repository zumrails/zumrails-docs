import clsx from "clsx"
import React from "react"
import customFields from "../config/customFields"

import Button from "@theme/Button"
import Layout from "../theme/Layout"

import juCss from "../css/index/jumbotron.module.css"
import usCss from "../css/index/usp.module.css"
import seCss from "../css/section.module.css"

const Top = () => {
  const text = "Welcome to the Zūm Rails Documentation. You will find guides and documentation to help you get started with Zūm Rails as quickly as possible as well as any support if you get stuck."
  return (
    <section
      className={clsx(seCss["section--inner"], seCss["section--slim--accent"])}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
          )}
        >
          How can we help?
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
          )}
        >
          {text}
        </p>

        <div className={juCss.jumbotron__cta}>
          <Button
            className={juCss.jumbotron__link}
            newTab={false}
            href="/docs/introduction/"
          >
            Documentation
          </Button>
          <Button
            className={clsx(
              juCss.jumbotron__link,
              juCss["jumbotron__cta--github"],
            )}
            href="https://help.zumrails.com/en/"
            variant="secondary"
          >
            Help Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

const Usp = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={seCss["section--inner"]}>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Getting Started</h2>
          <p className={usCss.usp__description}>Authentication</p>
          <p className={usCss.usp__description}>Webhooks</p>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Payments</h2>
          <p className={usCss.usp__description}>Moving Funds</p>
          <p className={usCss.usp__description}>Payment Methods</p>
          <p className={usCss.usp__description}>Ways to integrate</p>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Invoices & Subscriptions</h2>
          <p className={usCss.usp__description}>Products and Prices</p>
          <p className={usCss.usp__description}>Invoices</p>
          <p className={usCss.usp__description}>Subscriptions</p>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Aggregation</h2>
          <p className={usCss.usp__description}>Configuration</p>
          <p className={usCss.usp__description}>Connect UI & SDK</p>
        </div>
      </div>
    </div>
  </section>
)

const Home = () => {
  const title = "Zūm Rails Docs | Powering smarter and faster money movement"

  return (
    <Layout
      canonical=""
      description={customFields.description}
      title={title}
      replaceTitle
    >
      <Top />
      <Usp />
    </Layout>
  )
}

export default Home
