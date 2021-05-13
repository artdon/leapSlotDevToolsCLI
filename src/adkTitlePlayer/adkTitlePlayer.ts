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
        let _num: number = 0;
        let rez: string = `#### ${this.startValue}:${_num} ####`;
        console.log(rez);
        document.title = rez;
      }, ((i + 1) * 3000));
    }
    return 'init : ' + num + ' : ' + this.startValue;
  }
}