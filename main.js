function neutralise(s1, s2) {
  
  let result = []

  for (let i = 0; i < s1.length; i++) {

    if (s1.charAt(i) == '+' && s2.charAt(i) == '+') { result.push('+') }
    else if (s1.charAt(i) == '-' && s2.charAt(i) == '-') { result.push('-') }
    else if ((s1.charAt(i) == '+' && s2.charAt(i) == '-') || (s1.charAt(i) == '-' && s2.charAt(i) == '+') ) {
      result.push('0') 
    }
    
  }

  return result.join('')
}

console.log(neutralise('++-+', '-++-'))


// parameters: string1, string2   //contain only +s and -s
// return: string   //showing how they interact when combined
// e.g. neutralise('++-+', '-++-')
// results in '0+00'

// declare a variable result and assign it to an empty array
// initialize a for loop
// if s1 and s2 char at i equals '+' push '+' to result
// if s1 and s2 char at i equal '-' push '-' to result
// if s1 char at i equals '+' and s2 char at i equals '-' OR s1 char at 8 equals '-' and s2 char at i equals '+' push 0 to result
// end loop
// return result.join('')