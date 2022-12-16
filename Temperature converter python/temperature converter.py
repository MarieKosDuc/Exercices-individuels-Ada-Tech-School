import tkinter as tk


def farenheit_to_celsius():
    farenheit = temp_entry.get()
    celsius = (5 / 9) * (float(farenheit) - 32)
    result_lbl["text"] = f"{round(celsius, 1)} \N{DEGREE CELSIUS}"


window = tk.Tk()
window.title("Temperature Converter")
window.resizable(width=False, height=False)

entry_frame = tk.Frame(master=window)
temp_entry = tk.Entry(master=entry_frame, width=10)
temp_lbl = tk.Label(master=entry_frame, text="\N{DEGREE FAHRENHEIT}")

temp_entry.grid(row=0, column=0, sticky="e")
temp_lbl.grid(row=0, column=1, sticky="w")

convert_btn = tk.Button(
    master=window, text="\N{RIGHTWARDS BLACK ARROW}", command=farenheit_to_celsius)
result_lbl = tk.Label(master=window, text="\N{DEGREE CELSIUS}")

entry_frame.grid(row=0, column=0, padx=10)
convert_btn.grid(row=0, column=1, pady=10)
result_lbl.grid(row=0, column=2, padx=10)

window.mainloop()
