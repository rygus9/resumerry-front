const categoryValue = [
  { kind: 'all', value: '전체' },
  { kind: 'it', value: 'IT 인터넷' },
  { kind: 'business', value: '비즈니스' },
  { kind: 'marketing', value: '마케팅' },
  { kind: 'design', value: '디자인' },
  { kind: 'media', value: '미디어' },
  { kind: 'engineering', value: '엔지니어링' },
  { kind: 'edu', value: '교육' },
];

export type CategoryKindType =
  | 'all'
  | 'it'
  | 'business'
  | 'marketing'
  | 'design'
  | 'media'
  | 'engineering'
  | 'edu';

export default categoryValue;
