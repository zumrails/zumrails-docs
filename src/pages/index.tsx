import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import customFields from "../config/customFields"

import Button from "@theme/Button"
import Layout from "../theme/Layout"

import juCss from "../css/index/jumbotron.module.css"
import usCss from "../css/index/usp.module.css"
import seCss from "../css/section.module.css"

const Top = () => {
  const { siteConfig } = useDocusaurusContext()

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
          Fast SQL for time series
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
          )}
        >
          {siteConfig.tagline}
        </p>

        <div className={juCss.jumbotron__cta}>
          <Button className={juCss.jumbotron__link} href={customFields.demoUrl}>
            Live Demo
          </Button>
          <Button
            className={clsx(
              juCss.jumbotron__link,
              juCss["jumbotron__cta--github"],
            )}
            variant="secondary"
          >
            GitHub
          </Button>
        </div>
        <p className={juCss.jumbotron__description}>
          Query our demo dataset with 1.6 billion rows in milliseconds
        </p>
      </div>
    </section>
  )
}

const Usp = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={seCss["section--inner"]}>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="Speedometer"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/rawPower.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>Built for performance</h2>

          <p className={usCss.usp__description}>SIMD-optimized analytics</p>
          <p className={usCss.usp__description}>Row- and column-based access</p>
          <p className={usCss.usp__description}>Vectorized query execution</p>
          <p className={usCss.usp__description}>Tiny memory footprint</p>
          <p className={usCss.usp__description}>C++ and zero-GC Java</p>
        </div>
      </div>

      <div className={clsx(usCss.usp, usCss["usp--wide"])}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor with a chart that shows the result of the query"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/easyToUse.svg"
            width={205}
          />

          <h2 className={usCss.usp__title}>Optimized for time series</h2>

          <p className={usCss.usp__description}>
            Relational model for time series
          </p>
          <p className={usCss.usp__description}>
            Data stored in chronological order
          </p>
          <p className={usCss.usp__description}>Time partitioned</p>
          <p className={usCss.usp__description}>Immediate consistency</p>
          <p className={usCss.usp__description}>Fast InfluxDB line protocol</p>
        </div>
      </div>

      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor containing a SQL statement"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/featureRich.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>Implemented with SQL</h2>

          <p className={usCss.usp__description}>
            Time series and relational joins
          </p>
          <p className={usCss.usp__description}>Postgres compatibility</p>
          <p className={usCss.usp__description}>
            Aggregations and downsampling
          </p>
          <p className={usCss.usp__description}>Unlimited sub-queries</p>
          <p className={usCss.usp__description}>Built-in SQL optimizer</p>
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
