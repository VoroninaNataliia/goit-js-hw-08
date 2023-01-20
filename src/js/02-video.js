import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('play', throttle(onPlay, 1000));
console.log(localStorage);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
