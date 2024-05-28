//Módulos = É um arquivo externo que contém código reutilizável que pode ser importado para outros arquivos JavaScript. Digamos que você escreve um programa difícil, qualquer parte desse programa você pode importar para um aplicativo diferente, se você não quiser reescreve-lo. Módulos podem conter variáveis, classes, funções... e mais. Módulos es6 foram introduzidos como parte da atualização ecmascript 2015.

import {PI,getCircumference,getArea, getVolume} from './mathUtil.js';

console.log(PI)

const circunferência = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(circunferência)
console.log(area)
console.log(volume)
