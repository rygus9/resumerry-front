import { CategoryKindType } from 'components/molcular/category/categoryValue';
import client from './client';

export interface LoginApiInput {
  accountName: string;
  password: string;
}
export interface LoginApiResult {
  access_token: string;
  refresh_token: string;
}

export const loginApi = ({ accountName, password }: LoginApiInput) =>
  client.post('/auth/login', { accountName, password });

export interface JoinApiInput {
  accountName: string;
  nickname: string;
  email: string;
  password: string;
  years: number;
  category: CategoryKindType;
  isWorking: boolean;
  role: 'NORMAL' | 'HR';
}

export interface JoinApiResult {
  id: number;
  accountName: string;
  email: string;
  emailVerified: boolean;
}

export const joinApi = ({ ...elem }: JoinApiInput) => {
  console.log({ ...elem });
  return client.post('/auth/sign-up', { ...elem });
};

export interface EmailSendApiInput {
  receiverEmail: string;
}
export interface EmailSendApiResult {
  result: true;
}

export const emailSendApi = ({ receiverEmail }: EmailSendApiInput) =>
  client.post('/valid/email/send', {
    receiverEmail,
  });

export interface EmailCheckApiInput {
  receiverEmail: string;
}

export interface EmailCheckApiResult {
  result: boolean;
}

export const emailCheckApi = ({ receiverEmail }: EmailCheckApiInput) =>
  client.post('/valid/email/check', {
    receiverEmail,
  });

export interface accountExistApiInput {
  accountName: string;
}

export interface accountExistApiResult {
  result: boolean;
}

export const accountExistApi = ({ accountName }: accountExistApiInput) =>
  client.post('/valid/account/exists', {
    accountName,
  });

export interface nicknameExistApiInput {
  nickname: string;
}

export interface nicknameExistApiResult {
  result: boolean;
}

export const nicknameExistApi = ({ nickname }: nicknameExistApiInput) =>
  client.post('/valid/nickname/exists', {
    nickname,
  });
