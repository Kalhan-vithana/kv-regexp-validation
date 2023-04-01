# kv-regexp-validation

## Introduction 
JavaScript library provides user to custom their regex validation.

## Installation
```  
npm install kv-regexp-validation
```

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

// validate email 
let validateEmail = regxValidator.RegexEMValidator("admin@gmail.com");

//console.log(customizeString)
//console.log(validateEmail)
```

## Contribute
If you would like to contribute ,Clone repository and open pull request.




