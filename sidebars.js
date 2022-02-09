let guidelines

if (process.env.NODE_ENV === "development") {
  guidelines = {
    label: "Guidelines (DEV ONLY)",
    type: "category",
    items: [
      {
        type: "category",
        label: "Templates",
        items: [
          "__guidelines/template/guide",
          "__guidelines/template/function",
          "__guidelines/template/sql",
        ],
      },
      "__guidelines/naming-convention",
      "__guidelines/content-hierarchy",
      "__guidelines/lexicon",
      "__guidelines/markdown",
      "__guidelines/sql-code-blocks",
      "__guidelines/influences",
    ],
  }
}

module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Basic Concepts",
      type: "category",
      items: [
        "basic-concepts/introduction",
        "basic-concepts/moving-funds",
        "basic-concepts/payment-methods",
        "basic-concepts/zum-wallet",
      ],
    },
    {
      label: "Ways to Integrate",
      type: "category",
      items: [
        "ways-to-integrate/zum-connect-url",
        "ways-to-integrate/zum-connect-sdk",
      ],
    },
    {
      label: "Invoice & Subscription",
      type: "category",
      items: [
        "invoice-and-subscription/product",
        "invoice-and-subscription/invoice",
        "invoice-and-subscription/subscription",
        "invoice-and-subscription/tax",
        "invoice-and-subscription/shipping",
      ],
    },
    {
      label: "Data Aggregation",
      type: "category",
      items: [
        "data-aggregation/introduction",
        "data-aggregation/connector-ui",
        "data-aggregation/connector-sdk",
        "data-aggregation/configure",
        "data-aggregation/testing",
      ],
    },
    {
      label: "API Specification",
      type: "category",
      collapsed: false,
      items: [
        "api-specification/api-introduction",
        "api-specification/authentication",
        "api-specification/users",
        "api-specification/transactions",
        "api-specification/transactions-batch-csv",
        "api-specification/wallets",
        "api-specification/aggregation",
        "api-specification/invoices",
        "api-specification/subscriptions",
        "api-specification/webhooks",
        "api-specification/idempotency",
        "api-specification/errors",
      ],
    },
  ].filter(Boolean),
}
