# Consigne : en utilisant deux langages (j'ai choisi Python et Java), écrire un code qui calcule le temps d'exécution d'une fonction.
# Utiliser une fonction add(nombre1, nombre2), une fonction addArray (additionne un entier à chacun des éléments d'un tableau d'entiers)
# Pour finir, écrire une fonction qui calcule la factoriele d'un nombre de manière récursive

import time


def add(a, b):
    return a + b


def add_array(my_list, number):
    for el in my_list:
        el += number
    return my_list


def factorielle(number):
    if number == 0:
        return 1
    else:
        return number * factorielle(number - 1)


# get start time
start_time = time.time()

# execute function

# add(3, 4)
# add_array([3, 4, 1, 10], 1)
factorielle(253)

# get end time and total elapsed time
end_time = time.time()
total_time = end_time - start_time

print(total_time)

# runtime add: 0.0 s
# runtime add_array: 0.0 s
# runtime factorielle(5): 0.00098 s
# runtime factorielle(253): 0.00099 s
