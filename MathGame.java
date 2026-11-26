import java.util.Random;
import java.util.Scanner;

public class MathGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        int score = 0;
        int totalQuestions = 5;
        char[] operators = {'+', '-', '*'};

        System.out.println("=== Math Quiz Game ===");
        System.out.println("Aapko " + totalQuestions + " sawaalon ke sahi jawaab dene hain.\n");

        for (int i = 1; i <= totalQuestions; i++) {
            int num1 = random.nextInt(15) + 1;
            int num2 = random.nextInt(15) + 1;
            char op = operators[random.nextInt(operators.length)];
            int correctAnswer;

            if (op == '+') correctAnswer = num1 + num2;
            else if (op == '-') correctAnswer = num1 - num2;
            else correctAnswer = num1 * num2;

            System.out.print("Sawaal " + i + ": " + num1 + " " + op + " " + num2 + " = ");
            int userAnswer = scanner.nextInt();

            if (userAnswer == correctAnswer) {
                System.out.println("Sahi jawaab!\n");
                score++;
            } else {
                System.out.println("Galat! Sahi jawaab " + correctAnswer + " hai.\n");
            }
        }

        System.out.println("Game Over! Aapka final score: " + score + "/" + totalQuestions);
        scanner.close();
    }
}