// Import input request and helper library
const request = require("./request")
const helpers = require("./helpers")

// Import currency formatter
const parsecurrency = require("parsecurrency")

request("Please enter your current yearly income:") // Request user to input data
  .then(
    // Parse currency information from input
    parsecurrency
  )
  .then(currency => {
  	// Throw error if invalid currency value
    if(!currency)
      throw new Error("Invalid currency value")

    return currency.value
  })
  .then(value => {
  	// Throw error if negative income
    if(value < 0)
      throw new Error("Input needs to be above zero")

    return value
  })
  .then(value => {
  	// Display amount to be taxed on
  	process.stdout.write(`On ZAR ${value.toFixed(2)}, you will be taxed `)
  	return value
  })
  .then(
    // Get additive and percentage taxed
    helpers.taxing
  )
  .then(([additive, valueByPercentage]) => 
  	// Display tax amount
    console.log(`ZAR ${(additive + valueByPercentage).toFixed(2)}`)
  )
  .then(
    // Exit when chain is complete
    process.exit
  )
  .catch(err => {
  	// If any errors, log error and exit process
    console.log(err.message)
    process.exit()
  })
