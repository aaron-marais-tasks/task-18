/*
	This file holds CLI input testing
*/

// Import STD In/Out mock libraries
const stdin = require('mock-stdin').stdin()
const stdout = require('std-mocks')

// Import Chai expect
const { expect } = require('chai')

// Import request library
const input = require("../request")

/*
	First test: User Input
*/
describe("User input", () => {
	/*
		Expect correct result from promise
	*/
	it("should resolve promise", done => {
		// Capture stdout
		stdout.use()

		// Request input from user, and check content of return
		input("Testing query").then(content => {
			// Make sure content is a string and equal to mock stdin
			expect(content).to.be.a("string")
			expect(content).to.equal("stdin test")

			done()
		})

		// Mock stdin content
		stdin.send("stdin test")
		stdout.restore()
	})

	/*
		Expect correct text from prompt
	*/
	it("should have prompted", () => {
		// Get stdout buffer
		const output = stdout.flush()

		// Expect output.stdout[1]
		expect(output).to.have.property("stdout")
			.with.lengthOf(1)

		// Make sure output is correct
		expect(output.stdout[0]).to.equal("Testing query\n")
	})
})
