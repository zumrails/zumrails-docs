const consts = require("./consts")

module.exports = {
  copyright: `Copyright © ${new Date().getFullYear()} ZumRails`,
  demoUrl: `https://demo.${consts.domain}`,
  description:
    "Combining sophisticated software, enhanced payment mechanics and data aggregation to enable virtually instant business payments options for accounts receivable or payable.",
  domain: consts.domain,
  helmVersion: "0.11.0",
  oneLiner: "Powering smarter and faster money movement",
}
