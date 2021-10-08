export class CreateGameDto {
  readonly title: string;
  readonly platforms: Array<string>;
  readonly genres: Array<string>;
  readonly releaseDate: Date;
  readonly studios: Array<string>;
  readonly publishers: Array<string>;
}
