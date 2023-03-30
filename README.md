# Kalhan-vithana-kv-regexp-validation

# Introduction

Javascript library is provide  user to  customize  regex validation.

# Installations

```npm i kv-regexp-validation```

# Usage

`node`

```js 
const regxValidator = require('kv-regexp-validation');
regxValidator.RegexCSTValidator("ex1",[ min:1,
        max:5,
        leastOneletter:true,
        leastOneNumber:true,
        leastOnecharacter: false,
        leastOneLowerCaseletter:false,
        leastOneUpperCaseletter:false,
        leastOneSpecialcharacter:false])
regxValidator.RegexEMValidator("abc@gmail.com")
```


# Contribute 

If you would like to contribute ,clone repositroy  and open pull request.

