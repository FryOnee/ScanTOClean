import scipy.io
import numpy as np
from PIL import Image
import os
import glob

# Wprowadź końcówkę pliku, którą chcesz znaleźć
koncowka_pliku1 = "*optimized_bw.mat"  # Przykładowa końcówka
koncowka_pliku2 = "*truth_grid.mat"  # Przykładowa końcówka

# Wprowadź ścieżkę do folderu, w którym chcesz szukać plików
sciezka_do_folderu = "Examples"  # Zastąp to właściwą ścieżką

# Utwórz pełną ścieżkę do przeszukiwanego folderu
sciezka_do_folderu = os.path.abspath(sciezka_do_folderu)

# Szukaj plików z określoną końcówką w podanym folderze
znalezione_pliki1 = glob.glob(os.path.join(sciezka_do_folderu, koncowka_pliku1))
znalezione_pliki2 = glob.glob(os.path.join(sciezka_do_folderu, koncowka_pliku2))

floors = []

#read
data = scipy.io.loadmat(znalezione_pliki1[0])
#save
output_directory = 'Floors_Png'
#output_directory2 = 'First_Floors_Png'

#print(len(data))
for i in range(1,len(data)-2):
     floors.append(data[f'floor_{i}'])

#print(len(floors[0]))

#for x in range(len(floors)):
#    for i in range(len(floors[x])):
#        for j in range(len(floors[x][i])):
#            print(floors[x][i][j], end='')
#        print()

# we are making new pngs (1 is black, 0 is white(propably))
for floor_index, floor_data in enumerate(floors):
    # sizes of these files
    image_width = len(floor_data[0])
    image_height = len(floor_data)

    # creating clear png
    image = Image.new('1', (image_width, image_height))

    # putting colors on that clear png
    for y, floor_row in enumerate(floor_data):
        for x, value in enumerate(floor_row):
            pixel_color = 0 if value == 0 else 1
            image.putpixel((x, y), pixel_color)


    file_path = f'{output_directory}\\floor_{floor_index + 1}.png'
    #file_path2 = f'{output_directory2}\\floor_{floor_index + 1}.png'
    # save png to these folders
    image.save(file_path)
    #image.save(file_path2)

Walls = []
# read
data = scipy.io.loadmat(znalezione_pliki2[0])

# save
output_directory = 'Walls_Png'

for i in range(1, len(data) - 2):
    Walls.append(data[f'truth_grid_{i}'])

for floor_index, floor_data in enumerate(Walls):
    # sizes of these files
    image_width = len(floor_data[0])
    image_height = len(floor_data)

    # putting colors on that clear png
    image = Image.new('RGBA', (image_width, image_height))

    # putting colors on that clear png.
    for y, floor_row in enumerate(floor_data):
        for x, value in enumerate(floor_row):
            pixel_color = (0, 0, 0, 0) if value == 0 else (255, 0, 0, 255) #pixel_color = (0, 0, 0, 0) if value == 0 else (0, 0, 0, 255)
            image.putpixel((x, y), pixel_color)

    file_path = f'{output_directory}\\wall_{floor_index + 1}.png'
    # save this walls on this floor
    image.save(file_path)