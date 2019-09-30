/*
	This file holds tests for within limits
*/

// Import Chai expect
const { expect } = require('chai')

// Import Within helper
const { within } = require("../helpers")

/*
	First test: Taxable limit boundaries
*/
describe("Within taxable limit", () => {
	it("should return false", () => {
		// Test if 15000 is within 16000 and 20000
		const limit = within(15000, 16000, 20000)

		// Expect result to be a boolean
		expect(limit).to.be.a("boolean")
		expect(limit).to.equal(false)
	})

	it("should return true", () => {
		// Test if 18000 is within 16000 and 20000
		const limit = within(18000, 16000, 20000)

		// Expect result to be a boolean
		expect(limit).to.be.a("boolean")
		expect(limit).to.equal(true)
	})

	it("should return false", () => {
		// Test if 21000 is within 16000 and 20000
		const limit = within(21000, 16000, 20000)

		// Expect result to be a boolean
		expect(limit).to.be.a("boolean")
		expect(limit).to.equal(false)
	})
})
