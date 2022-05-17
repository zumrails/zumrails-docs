let guidelines

module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Payments",
      type: "category",
      items: [
        "payments/moving-funds",
        "payments/payment-methods",
        "payments/zum-wallet",
        "payments/ways-to-integrate",
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
        "data-aggregation/configure",
        "data-aggregation/parameters",
        "data-aggregation/connector-ui",
        "data-aggregation/connector-sdk",
        "data-aggregation/testing",
      ],
    },
    {
      label: "Connect SDK",
      type: "category",
      items: [
        "connect-sdk/introduction",
        "connect-sdk/configure",
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
        "api-specification/products",
        "api-specification/product-prices",
        "api-specification/invoices",
        "api-specification/subscriptions",
        "api-specification/webhooks",
        "api-specification/idempotency",
        "api-specification/errors",
      ],
    },
  ].filter(Boolean),
}
