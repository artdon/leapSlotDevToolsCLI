import { AdkTitlePlayer } from './adkTitlePlayer/adkTitlePlayer';

const t: AdkTitlePlayer = new AdkTitlePlayer('Hello Title');
setTimeout(() => {
  t.init(5);
}, 1000);
