// getPassword.js

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}



// define generatePassword function
function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  const options = {
    length: 10,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    symbols: 'on',
    excludeCharacters: '40'
  }


  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  console.log(collection)
  // remove things user do not need

  if (options.excludeCharacters) {
    collection = collection.filter(character =>
      !options.excludeCharacters.includes(character)
    )


  }

  console.log(collection)
  // start generating password
  let password = ''

  for (let index = 0; index < options.length; index++) {
    password += sample(collection)
  }
  console.log(password)

  // return the generated password
  console.log('This function will generate password')
}


// invoke generatePassword function 
generatePassword()