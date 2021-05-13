import { AdkTitlePlayer } from './adkTitlePlayer/adkTitlePlayer';

const t: AdkTitlePlayer = new AdkTitlePlayer('Hello Title');
t.init(5);
t.up(2);
t.up(3);
t.up(4);

export { AdkTitlePlayer };
