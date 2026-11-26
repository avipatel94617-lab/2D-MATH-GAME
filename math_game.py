import random

def math_game():
    score = 0
    total_questions = 5
    operators = ['+', '-', '*']
    
    print("=== Math Quiz Game ===")
    print(f"Aapko {total_questions} sawaalon ke sahi jawaab dene hain.\n")
    
    for i in range(1, total_questions + 1):
        num1 = random.randint(1, 15)
        num2 = random.randint(1, 15)
        op = random.choice(operators)
        
        if op == '+':
            correct_answer = num1 + num2
        elif op == '-':
            correct_answer = num1 - num2
        else:
            correct_answer = num1 * num2
            
        try:
            user_answer = int(input(f"Sawaal {i}: {num1} {op} {num2} = "))
            if user_answer == correct_answer:
                print("Sahi jawaab!\n")
                score += 1
            else:
                print(f"Galat! Sahi jawaab {correct_answer} hai.\n")
        except ValueError:
            print(f"Invalid input! Sahi jawaab {correct_answer} tha.\n")
            
    print(f"Game Over! Aapka final score: {score}/{total_questions}")

if __name__ == "__main__":
    math_game()