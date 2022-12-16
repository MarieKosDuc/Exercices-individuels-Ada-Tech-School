import tkinter as tk
from tkinter import ttk
import random

# Create a "Dice roll" function


def dice_roll():
    dice_result1["text"] = random.randint(1, 6)
    dice_result2["text"] = random.randint(1, 6)


# Create a window object
window = tk.Tk()
window.title("Roll those dice!")

window.columnconfigure(0, minsize=150)
window.rowconfigure([0, 1, 2], minsize=50)

# Create a frame for the dice image
dice_frame = tk.Frame()
dice_frame.pack()

# Create a dice image
photo = tk.PhotoImage(
    file="Exercices-individuels-Ada-Tech-School\Roll two dice python\images\dice-png.png")
image_label = ttk.Label(master=dice_frame, image=photo, padding=5)
image_label.pack(ipadx=10, ipady=10)

# Create a frame for the roll grid
roll_frame = tk.Frame()
roll_frame.pack()

# Create a "Roll button"
roll_btn = tk.Button(master=roll_frame, text="Roll",
                     padx=10, command=dice_roll)
roll_btn.grid(row=0, column=0, columnspan=2, sticky="nsew")

# Create labels
dice_result1 = tk.Label(master=roll_frame, padx=10, text="0")
dice_result1.grid(row=1, column=0, sticky="nsew", padx=10)
dice_result2 = tk.Label(master=roll_frame, padx=10, text="0")
dice_result2.grid(row=1, column=1, sticky="nsew", padx=10)


window.mainloop()
