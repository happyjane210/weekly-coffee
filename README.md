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
>   <br> https://www.notion.so/Form-input-form-block-button-ca32c5d35b0941bbb7bdd2a762b3d526

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

### 2021-11-11

<details>
<summary> SSR product + CSR cartItem 리덕스 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/c69e1c5fad51c95df538ba238c15643ed24a3018
> - Develop issue
>   <br> https://www.notion.so/SSR-CSR-state-9877dc1b6f744104b874cedac1497a08

<br>

- product는 serversideRender 인데 내가 입력하는 cartItem input 은 클라이언트사이드 라서 이 두개를 어떻게 묶어서 cartItem state로 보내야 할지 고민이 많았다.
- 어려움을 겪었지만 결론은 가능했던 것이었다.
- 왼쪽이 SSR로 불러온 제품정보, 오른쪽이 CSR input 으로 입력하는 옵션선택 정보

<br>

![화면 캡처 2021-11-13 164539](https://user-images.githubusercontent.com/87756895/141610626-4e0b38bc-beb4-43ce-a6a3-4c14d8d72a19.png)

<br>

---

</details>

<br>

### 2021-11-12

<details>
<summary> subscribe Redux state 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/1cb0437237eb7cd4cc5fc982e7396e18d6e9daca
> - Develop Issue
>   <br> https://www.notion.so/state-f1ace38024fc48219689ed4a8589d44f

<br>

- subscribe state를 cartItem 에서 넘어온 정보와 입력한 자료를 함께 묶어서 보내줘야 했다.
  - subscribe state 내부에 cartItem을 배열로 보내는데 어려움이 있었다

<br>

- state 에 배열 넣는 방법

![화면 캡처 2021-11-13 033655](https://user-images.githubusercontent.com/87756895/141646439-ce559d86-3847-43d1-a303-3de5016422e5.png)

<br>

- console에 찍힌 subsItem 모습

![화면 캡처 2021-11-13 033519](https://user-images.githubusercontent.com/87756895/141646555-ffdec5b9-a322-4bf6-81be-ecdc51893bf5.png)

<br>

- state에 추가된 모습

![화면 캡처 2021-11-13 031959](https://user-images.githubusercontent.com/87756895/141646619-f1b032e2-9e9c-4cfa-8915-f7a6beac5728.png)

<br>

---

</details>

<br>

### 2021-11-15

<details>
<summary>product, subcribe 메시지 큐 구현 (소비자 <--> 판매자) [👈click]</summary>

## Front-end && Back-end

<br>

> - Github commit
>   <br>
>   Front-end
>   <br> https://github.com/happyjane210/weekly-coffee/commit/f8c59e91d2db312433c8225a46f7387091c87e13 <br>
>   Back-end
>   <br> https://github.com/happyjane210/weekly-coffee/commit/87400d99d4bd688655482b4590b0e48c4660c6e0
> - Develop Issue
>   <br> https://www.notion.so/subscribe-8011c25da3074d8287139ff683876197

<br>

- 판매자 → 소비자 product 데이터를 rabbit 메시지 큐로 받아오기 구현
- 소비자 → 판매자 subscribe (결제) 데이터를 rabbit 메시지 큐로 받아오기 구현
- subscribe는 백엔드까지 구현 완료 하였고, 프론트와 연결 하기 위해서 Redux-saga 와 api 를 구현할 예정이다.
- 백엔드를 구현하면서 가장 신경 썼던 부분은 내 프론트와 백엔드 필드명과 타입, 그리고 메시지 큐 받는 쪽의 필드명과 타입이 일치해야 해서 그 부분을 맞추려고 노력했다.
- product로 백엔드와 프론트를 연결하는 과정에서 프론트 api, redux-saga, slice , 백엔드 service, controller를 구현하는 순서를 익혔다.

<br>

- postman 에서 소비자 → 판매자 쪽으로 주문을 보낸다.

![화면 캡처 2021-11-16 002128](https://user-images.githubusercontent.com/87756895/141886064-3bf0d4b2-43a9-440a-8f6d-4f96196d9db2.png)

<br>

- 메시지 큐를 판매자 측에 주문이 이렇게 실시간으로 뜬다.

![화면 캡처 2021-11-16 003601](https://user-images.githubusercontent.com/87756895/141886207-115f93fb-71eb-4163-bbb9-6fec70131a58.png)

![화면 캡처 2021-11-16 003641](https://user-images.githubusercontent.com/87756895/141886270-2b4f6323-8cff-46d7-9cfe-305b20ff1fab.png)

<br>

- PostgresQL 에서도 조회가 된다. 판매 상품 데이터와 주문 데이터

![화면 캡처 2021-11-16 004406](https://user-images.githubusercontent.com/87756895/141886393-a3963591-1a1a-4367-8fab-c778329e1f72.png)

<br>

![화면 캡처 2021-11-16 004608](https://user-images.githubusercontent.com/87756895/141886423-9a32f88f-83c5-45f0-9bb5-64abd041c2db.png)

<br>

- 내 쪽에서 SSR으로 불러온 판매 목록

![화면 캡처 2021-11-16 011240](https://user-images.githubusercontent.com/87756895/141886495-e6b1c773-b9d6-467e-b458-4a34c47ba3b8.png)

<br>

---

</details>

<br>

### 2021-11-16

<details>
<summary>subscirbe 백엔드 프론트 연동, 주문 추가 구현 [👈click]</summary>

## Front-end && Back-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/d16d1a8c19743fc945f082ceca1b584d621f31ff
> - Develop Issue
>   <br> https://www.notion.so/e7b0af95bd5748cea4de5c81bd8b2787

<br>

- subscribe 백엔드 구현 후 프론트에서 subscirbe redux-saga , api 를 통해 백엔드와 연동을 구현했다.
- 첫 홈페이지에서 slice 의 initial state 데이터로 넣어 놓은 데이터를 localhost 서버 SSR 으로 교체했다.

<br>

- 화면에서 넣은 주문이 local 서버로 잘 들어가는 모습

![화면 캡처 2021-11-16 164821](https://user-images.githubusercontent.com/87756895/142095523-7d4112e3-40c6-45e3-93d0-78ea5a2de92c.png)

<br>

---

</details>

<br>

### 2021-11-17

<details>
<summary>장바구니 디테일, 추천 상품 구현 [👈click]</summary>

## Front-end

<br>

> - Github commit
>   <br> https://github.com/happyjane210/weekly-coffee/commit/30da56c8341c355fea03d9c07092236bfb1a5d91
> - Develop Issue
>   <br>
>   URL

<br>

-
-

<br>

사진 / 참고자료

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
