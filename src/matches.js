export class MatchesCollection {
  constructor(matches = []) {
    this.matches = matches;
  }
  get() {
    console.log(this.matches);
  }
}
