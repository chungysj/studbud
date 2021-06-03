import Navigation from './component/navigation';
import './component/tasklist';
import './component/dictionary';
import './component/timer';
const links = document.querySelectorAll('.timer-nav > ul > li > a');
const pages = document.querySelectorAll('.timer-page-container');

var timerNav = new Navigation(links, pages);
timerNav.getLinks();

timerNav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = timerNav.getHash(link);
        timerNav.setPage(pageId);
    })
})