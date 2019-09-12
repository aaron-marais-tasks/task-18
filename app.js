// Import input request and helper library
const request = require("./request")
const helpers = require("./helpers")

// Import currency formatter
const parsecurrency = require("parsecurrency")

request("Please enter your current yearly income:")
  .then(data => parsecurrency(data))
  .then(currency => {
    if(!currency)
      throw new Error("Invalid currency value")

    return currency.value
  })
  .then(value => {
    if(value < 0)
      throw new Error("Input needs to be above zero")

    return value
  })
  .then(helpers.taxing)
  .then(([additive, valueByPercentage]) => {
    console.log(`You will be taxed ZAR ${(additive + valueByPercentage).toFixed(2)}`)
  })
  .then(process.exit)
  .catch(err => {
    console.log(err.message)
    process.exit()
  })
