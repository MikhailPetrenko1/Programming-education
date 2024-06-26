/*
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3

Как правильно округлить 6.35?
*/

//Ответ: Разные округления связаны с неточностью бесконечной двоичной дробью, поэтому js либо добавляет небольшой хвост, либо немного уменьшает число. В приведенных примерах к 1.35 добавляется хвост, а число 6.35 немного уменьшается.
