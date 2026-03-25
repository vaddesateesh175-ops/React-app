import { DEC, INC } from "./actionType";

export function incAction() {
  return { type: INC };
}
export function decAction() {
  return { type: DEC };
}
