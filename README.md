# ☕weekly-coffee 주간커피☕

여러 로스터리 사업장과 소비자를 연결하는, <br>
원두 정기 구독 서비스를 제공합니다.

<br>

## 💡 담당 개발 서비스 - 구독 서비스 (client) 👤

다양한 원두를 소비자가 원하는 옵션에 맞춰 정기 구독 할 수 있는 구독 서비스를 개발 합니다

- 판매 제품 등록
- 주문 관리
- 마이페이지, 공지사항, 장바구니

<br>

---

<br>

## 🎯 개발 진행 기록 👀

<br>

### 2021-11-01

<details>
<summary>개발 환경 구성 [👈click]</summary>

### **개발 환경 구성**

1. 프로젝트용 Github repository 생성
2. Next.js 설치 및 라이브러리 설치
3. STS Spring boot 프로젝트 생성

</details>

<br>

### 2021-11-02

<details>
<summary>홈화면 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/2d869f888b360022bca2dc52e0388d68fbc5d019<br>
> - Develop Issue <br> https://www.notion.so/2021-11-02-cdee37cf621a44ecb3fbc22d1c52a294 <br>

<br>

### 진행 내용

- Next.js 코드 구조와 방식을 익혔습니다.
- 네비게이션바 , 로고 , 메인페이지 등 프론트 개발 기본 구조를 구현했습니다.
  <br>
  <br>

![화면 캡처 2021-11-03 014137](https://user-images.githubusercontent.com/87756895/139917351-34a1abc6-6792-4c9a-a8a5-cb083c86379a.png)
[](url)[](url)

<br>

### 참고 자료

- https://www.koke.kr/
- https://fritz.co.kr/
- https://imagecolorpicker.com/

<br>

---

</details>

<br>

### 2021-11-03

<details>
<summary>사이드바 및 제품목록 그리드 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/1912320b8a43f501b10bc21c8cd2af977acd5abb
> - Develop Issue
>   <br> https://www.notion.so/2021-11-03-d56fcedf92d142f9b61657e95a4ce045 <br>

<br>

### 진행 내용

- 왼편 사이드바를 구현했습니다.
- 각 컴포넌트에 import 했던 상단 nav바를 app.tsx 한 곳에 추가해 전역으로 적용되도록 변경하였습니다.
- 상품목록 (products)를 구현했습니다.
  - 그리드 구현 구현을 위해 화장품 오픈 API를 사용해서 제품 목록을 구현했습니다.
  - Next.js 에서 SSR(ServerSideRendering) 방식을 통해 오픈 API 데이터를 화면으로 가져오는 방법을 익혔습니다

<br>

![화면 캡처 2021-11-03 235558](https://user-images.githubusercontent.com/87756895/140133143-77eb0403-0e7e-4c0f-8215-12eb1ff721a1.png)

<br>

### 참고 자료

- <http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior>

<br>

---

</details>

<br>

### 2021-11-05

<details>
<summary> 제품상세 페이지 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/d59686d52a778f1a1d31999c35849189d74fb3b9

<br>

- Server Side Rendering 방식으로 api의 id값을 받아 제품 상세페이지로 이동하는 화면을 구현했습니다.
- Order Detail 옵션 선택 창 구현 중입니다.

<br>

![화면 캡처 2021-11-07 220058](https://user-images.githubusercontent.com/87756895/140647230-6c40755c-c518-49bd-89f8-a905324177ad.png)

<br>

---

</details>

<br>

### 2021-11-09

<details>
<summary> 주문화면, 마이페이지, 장바구니 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/372552606e609ff9e9b0f6bb10973567eade4682
> - Develop Issue
>   <br>
>   URL
>   <br>

<br>

- 장바구니 | 우측 추천제품 그리드 구현, 기타 정렬 및 버튼과 링크 구현
- 주문화면 | 좌측 각 input 과 우측 주문정보 (옵션) 등이 있는 카드 구현, 결제정보 테이블 구현
  - 결제하기 버튼 누르면 주문정보 백엔드로 보내주고 마이페이지로 이동하는 기능 구현 해야함
- 마이페이지 | 테이블에 마우스 올리면 호버 처리, 테이블 행 하나 클릭 시 각 주문의 상세페이지로 넘어가야함 (주문 상세 구현 예정), 오른편에 추천제품 SSR으로 불러오기 구현해야함

<br>

## 장바구니

![화면 캡처 2021-11-09 233559](https://user-images.githubusercontent.com/87756895/140948667-01ea2567-a9bb-4b26-9406-3357808075db.png)

<br>

## 주문화면

![화면 캡처 2021-11-09 233517](https://user-images.githubusercontent.com/87756895/140948265-2292d0f2-52f5-4409-86ff-113f6c9e5bb3.png)

<br>

## 마이페이지

![화면 캡처 2021-11-09 233436](https://user-images.githubusercontent.com/87756895/140948459-9b1ddccd-e032-4fbe-b5c7-0b9963ebf553.png)

<br>

### 참고 자료

- <https://fritz.co.kr/order/orderform.html?basket_type=all_buy&delvtype=A>

<br>

---

</details>

<br>

### 2021-00-00 (양식)

<details>
<summary> 요약 [👈click]</summary>

## Front-end / Back-end

<br>

> - Github commit
>   <br>
>   URL
> - Develop Issue
>   <br>
>   URL
>   <br>

<br>

-
-

<br>

사진 / 참고자료

<br>

---

</details>
