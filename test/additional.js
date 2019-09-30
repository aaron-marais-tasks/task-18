/*
	This file holds my taxable additive tests
*/

// Import Chai expect
const { expect } = require('chai')

// Import Taxable helper
const { additional } = require("../helpers")

/*
	First test: Additional tax
*/
describe("Additional tax amount", () => {
	// Array for testing; only 7 stages to test
	[
		[0, 100000],
		[35253, 250000],
		[65853, 350000],
		[100263, 480000],
		[147891, 650000],
		[207448, 950000],
		[532041, 2000000]
	].forEach(([prc, amt]) => {
		// prc is percentage; amt is total income

		// Should return percentage
		it(`should return ${prc}`, () => {
			// Get limit based on input
			const limit = additional(amt)

			// Expect output to be number equal to percentage
			expect(limit).to.be.a("number")
			expect(limit).to.equal(prc)
		})
	})
})

