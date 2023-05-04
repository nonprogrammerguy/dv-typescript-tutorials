/** 
 * Original js code
 * 
 * const year = document.getElementById('year');
 * const thisYear = new Date().getFullYear();
 * year?.setAttribute('datetime', thisYear);
 * year?.textContent = thisYear; 
**/

// 1st solution
const year : HTMLElement | null = document.getElementById('year');
const thisYear: string = new Date().getFullYear().toString();

if (year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear;
}
// 2nd Solution
const year2 : HTMLSpanElement = document.getElementById('year') as HTMLSpanElement;
const thisYear2: string = new Date().getFullYear().toString();

year2.setAttribute('datetime', thisYear2);
year2.textContent = thisYear;