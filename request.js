// Get process.stdin as the standard input object and set input encoding
const stdin = process.stdin
stdin.setEncoding('utf-8')

// Export promise to request input and handle when user input data and click enter key
module.exports = request => {
  // Prompt user to input data in console.
  console.log(request)

  return new Promise((resolve, reject) => 
    stdin.on('data', data => resolve(data.trim()))
  )
}
