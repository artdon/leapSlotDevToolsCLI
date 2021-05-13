import { AdkTitlePlayer } from '../adkTitlePlayer/adkTitlePlayer';


test('Init AdkTitlePlayer @@', () => {
  let n = new AdkTitlePlayer('@@');
  expect(n.init(3)).toBe('init : ' + 3 + ' : ' + '@@');
});
test('Init AdkTitlePlayer *', () => {
  let s = new AdkTitlePlayer('*');
  expect(s.init(2)).toBe('init : ' + 2 + ' : ' + '*');
});
test('Init AdkTitlePlayer UP*', () => {
  let s = new AdkTitlePlayer('*');
  expect(s.up(2)).toBe('**');
});