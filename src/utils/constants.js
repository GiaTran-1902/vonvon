export const TIME_FORMAT = 'HH:mm';
export const STORAGE_TOKEN = 'token';
export const BASE_URL = process.env.RB_BASE_URL;
export const SWR_OPTIONS = {
  errorRetryCount: 0,
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateIfStale: false,
};

export const ROUTES = {
  home: '/',
  login: '/login',
  user: '/user',
  success: '/success',
  vonvon: '/vonvon',
  quiz: '/quiz',
  businessAffiliate: '/business-affiliate',
  sendOpinion: '/send-opinion',
  privacyPolicy: '/privacy-policy',
};

export const TYPE = {
  advertising: 'ADVERTISING_INQUIRY',
  feedback: 'FEEDBACK',
};

export const VALIDATE = {
  regexEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  regxEnglishKorean:
    /(\s*[a-zA-Z0-9\+]+\s*|(\s*[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+\s*))/,
  regexSpecialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  regexVietnamese:
    /[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệếỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/,
};
