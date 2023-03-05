
const input1 = document.querySelector(".input1");
// console.log(input1);
const input2 = document.querySelector(".input2");
// console.log(input2);
const input3 = document.querySelector(".input3");
// console.log(input3);

const btn1 = document.querySelector(".btn1");
// console.log(btn1);
const btn2 = document.querySelector(".btn2");
// console.log(btn2);
const submit = document.querySelector(".submit");
// console.log(submit);
const output1 = document.querySelector(".output1");
// console.log(output1);
const output2 = document.querySelector(".output2");
// console.log(output2);
const output3 = document.querySelector(".output3");
// console.log(output3);



submit.addEventListener("click", () => {
   
    // if(input1.value !== "" || input2.value !== "" || input3.value !== ""){
    //     alert("please enter the monthly");
    // }
    if (input1.value == "" || input2.value == "" || input3.value == "") {

        alert("please enter the input values");
    }
    
   

})



btn1.addEventListener("click", (e) => {

    // btn1.style.backgroundColor = "blue";
    btn1.classList.add("show");
    btn2.classList.remove("show");



    submit.addEventListener("click", (e) => {
        if (input1.value == "" || input2.value == "" || input3.value == "") {

            alert("please enter the input values");
        }
     
        let int = input2.value / 1200;

        let formula1 = (input1.value * int) * (1 + int) ** input3.value;
        let formula2 = (1 + int) ** input3.value - 1;

        let result = formula1 / formula2;
        // console.log(result);
        output1.innerText = Math.round(result).toLocaleString();

        let interest = (result * input3.value) - (input1.value);
        output2.innerText = Math.round(interest).toLocaleString();

        output3.innerText = Math.round(Number(input1.value) + interest).toLocaleString();

    })


})





btn2.addEventListener("click", (e) => {
    // btn2.style.backgroundColor = "blue";
    btn2.classList.add("show")
    btn1.classList.remove("show");

    submit.addEventListener("click", (e) => {

        

        input1.value !="";
    
        let int1 = input3.value * 12
        let int = input2.value / 1200;
    
        let formula1 = (input1.value * int) * (1 + int) ** int1;
        let formula2 = (1 + int) ** int1 - 1;
    
        let result = formula1 / formula2;
        // console.log(result);
        output1.innerText = Math.round(result).toLocaleString()
    
        let interest = (result * int1) - (input1.value)
        output2.innerText = Math.round(interest).toLocaleString()
    
    
        output3.innerText = Math.round(Number(input1.value) + interest).toLocaleString();
    
    })
    
    




})









