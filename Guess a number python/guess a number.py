import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
import random

# number_to_guess = 25
min_number = int(0)
max_number = int(50)
number_to_guess = random.randint(0, 50)
print(f"Number to guess: {number_to_guess}")
tries = 0


def validate_number(event=None):
    players_guess = guess_entry.get()
    if players_guess.isdigit():
        players_guess = int(players_guess)
        if players_guess < min_number or players_guess > max_number or type(players_guess) != int:
            messagebox.showinfo(
                "Wrong choice", f"This number isn't between {min_number} and {max_number}")
        else:
            checkNumber(players_guess, number_to_guess)
    else:
        messagebox.showinfo(
            "Wrong choice", f"This isn't a valid number")


def checkNumber(number, number_to_guess):
    global tries
    tries += 1
    if number == number_to_guess:
        question_frame.destroy()
        win_frame.pack()
        if tries == 1:
            messagebox.showinfo(
                "You win", f"Congratulations, you won on your first try!")
        else:
            messagebox.showinfo(
                "You win", f"Congratulations, you won in {tries} tries!")
    elif number > number_to_guess:
        messagebox.showinfo("Too big!", f"Try a number smaller than {number}")
    elif number < number_to_guess:
        messagebox.showinfo("Too small!", f"Try a number bigger than {number}")


# Create a main window
window = tk.Tk()
window.title("Guess a number!")
window.geometry("250x300")

window.bind("<Return>", validate_number)

# Create a title frame
title_frame = ttk.Frame(master=window, padding=15)
title_lbl = ttk.Label(master=title_frame,
                      text=f"Enter a number between {min_number} and {max_number}")
title_lbl.pack()
title_frame.pack()

# Create a frame to enter the player's guess and a validation button
guess_frame = ttk.Frame(master=window)
guess_entry = ttk.Entry(master=guess_frame)

validate_btn = ttk.Button(
    master=guess_frame, text="OK!", command=validate_number)


guess_entry.grid(column=0, row=0)
validate_btn.grid(column=0, row=1)
guess_frame.pack()

# Create a question mark frame
question_frame = ttk.Frame(master=window, padding=15)
question_img = tk.PhotoImage(
    file="Exercices-individuels-Ada-Tech-School\Guess a number python\images\question.png")
question_img_label = ttk.Label(master=question_frame, image=question_img,
                               width=50, padding=5)
question_img_label.pack()
question_frame.pack()

# Create a win frame
win_frame = ttk.Frame(master=window, padding=15)
wim_img = tk.PhotoImage(
    file="Exercices-individuels-Ada-Tech-School\Guess a number python\images\win.png")
img_label = ttk.Label(master=win_frame, image=wim_img,
                      width=50, padding=5)
img_label.pack()
# win_frame.pack()


# Launches the main window
window.mainloop()
