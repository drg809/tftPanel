export class User {
  public _id!: string;
  public email!: string | null;
  public password!: string | null;
  public token?: string | null;
  public name?:  string | null;
  public lastname?: string | null;
  public status?: number | null;
  public role?: string | null;
  public phone?: string | null;
  public deletedAt?: Date | null;
}
