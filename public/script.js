import Navigation from './component/navigation';
import './component/tasklist';

const timerLinks = document.querySelectorAll('.timer-nav > ul > li > a')
const timerPages = document.querySelectorAll('.timer-page-container')

var timerNav = new Navigation(timerLinks, timerPages);
// For Each loop that allows us to loop through arrays or collections one by one and output each iteration or resulting item from each iteration as a input parameter as a call back function
// which then will passs down to any other functions 
// in this case we say for each of the link we want to add a event listener which listens out for the 'click' function and when that click function happens we want a console log out the link to the console
timerNav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = timerNav.getHash(link);
        timerNav.setPage(pageId);
    })
})