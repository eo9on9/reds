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

## TailwindCSS Layers

Tailwind 내부 스타일의 우선순위를 제어하고, 커스텀 스타일을 어디에 삽입할지 정하는 구조적인 개념

- base: 리셋, 기본 요소의 스타일 지정 `h1 { font-size: 2rem }`
- components: 재사용 가능한 UI 컴포넌트 스타일 정의 `.btn { @apply ... }`
- utilities: Tailwind 유틸리티 클래스 정의 `.text-xl { font-size: ... }`

우선순위는 항상 base < components < utilities

tsx에서 코드 작성 시 같은 레이어의 클래스라면 우선순위를 예측이 불가능?

<br/><br/>

## Tailwind가 불편하게 느껴지는 이유

스타일 책임을 분리하자고 해놓고 결국은 JS/TS 파일 안에서 Tailwind 클래스 다 적고 있음

탈 추상화가 가능한가?

거기에 JIT, 전처리기, 전용 문법(@apply, group, peer 등) 까지 알아야 함

cva, tailwind-variants 같은 추가 추상화 도구도 필요

자동완성, 타입 지원도 완벽하지 않음

Tailwind 클래스와 props 매핑의 어색함

Tailwind와 TS는 실제로 서로 아무 연관이 없어서(vscode 확장 프로그램이 어.느.정.도 감지해 주긴 하지만), TS에서 Tailwind에 설정한 값들을 타입으로 다시 선언해야 하고, 이는 설정이 추가/삭제/변경 될 때 같이 수정되어야 한다는 것을 의미

className을 동적으로 만드는 경우 JIT에서 감지되지 않음

css 우선순위 예측 어려움

## CSS in TS?

TS 안에서 스타일을 자연스럽게 정의

타입도 완벽하게 지원됨 (variant, token 등)

런타임 없는 방식도 있음 (ex: Vanilla Extract)

클래스는 신경 쓸 필요 없이 styles.button 같은 식으로 자동 생성
