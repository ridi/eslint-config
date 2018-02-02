module.exports = {
  extends: 'airbnb',
  rules: {
    // 프로퍼티 이름은 camelCase를 강제하지 않음
    camelcase: ['error', { properties: 'never' }],

    // 클래스 메서드 안에서 반드시 this를 사용할 필요 없음
    'class-methods-use-this': 'off',

    // 행의 최대 길이는 140
    'max-len': ['warn', 140],

    // 문장의 마지막에 존재하는 주석 시작 전에 한 개 이상의 공백을 허용
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  },
};
