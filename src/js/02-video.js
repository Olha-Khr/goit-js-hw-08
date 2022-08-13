
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const getSavedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

if (getSavedTime) {
  player.setCurrentTime(getSavedTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(time) {
  let savedPausedPlayerTime = time.seconds;
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, savedPausedPlayerTime);
}
