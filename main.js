// COMPARISON OPERATORS 

// let x = 10;
// let y = "10";
// let d = "Spencer";
// let f = "Spencer";

// let result = x == y;
// value of two operand are equal

// let result = x != y;
// value of two operand are not eqaul

// let result = x > y;
// value of left operand is greater than the value of right operand

// let result = x < y;
// value of left operand is less than the value of right operand

// let result = x >= y;
// value of left operand is greater than or equal to the value of right operand

// let result = x <= y;
// value of left operand is less than or equal to the value of right operand

// let result = x === y;
// exactly equals, including type

// let result = x =! y;
// not equal in either value or type

// alert(result);

// for comparison operators expected results are in boolean

// LOGICAALLLLLLLLLLL OPERATORS

// let x = true;
// let y = false;

// let result = x || y;
// AND - && - all operand are true
//  OR - || - all operand are true or one

// alert(result);

// COMBINATION OF LOGICAL OPERATORS AND COMPARISON OPERATORS

// let x = 22 < 20;
// let y = 5 > 4;

// let result = x || y;

// alert(result);

// IF ELSE STATEMENT

// const agecalculation = () => {
//     let age = document.querySelector("#ageinput").value;
//     // alert(age);
//     if (age >= 18) {
//         alert("you can now vote!");
//     }else if (age > 12 ){
//         alert ("you are still in highschool");
//     }else if (age >= 0 && age <= 12){
//         alert("you are still a minor");
//     }else{
//         alert("not a valid age");
//     }
// }

// SWITHC CASE STATEMENT

// let age = 13;

// switch(true){
//     case(age >= 18):
//         alert("you can now vote!");
//     break;
//     case(age > 12 ):
//         alert ("you are still in highschool");
//     break;
//     case(age >= 0 && age <= 12):
//         alert("you are still a minor")
//     break;
//     default:
//         alert("not a valid age");
// }




// age is greater than or equal 18 = you can now vote
// age is greater than 12 and less than 18 = you are still a history
// age is less than 12 = you are still a minor

// let fruit = "apple"

// switch(fruit){
//     case "apple":
//         alert("wow u have chosen apple");
//     break;

//     case "banana":
//         alert("wow u have chosen banana");
//     break;
//     default:
//         alert("none of the above");
// }


const agecalculation = () => {
    let age = document.querySelector("#ageinput").value;
    // alert(age);
    if (age >= 0 && age <= 7) {
        message = "Early Childhood";
    }else if (age >= 8 && age <= 12){
        message = "Childhood";
    }else if (age >= 13 && age <= 16){
        message = "Early Teenager";
    }else if (age >= 17 && age <= 19){
        message = "Late Teenager";
    }else if (age >= 20 && age <= 35){
        message = "Early Adolescence";
    }else if (age >= 36 && age <= 60){
        message ="Adolescence";
    }else if (age >= 61 && age <= 100){
        message = "Elderly";
    }else{
        message="Age is too old";
    }

    document.querySelector("#answer").innerHTML = message;
}


