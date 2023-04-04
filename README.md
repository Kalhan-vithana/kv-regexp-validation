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
      regxValidator.RegexSTRCaseValidator(caseString,String);

```
**RegexCSTValidator** is  ability  to customize regex validation using configurable level.
Passed the string  to the first argument,second argument is optional one that can be use for customize 
regex conditons.

**RegexEMValidator** is ability to  validate  emails.

**RegexSTRCaseValidator**  is match whole word with case.Passed the  case string to the first argument and passed
the second argument as a string for validate with case string. 


### Configuration options

**RegexCSTValidator**
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

// Customize  strings using given conditions
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

console.log(customizeString) //true
console.log(validateEmail)  //true

// Validate whole String with Case .

let example_1= 'https://example.com/Template/Edit/'
let example_2= 'https://example.com/TemplateChapter/Edit/1ddae88c-55dc-484c-adbc-c34bbc29544f'



let caseValidate_ex1 =regxValidator.RegexSTRCaseValidator("Template",example_1)
let caseValidate_ex2 =regxValidator.RegexSTRCaseValidator("Template",example_2)

console.log(caseValidate_ex1) //true
console.log(caseValidate_ex2); //false because match with whole case 'Template'

```

## Contribute
If you would like to contribute ,Clone repository and open pull request.




