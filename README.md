# kv-regexp-validation

## Introduction 
JavaScript library provides user to custom their regex validation.

## Installation
```  
npm install kv-regexp-validation
```

## Usage 

```JS
const regxValidator = require('kv-regexp-validation');
      regxValidator.RegexCSTValidator(String,[option]);
      regxValidator.RegexEMValidator(String);

```
Passed the string  to the first argument,second argument is optional one that can be use for customize 
regex conditons.


### Configuration options
Below are the default values for the configuration parameter.

```JS
       [{
        min:1,
        max:1,
        leastOneletter:false,
        leastOneNumber:false,
        leastOnecharacter:false,
        leastOneLowerCaseletter:false,
        leastOneUpperCaseletter:false,
        leastOneSpecialcharacter:false
        
        }]
```

### Examples

```JS
const regxValidator = require('kv-regexp-validation');

// User can customize their strings given conditions
let customizeString = regxValidator.RegexCSTValidator("ex1",[ {
    min:1,
    max:4,
    leastOneletter:true,
    leastOneNumber:true,
    leastOnecharacter: false,
    leastOneLowerCaseletter:false,
    leastOneUpperCaseletter:false,
    leastOneSpecialcharacter:false

}]);

// Validate email 
let validateEmail = regxValidator.RegexEMValidator("admin@gmail.com");

//console.log(customizeString)
//console.log(validateEmail)
```

## Contribute
If you would like to contribute ,Clone repository and open pull request.




