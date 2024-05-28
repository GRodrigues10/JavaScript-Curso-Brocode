//Palavra chave estática = é uma palavra que define propriedades ou métodos que pertencem a uma classe em si, em vez dos objetos criados a partir dessa classe.(Em resumo, uma classe possui qualquer coisa estática, não os objetos).

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static circumference(radius){
//             return 2 * this.PI * radius ;
//         }

//     static area(radius){
//             return this.PI * radius * radius;
//         }
// }


// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10))
// console.log(MathUtil.circumference(10))
// console.log(MathUtil.area(10))


class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount ++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online!`)
    }
    sayHello(){
        console.log( `Hello, my username is ${this.username}!`)
    }
}

const user1 = new User('Bob Esponja');
const user2 = new User('Patrick');

const user3 = new User('Sandy');

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount()

