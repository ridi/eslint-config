module.exports = {
  extends: 'airbnb',
  rules: {
    // 프로퍼티 이름은 camelCase를 강제하지 않음
    // 참고: https://github.com/ridi/style-guide/blob/master/API.md#user-content-http-api-작성-가이드
    camelcase: ['error', { properties: 'never' }],

    // 클래스 메서드 안에서 반드시 this를 사용할 필요 없음
    'class-methods-use-this': 'off',

    // 행의 최대 길이는 120
    'max-len': ['warn', 120],

    // 문장의 마지막에 존재하는 주석 시작 전에 한 개 이상의 공백을 허용
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],

    'no-underscore-dangle': 'off',

    // `<label>` 태그가 컨트롤을 반드시 포함하지 않아도 됨
    // 참고: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': ['error', { required: 'id' }],
  },
};
