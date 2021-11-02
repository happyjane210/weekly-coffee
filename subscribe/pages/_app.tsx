import "../styles/globals.css";
import "../styles/bootstrap-custom.scss";
import type { AppProps } from "next/app";

// Component : AppProps로 넘어온 컴포넌트는 현재페이지를 의미함
// 페이지 전환시 이 컴포넌트props가 변경됨

// pageProps : 데이터페칭 메서드를 통해 미리 가져온 초기 객체 - 서버사이드랜더링
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

// _app.tsx
// 페이지 전환시 레이아웃 유지 가능
// 페이지 전환시 상태값 유지 가능
// componentDidCatch를 이용해 커스텀 에러 핸들링 할 수 있음
// 추가적인 데이터를 페이지로 주입 가능
// 글로벌 CSS 이곳에 선언 (전체화면 공통적용)
