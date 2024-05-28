//O export é pra poder importar de outro arquivo js e usar esse aquivo como módulo.

export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius
}

export function getVolume(radius){
    return 4 * PI * radius * radius
}