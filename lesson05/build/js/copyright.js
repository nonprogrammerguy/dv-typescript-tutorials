"use strict";
/**
 * Original js code
 *
 * const year = document.getElementById('year');
 * const thisYear = new Date().getFullYear();
 * year?.setAttribute('datetime', thisYear);
 * year?.textContent = thisYear;
**/
// 1st solution
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear;
}
// 2nd Solution
const year2 = document.getElementById('year');
const thisYear2 = new Date().getFullYear().toString();
year2.setAttribute('datetime', thisYear2);
year2.textContent = thisYear;
