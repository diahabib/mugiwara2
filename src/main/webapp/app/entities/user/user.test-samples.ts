import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 27936,
  login: 'o',
};

export const sampleWithPartialData: IUser = {
  id: 30208,
  login: 'R',
};

export const sampleWithFullData: IUser = {
  id: 27331,
  login: 'En',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
