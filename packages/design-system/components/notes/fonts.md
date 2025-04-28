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
