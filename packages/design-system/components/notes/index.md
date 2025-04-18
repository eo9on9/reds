## TailwindCSS

> Tailwind CSS는 사실상 **PostCSS 플러그인**.

PostCSS가 tailwind css 문법을 브라우저가 이해할 수 있게 해석/변환 해 주어야 함.

Tailwind에 들어있는 JIT(Just in Time) 엔진(컴파일러)는 실제 사용되는 클래스의 CSS만 생성해주는 기능인데, 이것도 PostCSS 플러그인 형태.

실제 사용되는 "클래스 이름을 문자열로 찾아서" 스타일을 생성.

```tsx
const regex = /class\s*=\s*["'`]([^"'`]+)["'`]/g // Tailwindcss 내부에서 이런 정규식 사용 따라서,
<div className={`bg-${color}`} /> // 이런건 불가능
```

<br><br>

## PostCSS

> PostCSS는 **CSS를 자바스크립트처럼 조작할 수 있게 해주는 파서/플러그인 엔진**.

CSS 파일을 읽어서 JS 객체로 바꾼 뒤, 플러그인들이 그 객체를 수정, 다시 CSS 문자열로 만들어주는 도구.

그 과정에서 CSS에 자동으로 브라우저 접두어 추가하거나, Tailwind 전용 지시문을 처리하거나, CSS를 압축하거나 한다.

<br><br>

## "Utility-First CSS" vs "Static CSS with Types" vs "CSS-in-JS"

### Utility-First CSS

> 미리 정의된 클래스 이름으로 스타일을 구성 (스타일은 HTML에 직접 작성)

pros - 실제 사용하는 스타일만 포함, CSS를 직접 작성하지 않아도 됨, 런타임 성능 향상

cons - 스타일과 JS 분리, 타입 안정성 저하, 동적 스타일 제한

ex) TailwindCSS

최근 사용율 폭증.. Next 공식 지원 때문?

### Static CSS with Types

> TypeScript 기반 정적 분석 + 빌드 타임 CSS 추출

pros - 타입 안정성, 스타일 추상화, 런타임 성능 향상

cons - 동적 스타일 제한

ex) Vanilla Extract, Stitches

### CSS-in-JS

> JS 안에서 CSS를 작성하고 런타임에 스타일 적용

pros - 스타일이 JS와 동적으로 결합, 상황에 맞는 스타일을 쉽게 제어 가능, 조건부 스타일링과 다이나믹 스타일을 처리하는 데 강점

cons - 런타임 성능 저하

ex) Emotion, Styled Components

CSS-in-JS 라이브러리들은 스타일을 런타임에 동적으로 생성하는데, 이 과정이 SSR에서 클라이언트와 서버 사이에서 차이를 만들어서 하이드레이션 오류를 일으킬 수 있음.

SSR을 위한 별도 설정이 필요?

<br><br>

## Variable fonts
