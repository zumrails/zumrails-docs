"use strict"

const { Client } = require("pg")

const start = async () => {
  const client = new Client({
    database: "qdb",
    host: "127.0.0.1",
    password: "quest",
    port: 8812,
    user: "admin",
  })
  await client.connect()

  const res = await client.query("INSERT INTO test VALUES($1, $2);", [
    "abc",
    "123",
  ])

  console.log(res)

  await client.end()
}

start()
  .then(() => console.log("Done"))
  .catch(console.error)
