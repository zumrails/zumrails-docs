import clsx from "clsx"
import React from "react"
import customFields from "../config/customFields"

import Button from "@theme/Button"
import Layout from "../theme/Layout"

import juCss from "../css/index/jumbotron.module.css"
import usCss from "../css/index/usp.module.css"
import seCss from "../css/section.module.css"

const TopBanner = () => {
  const text = "Welcome to the Zūm Rails Documentation. You will find guides and documentation to help you get started with Zūm Rails as quickly as possible as well as any support if you get stuck."
  return (
    <section
      className={clsx(
        seCss["section--slim--accent"],
        seCss["section--primary"],
      )}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
            juCss.text_white,
          )}
        >
          How can we help?
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
            juCss.text_white,
          )}
        >
          {text}
        </p>

        <div className={juCss.jumbotron__cta}>
          <Button
            className={juCss.jumbotron__link}
            newTab={false}
            href="/docs/introduction/"
            variant="secondary"
          >
            Documentation
          </Button>
          <Button
            className={juCss.jumbotron__link}
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

const ImportantLinks = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={seCss["section--inner"]}>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Getting Started</h2>
          <a
            href="/docs/api-specification/authentication"
            className={usCss.usp__description}
          >
            Authentication
          </a>
          <a
            href="/docs/api-specification/webhooks"
            className={usCss.usp__description}
          >
            Webhooks
          </a>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Payments</h2>
          <a
            href="/docs/payments/moving-funds"
            className={usCss.usp__description}
          >
            Moving Funds
          </a>
          <a
            href="/docs/payments/payment-methods"
            className={usCss.usp__description}
          >
            Payment Methods
          </a>
          <a
            href="/docs/payments/ways-to-integrate"
            className={usCss.usp__description}
          >
            Ways to integrate
          </a>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>
            Invoices <br />& Subscriptions
          </h2>
          <a
            href="/docs/invoice-and-subscription/product"
            className={usCss.usp__description}
          >
            Products and Prices
          </a>
          <a
            href="/docs/invoice-and-subscription/invoice"
            className={usCss.usp__description}
          >
            Invoices
          </a>
          <a
            href="/docs/invoice-and-subscription/subscription"
            className={usCss.usp__description}
          >
            Subscriptions
          </a>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <h2 className={usCss.usp__title}>Aggregation</h2>
          <a
            href="/docs/data-aggregation/configure"
            className={usCss.usp__description}
          >
            Configuration
          </a>
          <a
            href="/docs/data-aggregation/connector-ui"
            className={usCss.usp__description}
          >
            Connect UI & SDK
          </a>
        </div>
      </div>
    </div>
  </section>
)

const TopArticles = () => (
  <section className={clsx(seCss.section, seCss["section--slim"])}>
    <h2 className={clsx(usCss.usp__title, seCss["section--title"])}>
      Popular Articles
    </h2>
    <div className={seCss["section--inner--slim"]}>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://help.zumrails.com/en/articles/5786122-creating-a-transaction-in-zum-portal"
            className={usCss.usp__description}
          >
            Creating a transaction in Zūm Portal
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://help.zumrails.com/en/articles/5791174-adding-a-new-user-in-zum-portal"
            className={usCss.usp__description}
          >
            Adding a new user in Zūm Portal
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://help.zumrails.com/en/articles/5201834-what-is-zum-connect"
            className={usCss.usp__description}
          >
            What is Zūm Connect?
          </a>
        </div>
      </div>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://help.zumrails.com/en/articles/5334436-api-keys"
            className={usCss.usp__description}
          >
            Where to get the API keys?
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://help.zumrails.com/en/articles/5864819-webhooks"
            className={usCss.usp__description}
          >
            All about Webhooks
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://help.zumrails.com/en/articles/5791168-creating-a-subscription-in-zum-portal"
            className={usCss.usp__description}
          >
            Creating a Subscription in Zūm Portal
          </a>
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
      <TopBanner />
      <ImportantLinks />
      <TopArticles />
    </Layout>
  )
}

export default Home
