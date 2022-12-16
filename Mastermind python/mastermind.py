from ctypes import windll
import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
import random

colors = ["Red", "Blue", "Green", "Yellow"]
guess = []
tries = 0
to_guess = []


# Generate a code with 4 random colors :
def generate_code(colors_table):
    code_table = []
    for _ in range(4):
        color = random.choice(colors_table)
        code_table.append(color)
    print(code_table)
    return code_table


to_guess = generate_code(colors)


def place_peg(color):
    peg = tk.Label(master=combination_frm, text=color,
                   background=color, width=3)
    if len(guess) < 4:
        guess.append(peg["text"])
        peg.pack(side=tk.LEFT, padx=5)
    else:
        messagebox.showinfo(
            "4 colors", "4 pegs only!")


def place_red_peg():
    place_peg("Red")


def place_blue_peg():
    place_peg("Blue")


def place_green_peg():
    place_peg("Green")


def place_yellow_peg():
    place_peg("Yellow")


def clear_combination():
    global guess
    guess = []
    for widget in combination_frm.winfo_children():
        widget.destroy()


def validate():
    # Updating the number of tries
    global tries
    tries += 1

    # Clearing the submit field and pushing the combination lower in the window
    number_ok = 0
    number_misplaced = 0
    to_guess_copy = to_guess.copy()
    pegs_frm = tk.Label(master=tries_frm)
    for color in guess:
        peg = tk.Label(master=pegs_frm, text=color, background=color, width=3)
        peg.pack(side=tk.LEFT, padx=5)
        for widget in combination_frm.winfo_children():
            widget.destroy()
    pegs_frm.grid(column=0)

    check_table = check_code(to_guess_copy, guess, number_misplaced, number_ok)

    # print(f"ok: {check_table[0]}, misplaced: {check_table[1]}, turn: {tries}")

    # Prints the number of pegs OK or misplaced :
    check_pegs = tk.Label(
        master=tries_frm, text=f"Colors ok: {check_table[0]} \n Colors misplaced: {check_table[1]}")
    check_pegs.grid(column=1)

    # Resets the "guess" list to zero
    clear_combination()

    # Check if win or lose
    win_or_lose(check_table[0])


def check_code(table1, table2, numOK, num_mis):
    # Checking the color combination
    for x in range(len(table1)):
        if table2[x] == table1[x]:
            numOK += 1
            table2[x] = "#"
            table1[x] = "*"
    for y in range(len(table1)):
        if table2[y] in table1:
            table1[table1.index(table2[y])] = "*"
            num_mis += 1
    return [numOK, num_mis]


def win_or_lose(combination):
    if combination == 4:
        messagebox.showinfo(
            "You win!", "Congratulations, you found the code!")
        for color in to_guess:
            peg = tk.Label(master=reveal_frm, text=color,
                           background=color, width=3)
            reveal_code.pack()
            peg.pack(side=tk.LEFT, padx=5)
    elif tries == 12:
        messagebox.showinfo(
            "You lose", "You haven't found the right combination. Check it on the board!")
        for color in to_guess:
            peg = tk.Label(master=reveal_frm, text=color,
                           background=color, width=3)
            reveal_code.pack()
            peg.pack(side=tk.LEFT, padx=5)


# Create main window
window = tk.Tk()
window.title("Mastermind")


# Fixing the blur on text
windll.shcore.SetProcessDpiAwareness(1)

# Create rules frame and content
main_frm = ttk.Frame(window, width=400).pack()
rules_frm = ttk.Label(master=main_frm).pack()
rules_lbl = ttk.Label(master=rules_frm, relief=tk.RIDGE, borderwidth=4,
                      padding=15, text="Guess a 4 color combination").pack()


# Creating peg buttons and packing them in a grid
peg_list_frm = ttk.Frame(window, padding=15)

red_peg_btn = tk.Button(master=peg_list_frm, text="Red", height=1, width=6,
                        background="red", command=place_red_peg)
blue_peg_btn = tk.Button(master=peg_list_frm, text="Blue", height=1, width=6,
                         background="blue", command=place_blue_peg)
green_peg_btn = tk.Button(
    master=peg_list_frm, text="Green", height=1, width=6, bg="green", command=place_green_peg)
yellow_peg_btn = tk.Button(
    master=peg_list_frm, text="Yellow", height=1, width=6, bg="yellow", command=place_yellow_peg)

pegs_list = [red_peg_btn, blue_peg_btn, green_peg_btn, yellow_peg_btn]

for index, peg in enumerate(pegs_list):
    peg.grid(row=0, column=index)

peg_list_frm.pack()

# Create a selected combination frame
select_frm = ttk.Frame(window, padding=15)
combination_frm = tk.Frame(master=select_frm)
buttons_frm = tk.Frame(master=select_frm)

validate_btn = tk.Button(
    master=buttons_frm, text="Submit combination", command=validate).pack()
clear_btn = tk.Button(master=buttons_frm,
                      text="Clear combination", command=clear_combination).pack()

buttons_frm.grid(row=0, column=1)
combination_frm.grid(row=0, column=0, ipadx=10)
select_frm.pack()

# Create a table for played combinations
tries_frm = ttk.Frame(window, padding=15)
tries_frm.pack()

# Create a frame for reveal
reveal_frm = ttk.Frame(window, padding=15).pack()
reveal_code = ttk.Label(master=reveal_frm, text="The code was:")


window.mainloop()
