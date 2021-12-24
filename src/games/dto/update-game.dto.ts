export class UpdateGameDto {
  readonly id: number;
  readonly title: string;
  readonly platforms: Array<string>;
  readonly genres: Array<string>;
  readonly releaseDate: Date;
  readonly studios: Array<string>;
  readonly publishers: Array<string>;
}
