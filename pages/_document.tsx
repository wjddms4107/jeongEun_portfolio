import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lobster&family=Noto+Sans+KR&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Josefin+Sans&family=Lobster&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta property="og:url" content="https://jeong-eun-portfolio.vercel.app/"></meta>
        <meta property="og:title" content="Front_JeongEun Portfolio"></meta>
        <meta property="og:description" content="프론트엔드 개발자 노정은 포트폴리오입니다."></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
