import axios from 'axios';

export function cls(...classnames: string[]) {
  return classnames.join(' ');
}

export function regExpression(
  regType: 'regEmail' | 'regPassword' | 'regUsername',
): RegExp {
  const expression = {
    regEmail:
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    regPassword:
      /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]).{8,20}/,
    regUsername: /([A-Za-z0-9]){4,12}/,
  };

  return expression[regType];
}

export interface ErrorObjectFromServer {
  field: string;
  message: string;
}

export interface ErrorFromServer {
  message: string;
  status: number;
  errors: ErrorObjectFromServer[];
  code: string;
}

export function axiosErrorHandling(err: any, handlingFn: (a: any) => void) {
  if (!axios.isAxiosError(err)) {
    console.log('not axios error');
    return;
  }

  if (err.response && err.response.data) {
    const errorData = err.response.data;
    if (errorData.errors && errorData.errors instanceof Array) {
      handlingFn(errorData.errors);
    } else {
      handlingFn([
        {
          field: 'NotDefinedServerError',
          message: '서버에 에러가 발생했습니다.',
        },
      ]);
    }
  } else if (err.response) {
    console.log(err.response);
    handlingFn([
      {
        field: 'NotDataBodyError',
        message: '에러 데이터가 없는 에러입니다.',
      },
    ]);
  } else if (err.request) {
    console.log(err.request);
    console.log('요청이 이루어 졌으나 응답을 받지 못했습니다.');
  } else {
    console.log('Error', err.message);
  }
}
