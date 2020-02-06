let nodes = [
    { "number": 1, "value": '', "target": "null", "source": "null" },
    { "number": 2, "value": '', "target": 8, "source": 1, "radius": 5 },
    { "number": 3, "value": '', "target": 9, "source": 1, "radius": 5 },
    { "number": 4, "value": '', "target": 10, "source": 1, "radius": 5 },
    { "number": 5, "value": '', "target": 11, "source": 1, "radius": 5 },
    { "number": 6, "value": '', "target": 12, "source": 1, "radius": 5 },
    { "number": 7, "value": '', "target": 13, "source": 1, "radius": 5 },
    { "number": 8, "value": '', "target": 14, "source": 2, "radius": 5 },
    { "number": 9, "value": '', "target": 15, "source": 3, "radius": 5 },
    { "number": 10, "value": '', "target": 16, "source": 4, "radius": 5 },
    { "number": 11, "value": '', "target": 17, "source": 5, "radius": 5 },
    { "number": 12, "value": '', "target": 18, "source": 6 },
    { "number": 13, "value": '', "target": 19, "source": 7 },
    { "number": 14, "value": '', "target": 20, "source": 8 },
    { "number": 15, "value": '', "target": 21, "source": 9 },
    { "number": 16, "value": '', "target": 22, "source": 10 },
    { "number": 17, "value": '', "target": 23, "source": 11 },
    { "number": 18, "value": '', "target": 24, "source": 12 },
    { "number": 19, "value": '', "target": 25, "source": 13 },
    { "number": 20, "value": '', "target": 26, "source": 14 },
    { "number": 21, "value": '', "target": 27, "source": 15 },
    { "number": 22, "value": '', "target": 28, "source": 16 },
    { "number": 23, "value": '', "target": 29, "source": 17 },
    { "number": 24, "value": '', "target": 30, "source": 18 },
    { "number": 25, "value": '', "target": 31, "source": 19 },
    { "number": 26, "value": '', "target": 32, "source": 20 },
    { "number": 27, "value": '', "target": 33, "source": 21 },
    { "number": 28, "value": '', "target": 34, "source": 22 },
    { "number": 29, "value": '', "target": 35, "source": 23 },
    { "number": 30, "value": '', "target": 36, "source": 24 },
    { "number": 31, "value": '', "target": 37, "source": 25 },
    { "number": 32, "value": '', "target": 38, "source": 26 },
    { "number": 33, "value": '', "target": 39, "source": 27 },
    { "number": 34, "value": '', "target": 40, "source": 28 },
    { "number": 35, "value": '', "target": 41, "source": 29 },
    { "number": 36, "value": '', "target": 42, "source": 30 },
    { "number": 37, "value": '', "target": 43, "source": 31 },
    { "number": 38, "value": '', "target": 44, "source": 32 },
    { "number": 39, "value": '', "target": 45, "source": 33 },
    { "number": 40, "value": '', "target": 46, "source": 34 },
    { "number": 41, "value": '', "target": 47, "source": 35 },
    { "number": 42, "value": '', "target": 48, "source": 36 },
    { "number": 43, "value": '', "target": 49, "source": 37 },
    { "number": 44, "value": '', "target": 50, "source": 38 },
    { "number": 45, "value": '', "target": 51, "source": 39 },
    { "number": 46, "value": '', "target": 52, "source": 40 },
    { "number": 47, "value": '', "target": 53, "source": 41 },
    { "number": 48, "value": '', "target": 54, "source": 42 },
    { "number": 49, "value": '', "target": 55, "source": 43 },
    { "number": 50, "value": '', "target": 56, "source": 44 },
    { "number": 51, "value": '', "target": 57, "source": 45 },
    { "number": 52, "value": '', "target": 58, "source": 46 },
    { "number": 53, "value": '', "target": 59, "source": 47 },
    { "number": 54, "value": '', "target": 60, "source": 48 },
    { "number": 55, "value": '', "target": 61, "source": 49 },
    { "number": 56, "value": '', "target": "null", "source": 50 },
    { "number": 57, "value": '', "target": "null", "source": 51 },
    { "number": 58, "value": '', "target": "null", "source": 52 },
    { "number": 59, "value": '', "target": "null", "source": 53 },
    { "number": 60, "value": '', "target": "null", "source": 54 },
    { "number": 61, "value": '', "target": "null", "source": 55 }

]

let links = [
    { "source": 0, "target": 1, "distance": 5 },
    { "source": 0, "target": 2, "distance": 5 },
    { "source": 0, "target": 3, "distance": 5 },
    { "source": 0, "target": 4, "distance": 5 },
    { "source": 0, "target": 5, "distance": 5 },
    { "source": 0, "target": 6, "distance": 5 },
    { "source": 1, "target": 7, "distance": 5 },
    { "source": 2, "target": 8, "distance": 5 },
    { "source": 3, "target": 9, "distance": 5 },
    { "source": 4, "target": 10, "distance": 5 },
    { "source": 5, "target": 11, "distance": 5 },
    { "source": 6, "target": 12, "distance": 5 },
    { "source": 7, "target": 13, "distance": 5 },
    { "source": 8, "target": 14, "distance": 5 },
    { "source": 9, "target": 15, "distance": 5 },
    { "source": 10, "target": 16, "distance": 5 },
    { "source": 11, "target": 17, "distance": 5 },
    { "source": 12, "target": 18, "distance": 5 },
    { "source": 13, "target": 19, "distance": 5 },
    { "source": 14, "target": 20, "distance": 5 },
    { "source": 15, "target": 21, "distance": 5 },
    { "source": 16, "target": 22, "distance": 5 },
    { "source": 17, "target": 23, "distance": 5 },
    { "source": 18, "target": 24, "distance": 5 },
    { "source": 19, "target": 25, "distance": 5 },
    { "source": 20, "target": 26, "distance": 5 },
    { "source": 21, "target": 27, "distance": 5 },
    { "source": 22, "target": 28, "distance": 5 },
    { "source": 23, "target": 29, "distance": 5 },
    { "source": 24, "target": 30, "distance": 5 },
    { "source": 25, "target": 31, "distance": 5 },
    { "source": 26, "target": 32, "distance": 5 },
    { "source": 27, "target": 33, "distance": 5 },
    { "source": 28, "target": 34, "distance": 5 },
    { "source": 29, "target": 35, "distance": 5 },
    { "source": 30, "target": 36, "distance": 5 },
    { "source": 31, "target": 37, "distance": 5 },
    { "source": 32, "target": 38, "distance": 5 },
    { "source": 33, "target": 39, "distance": 5 },
    { "source": 34, "target": 40, "distance": 5 },
    { "source": 35, "target": 41, "distance": 5 },
    { "source": 36, "target": 42, "distance": 5 },
    { "source": 37, "target": 43, "distance": 5 },
    { "source": 38, "target": 44, "distance": 5 },
    { "source": 39, "target": 45, "distance": 5 },
    { "source": 40, "target": 46, "distance": 5 },
    { "source": 41, "target": 47, "distance": 5 },
    { "source": 42, "target": 48, "distance": 5 },
    { "source": 43, "target": 49, "distance": 5 },
    { "source": 44, "target": 50, "distance": 5 },
    { "source": 45, "target": 51, "distance": 5 },
    { "source": 46, "target": 52, "distance": 5 },
    { "source": 47, "target": 53, "distance": 5 },
    { "source": 48, "target": 54, "distance": 5 },
    { "source": 49, "target": 55, "distance": 5 },
    { "source": 50, "target": 56, "distance": 5 },
    { "source": 51, "target": 57, "distance": 5 },
    { "source": 52, "target": 58, "distance": 5 },
    { "source": 53, "target": 59, "distance": 5 },
    { "source": 54, "target": 60, "distance": 5 }
]