export interface counterState {
  value: number;
}

export enum counterActionConstants {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface counterActionIncrement {
  type: counterActionConstants.INCREMENT;
}

interface counterActionDecrement {
  type: counterActionConstants.DECREMENT;
}

export type counterActionType = counterActionIncrement | counterActionDecrement;
