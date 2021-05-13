export class AdkTitlePlayer {
  private startValue: string;

  constructor(_startValue: string) {
    this.startValue = _startValue;
    this.init(0);
  }

  public up(num: number): string {
    let r = '';
    for (let i = 0; i < num; i++) {
      r += this.startValue;
    }
    return r;
  }

  public init(num: number): string {
    if (num === 0) {
      document.title = 'init #############################';
      return 'init : ' + this.startValue;
    }
    for (let i = 0; i < num; i++) {
      setTimeout(() => {
        const _num: number = 0;
        document.title = `#### ${this.startValue}:${_num} ####`;
      }, (i + 1) * 3000);
    }
    return 'init : ' + num + ' : ' + this.startValue;
  }
}
