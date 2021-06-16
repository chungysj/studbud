import Navigation from './component/navigation';
import './component/tasklist';
import './component/dictionary';
import './component/pomodoro';
import './component/stopwatch';
import './component/music';

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