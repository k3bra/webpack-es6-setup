import Util from './util.js'

export class MatchesCollection {
  constructor(matches = []) {
    this.matches = matches;
  }
  get() {
    Util.convert();
    console.log(this.matches);
  }
}
