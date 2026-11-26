#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(0));
    int score = 0;
    int totalQuestions = 5;
    char operators[] = {'+', '-', '*'};

    cout << "=== Math Quiz Game ===" << endl;
    cout << "Aapko " << totalQuestions << " sawaalon ke sahi jawaab dene hain.\n\n";

    for (int i = 1; i <= totalQuestions; i++) {
        int num1 = rand() % 15 + 1;
        int num2 = rand() % 15 + 1;
        char op = operators[rand() % 3];
        int correctAnswer, userAnswer;

        if (op == '+') correctAnswer = num1 + num2;
        else if (op == '-') correctAnswer = num1 - num2;
        else correctAnswer = num1 * num2;

        cout << "Sawaal " << i << ": " << num1 << " " << op << " " << num2 << " = ";
        cin >> userAnswer;

        if (userAnswer == correctAnswer) {
            cout << "Sahi jawaab!\n\n";
            score++;
        } else {
            cout << "Galat! Sahi jawaab " << correctAnswer << " hai.\n\n";
        }
    }

    cout << "Game Over! Aapka final score: " << score << "/" << totalQuestions << endl;
    return 0;
}