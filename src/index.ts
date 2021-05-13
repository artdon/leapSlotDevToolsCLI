import { AdkTitlePlayer } from './adkTitlePlayer/adkTitlePlayer';

const t: AdkTitlePlayer = new AdkTitlePlayer('Hello Title');
t.init(5);
t.up(2);

export { AdkTitlePlayer };