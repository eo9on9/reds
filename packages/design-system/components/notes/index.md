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

<br><br>

## Variable fonts

참조 https://web.dev/articles/variable-fonts?hl=ko

웹 디자이너와 개발자에게 풍부한 서체 환경을 제공하기 위한 비용은 대역폭. 기존 웹 글꼴을 사용하면 사용되는 각 스타일에 대해 사용자가 별도의 글꼴 파일을 다운로드해야 하므로 지연 발생.

가변 글꼴은 스타일을 단일 파일로 패키징하여 이러한 문제를 해결.  
가변 글꼴은 '기본' 스타일에 '축'이라고 하는 연속 범위의 다른 스타일이 연결. 가장 일반적인 축은 두께. (두께 축 600은 SemiBold)

### 축

글꼴의 알려진 예측 가능한 특징인 두께, 너비, 광학 크기, 경사, 기울임꼴을 제어하는 5개의 등록된 축이 있음.

- 무게: wght font-weight 100-900
- 너비: wdth font-stretch 75%-125%
- 기울기: slnt font-style oblique 0deg–10deg
- 이탤릭: ital font-style normal italic
- 광학 크기: opsz font-optical-sizing 8-72

```css
@font-face {
  font-family: 'MyVariableFont';
  src: url('/fonts/MyVariableFont.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-stretch: 75% 100%;
  font-style: normal italic;
}
```
