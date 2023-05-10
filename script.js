const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
const p1 = document.getElementById('length')
const p2 = document.getElementById('volume')
const p3 = document.getElementById('mass')



btn.addEventListener('click', function(){
    if(inp.value){
    p1.textContent = `${inp.value} meters = ${inp.value * 3.28} feet | ${inp.value} feet = ${inp.value * 0.3} meters `;
    p2.textContent = `${inp.value} liters = ${inp.value * 0.26} gallons | ${inp.value} gallons = ${inp.value * 3.78} liters `;
    p3.textContent = `${inp.value} kilos = ${inp.value * 2.2} pounds | ${inp.value} pounds = ${inp.value * 0.45} kilos `;
    }
    inp.value = '';
})