import qs from 'qs';
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
  client.post('/auth/sign-in', qs.stringify({ accountName, password }));

export interface JoinApiInput {
  accountName: string;
  nickname: string;
  email: string;
  password: string;
  years: number;
  category: string[];
  isWorking: boolean;
  role: 'NORMAL' | 'MR';
}

export interface JoinApiResult {
  id: number;
  accountName: string;
  email: string;
  emailVerified: boolean;
}

export const joinApi = ({ accountName, password, email }: JoinApiInput) =>
  client.post('/auth/sign-up', { accountName, email, password });

export interface EmailSendApiInput {
  receiverEmail: string;
}
export interface EmailSendApiResult {
  result: true;
}

export const emailSendApi = ({ receiverEmail }: EmailSendApiInput) =>
  client.post('/email/send', {
    receiverEmail,
  });

export interface EmailCheckApiInput {
  receiverEmail: string;
}

export interface EmailCheckApiResult {
  result: boolean;
}

export const emailCheckApi = ({ receiverEmail }: EmailCheckApiInput) =>
  client.post('/email/check', {
    receiverEmail,
  });

export interface NameValidApiInput {
  accountName: string;
}

export interface NameValidApiResult {
  result: boolean;
}

export const nameValidApi = ({ accountName }: NameValidApiInput) =>
  client.post('/member/exists', {
    accountName,
  });