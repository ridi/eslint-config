module.exports = {
  extends: 'airbnb',
  rules: {
    // 클래스 메서드 안에서 반드시 this를 사용할 필요 없음
    'class-methods-use-this': 'off',

    // 줄 마지막 , 는 생략 가능
    'comma-dangle': 'warn',

    // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.spec.js'] }],

    // 행의 최대 길이는 140
    'max-len': ['warn', 140],

    // 가독성을 위해 private 변수 앞에 _ prefix 붙이기 허용
    'no-underscore-dangle': 'off',

    // 명시적으로 괄호를 사용할 경우 조건문 안에서 변수 선언 가능 (eslint default)
    'no-cond-assign': ['error', 'except-parens'],

    // 무한루프 while (true) 등의 구문을 허용
    'no-constant-condition': ['error', { checkLoops: false }],

    // ++ 문법은 for 루프안에서만 허용
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};