export class SumMatch {
  public id?: string;
  public userId!: string | null;
  public entrie?: string | null;
  public data: { metadata: object, info: {
    game_datetime: number,
    game_length: number,
    game_variation: string,
    game_version: string,
    participants: object,
    queue_id: number,
    tft_set_number: number
  } };
}
