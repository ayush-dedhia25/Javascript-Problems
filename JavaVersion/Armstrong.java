import java.util.Scanner;

public class ArmstrongChecker {
   
   public static void main(String[] args) {
      // Get the input from the user
      Scanner sc = new Scanner(System.in);
      int num = sc.nextInt();
      
      // Setting the initial value of sum to 0
      int sum = 0;
      
      // Convert number to string so that we can
      // use length method of string to get the total digits of the number
      String numToString = new Integer(num).toString();
      
      // Powering each digit with the total digits of number provided by the user
      for (int i = 0; i < numToString.length(); i++) {
         char temp = numToString.charAt(i);
         // Converting each digit to number
         int currentDigit = Integer.parseInt(String.valueOf(temp));
         // Adding the value of each digit
         sum += Math.pow(currentDigit, str.length());
      }
      
      if (sum == num)
         System.out.println("Yes! its an Armstrong number");
      else
         System.out.println("No! its not an Armstrong number");
   }
   
}