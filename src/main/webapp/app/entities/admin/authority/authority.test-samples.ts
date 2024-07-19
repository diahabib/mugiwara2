import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd786010a-3bd9-4e34-a878-1b2a1605b979',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e243d786-19bf-46ed-bf85-112498574af1',
};

export const sampleWithFullData: IAuthority = {
  name: '1d323aba-b7de-4e9f-9969-cd8364adeb20',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
