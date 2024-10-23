export enum movementType {
  expense,
  income,
}
export interface Movement {
  id: string;
  name: string;
  category: string;
  amount: number;
  type: movementType;
}
