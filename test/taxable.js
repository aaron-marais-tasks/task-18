/*
	This file holds my taxable percantage tests
*/

// Import Chai expect
const { expect } = require('chai')

// Import Taxable helper
const { taxable } = require("../helpers")

/*
	First test: Taxable percentages
*/
describe("Taxable percentage", () => {
	// Array for testing; only 7 stages to test
	[
		[0.18, 100000],
		[0.26, 250000],
		[0.31, 350000],
		[0.36, 480000],
		[0.39, 650000],
		[0.41, 950000],
		[0.45, 2000000]
	].forEach(([prc, amt]) => {
		// prc is percentage; amt is total income

		// Should return percentage
		it(`should return ${prc}`, () => {
			// Get limit based on input
			const limit = taxable(amt)

			// Expect output to be number equal to percentage
			expect(limit).to.be.a("number")
			expect(limit).to.equal(prc)
		})
	})
})
