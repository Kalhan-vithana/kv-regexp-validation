const  RegexValidator =  {
    
    RegexCSTValidator : (intput,mt= [{
        min:1,
        max:1,
        leastOneletter:false,
        leastOneNumber:false,
        leastOnecharacter:false,
        leastOneLowerCaseletter:false,
        leastOneUpperCaseletter:false,
        leastOneSpecialcharacter:false
    }]) =>{

    
    
        let regex = new RegExp(`${mt[0].leastOneLowerCaseletter ? `(?=.*[a-z])` : ""}^${mt[0].leastOneUpperCaseletter ? `(?=.*[A-Z])` : ""}${mt[0].leastOneletter ? `(?=.*[A-Za-z])` : ""}${mt[0].leastOneNumber ? `(?=.*\\d)` :"" }${  mt[0].leastOneSpecialcharacter ? `(?=.*[@$!%*#?&])` : ""}[A-Za-z\\d@$!%*#?&]{${mt[0]?.min},${mt[0]?.max}}$`);
        
        return regex.test(intput);
      
    
    },

     RegexEMValidator : (input)=>{
        
        let regex = /^\w+@\w+\.\w{2,3}$/;
        
       return regex.test(input)
    },

    RegexSTRCaseValidator :(caseString,input)=>{
        
        let regex = new RegExp("\\b" + caseString + "\\b")
        
        return regex.test(input)
    }



}

module.exports = RegexValidator;

