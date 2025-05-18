export class EnumType {
  key!: number;
  label: string | undefined;

  constructor(key: number, label: string | undefined) {
    this.key = key;
    this.label = label;
  }
}
