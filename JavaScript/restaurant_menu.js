const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'PUdding', 'Fruit Salad'];




const breakfastMenuItemsHTML = breakfastMenu.map(
    (item,index) =>`<p>Item ${index + 1}: ${item}</p>`
    // (item,index) =>{return `<p>Item ${index + 1}: ${item}</p>`} // Alternative 2
    // function (item,index) {return `<p>Item ${index + 1}: ${item}</p>`;} // Alternative 3
    // function myfun (item,index) {  // Alternative 4
    //     return `<p>Item ${index + 1}: ${item}</p>`;
    // }
).join(''); // tambien join('\n')
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
// console.log(breakfastMenuItemsHTML);
document.getElementById('breakfastTotalItems').innerHTML = `<p style="color:blue;">Total Item: ${breakfastMenu.length}</p>`;


let mainCourseItem = ''; 
mainCourseMenu.forEach(
    // (item,index) => (item,index) => { // JS no vio esto como un error. WHy?
    (item,index) => mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`
    // Agregando \n al final También funciona
);
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;
console.log(mainCourseItem);
document.getElementById('mainCourseTotalItems').innerHTML = `<p style="color:blue;">Total Item: ${mainCourseMenu.length}</p>`;


let dessertItem = '';
for (let index = 0; index < dessertMenu.length; index++) {
    dessertItem += `<p>Item ${index + 1}: ${dessertMenu[index]}</p>\n`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
// console.log(dessertItem);
document.getElementById('dessertTotalItems').innerHTML = `<p style="color:blue;">Total Item: ${dessertMenu.length}</p>`;



