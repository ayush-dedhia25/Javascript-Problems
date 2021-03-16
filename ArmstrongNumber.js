class ArmStrong {
  static isArmStrong(num) {
    /*
      Converting the num to string, so the we can
      use the length property of it to easily
      get the total digits of that number.
    */
    const str = num.toString();
    
    // Setting the power
    const power = str.length;
    // Setting the initial value of the sum
    let sum = 0;
    
    // Powering each digit of that num with the
    // total digits of the number
    for (let i = 0; i < power; i++) {
      // Powering the current num with the power
      const currentDigit = parseInt(str[i]);
      // Adding the value of the currentDigit
      // to the sum variable
      sum += currentDigit ** power;
    }
    
    // Comparing the sum of all the powered digits
    // with the number given by the user
    if (sum === num)
      // If the sum if equal to the user given number
      console.log("The number is an Armstrong number!");
    else
      // If the sum is not equal to the user given number
      console.log("The number is not an Armstrong number!");
  }
}

ArmStrong.isArmStrong(1635);