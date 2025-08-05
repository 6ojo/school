import time
import os

def clear_screen():
    #windows
    if os.name == 'nt':
        _ = os.system('cls')
    #unix
    else:
        _ = os.system('clear')

#first bits
print('welcome to hangman!')
time.sleep(1)

secret = input('what is the secret to guess?\n').lower()

print('pass to player 2')
def countdown(t):
    while t:
        mins, secs = divmod(t, 60)
        timer = '{:02d}:{:02d}'.format(mins, secs)
        print(timer, end='\r')
        time.sleep(1)
        t -= 1
t=5
countdown(int(t))
clear_screen()

#variables
guessed_letters = []
points = 0
max_points = 7

#game loop
while True:
    current_phrase = ""
    for letter in secret:
        if letter in guessed_letters:
            current_phrase += letter + " "
        elif letter == " ":
            current_phrase += "  "
        else:
            current_phrase += "_ "
    print('hangman!')
    print(f'points- {points}/{max_points}')
    print(f"guessed: {' '.join(guessed_letters)}")
    print('\n' + current_phrase)

    #check for win
    if "_" not in current_phrase:
        print('\nyou win!')
        print('the secret was {secret}')
        break
    #get guess
    guess = input("\nguess a letter, or say 'solve' to solve!\n")
    if guess == 'solve':
        solve_guess = input("\nwhat's your guess?\n")
        if solve_guess == secret:
            print('\nyou win!')
            print(f'the secret was {secret}')
            break
        else:
            print('incorrect! +1 point\n')
            points += 1

    elif len(guess) == 1 and guess.isalpha():
        if guess in guessed_letters:
            print(f'{guess} already guessed! try again')
        elif guess in secret:
            print('{guess} is in the secret!')
            guessed_letters.append(guess)
        else:
            print('{guess} is not in the secret. +1 point')
            points += 1
            guessed_letters.append(guess)
    else:
        print('\ntype only one letter, or "solve". no space before entering\ntry again\n')

    if points >= max_points:
        clear_screen()
        print('game over!\nout of guesses!')
        time.sleep(0.75)
        print(f'the secret was "{secret}"')
        break
time.sleep(5)
clear_screen()
