import Navigation from './component/navigation';
import './component/tasklist';

const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

// For Each loop that allows us to loop through arrays or collections one by one and output each iteration or resulting item from each iteration as a input parameter as a call back function
// which then will passs down to any other functions 
// in this case we say for each of the link we want to add a event listener which listens out for the 'click' function and when that click function happens we want a console log out the link to the console
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    })
})

const subLinks = document.querySelectorAll('.sub-nav > ul > li > a')
const subPages = document.querySelectorAll('.sub-page-container')

var subNav = new Navigation(subLinks, subPages);

subNav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    })
})