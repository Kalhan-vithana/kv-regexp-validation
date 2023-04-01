# kv-regexp-validation

## Introduction 
JavaScript library provides users to custom regex validation.

## Installation
```  
npm install kv-regexp-validation
```

```JS
const regxValidator = require('kv-regexp-validation');

[//]: # User can customize their strings given conditions
regxValidator.RegexCSTValidator("ex1",[ {
    min:1,
    max:4,
    leastOneletter:true,
    leastOneNumber:true,
    leastOnecharacter: false,
    leastOneLowerCaseletter:false,
    leastOneUpperCaseletter:false,
    leastOneSpecialcharacter:false

}]);

<!--  validate email    -->
regxValidator.RegexEMValidator("admin@gmail.com");
```

## Contribute
If you would like to contribute ,Clone repository and open pull request.




