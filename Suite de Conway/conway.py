# Créer une fonction decoupeChaine qui prend en paramètre une string
# et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace.

def decoupe_chaine(string):
    res_string = string[0]
    for x in range(1, len(string)):
        if string[x] == string[x-1]:
            res_string += string[x]
        else:
            res_string += " " + string[x]
    return res_string


result1 = decoupe_chaine("aabb")
result2 = decoupe_chaine("abbccddd")
# print(result1, result2)

# Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et
# renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en
# paramètre.


def decrit_chaine(string):
    res_string = string[0]
    for x in range(1, len(string)):
        if string[x] == string[x-1]:
            res_string += string[x]
        else:
            res_string += " " + string[x]
    res_list = res_string.split(' ')
    # print("tableau des résultats: ", res_list)
    res_def = ''
    for elem in res_list:
        res_def += str(len(elem)) + elem[0]
    return res_def


result3 = decrit_chaine('aabbc')

# print(result3)


# Créer une fonction suiteConway qui donne les n premiers termes de la suite
# qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.

def suiteConway(n, carac):
    print(carac)
    result = decrit_chaine(carac)
    print(result)
    for _ in range(n-2):
        print(decrit_chaine(result))
        result = decrit_chaine(result)


suiteConway(10, 'a')
suiteConway(4, '1')
