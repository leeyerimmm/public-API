# Weekend Farm ☘️  
주말 농장 반응형 웹 사이트 


<br><br>  


## 1. Project Overview (프로젝트 개요)  


- **프로젝트 이름**: 주말농장  


- **목적**: 주말에 농장을 운영하며 취미로 즐기는 사용자들을 위해, 날씨 정보와 일정 관리, 커뮤니티 및 작물 추천 기능을 제공하는 웹 사이트


- **대상**: 자녀와 함께 건강한 활동을 원하는 젊은 부모, 직장인 

<br><br>  


## 2. Development Period (개발 기간)

### 개발 기간
-  2024-07-08 ~ 2024-07-22


<br><br>  


## 3. Key Features (주요 기능)

### 1. 날씨 정보 제공:

  - 주말 농장 운영에 필요한 온도, 바람, 습도, 강수량, 구름량의 날씨 정보를 실시간으로 제공


### 2. 일정 관리:

  - 작물을 관리할 때 일정을 관리하고 확인할 수 있는 기


### 3. 작물 추천:
  
  - 주말농장에서 키우기 좋은 작물 추천


<br><br>


## 5. Project Structure (프로젝트 구조)

```
Happypotato/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── board/          # 게시판 관련 Java 클래스
│   │   │   ├── Controls/       # 펀딩, 캠페인 관련 Java 클래스
│   │   │   ├── donation/       # 기부 관련 Java 클래스
│   │   │   └── join/           # 회원가입 관련 Java 클래스
│   │   ├── webapp/
│   │       ├── admin/          # 관리자 페이지 관련 파일
│   │       ├── css/            # 스타일시트 파일 (CSS)
│   │       ├── font/           # 폰트 파일
│   │       ├── images/         # 이미지 파일들
│   │       ├── join/           # 회원가입 관련 파일
│   │       ├── js/             # JavaScript 파일들
│   │       ├── my/             # 사용자 관련 파일
│   │       ├── payment/        # 결제 관련 JSP 파일
│   │       ├── sql/            # SQL 쿼리 파일
│   │       ├── sub/            # 서브 페이지 관련 JSP 파일
│   │       │   ├── campaign/   # 캠페인 관련 파일
│   │       │   ├── donation/   # 기부 관련 파일
│   │       │   ├── funding/    # 펀딩 관련 파일
│   │       │   ├── fundrasing/ # 모금함 관련 파일
│   │       │   └── notice/     # 공지사항 관련 파일
│   │       ├── views/          # 여러 페이지에서 공통으로 사용되는 템플릿 파일
│   │       ├── WEB-INF/        # 웹 애플리케이션의 설정 및 보안 파일들
│   │       └── index.jsp       # 메인 페이지 파일
└── README.md                   # 프로젝트 설명 파일

```



<br><br>

## 6. Tech Stack (기술 스택)

### Frontend
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![JSP](https://img.shields.io/badge/JSP-007396?style=for-the-badge&logo=java&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

### Tools
![Eclipse](https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Apache Tomcat](https://img.shields.io/badge/Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black)

<br><br>

## 7. Site Introduction (사이트 소개)
<br>

### 7-1. Default Page (기본 페이지)

| **페이지**            | **설명**                                                                                                                         | **이미지**                             |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| **메인**         | 전체 사이트의 대표 페이지로, 사용자에게 기부, 모금함, 펀딩, 캠페인, 공지사항 등의 정보를 한 눈에 제공합니다.| ![Main Page](./images/index.png)       |
| **기부**     | 이 페이지는 기부 페이지로, 현재 진행 중인 기부 프로젝트와 추천 모금함, 캠페인, 펀딩 등을 시각적으로 표시하여 사용자가 쉽게 탐색하고 참여할 수 있도록 구성되어 있습니다.| ![Donation Page](./images/donation.png)|
| **모금함**  | 기부와 관련된 모든 프로젝트를 탐색하고 기부할 수 있는 페이지입니다. 현재 진행 중인 기부의 상태와 목표 금액, 진행률, 모금 금액 등의 정보를 제공하며, 종료된 프로젝트에 대한 기록도 확인할 수 있습니다.          | ![Fundraising Page](./images/fundrasing.png)|
| **펀딩**      | 펀딩과 관련된 프로젝트를 확인하고 참여할 수 있는 페이지입니다. 각 프로젝트의 목표 금액과 현재 진행 상황 등을 시각적으로 확인할 수 있습니다. | ![Funding Page](./images/funding.png)  |
| **캠페인**     | 사회 공헌과 관련된 다양한 캠페인을 소개하는 페이지입니다. CSR 및 사회 공헌과 관련된 정보를 전달합니다.                              | ![Campaign Page](./images/campaign.png)|
| **공지사항**       | 사용자와 관리자에게 중요한 공지사항을 확인할 수 있는 페이지입니다. 새로운 공지사항을 확인하고 필요한 정보를 빠르게 얻을 수 있습니다. | ![Notice Page](./images/notice.png)    |

<br>


### 7-2. Log in & Sign up (로그인 및 회원가입)

| **페이지**   | **설명**                                                                 | **이미지**                          |
|--------------|------------------------------------------------------------------------|-------------------------------------|
| **로그인**   | 사용자가 기존 계정으로 사이트에 로그인하여 개인화된 서비스에 접근할 수 있는 페이지입니다. 로그인 후, 기부 내역, 펀딩 내역, 공지사항 등을 확인하고 프로젝트에 참여할 수 있습니다. | ![Log in Page](./images/login.png)  |
| **회원가입**  | 새로운 사용자가 계정을 생성하여 사이트의 모든 서비스에 접근할 수 있도록 돕는 페이지입니다. 회원가입 후 기부, 펀딩, 캠페인 참여 등 다양한 기능을 이용할 수 있습니다. | ![Sign up Page](./images/join.png)  |


<br>


### 7-3. User Information Page (내 정보 페이지)

| 페이지 | 설명 | 스크린샷 |
|-------------|------|-----------|
| **내 정보** | 사용자가 자신의 보유 금액, 후원 금액, 활동 내역 등을 확인하고 관리할 수 있는 페이지입니다. | ![User Info Page](./images/user_info.png) |


<br>


### 7-4. Payment Page (결제 페이지)

| 구분             | 설명                                                                                                                                                   | 이미지                                                 |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| **기부 결제** | 사용자가 기부할 금액을 입력하고, 결제할 수 있는 페이지입니다. 결제할 금액을 입력하고, 100% 기부를 선택한 후 '기부하기' 버튼을 클릭하여 기부를 완료할 수 있습니다.            | ![기부 결제 페이지](./images/donation_payment.png)     |
| **펀딩 결제** | 사용자가 펀딩 상품을 선택하고 결제할 수 있는 페이지입니다. 배송 정보와 결제 수단을 설정한 후 '펀딩결제 신청하기' 버튼을 클릭하여 펀딩을 완료할 수 있습니다. 결제 예정 금액이 명확히 표시됩니다. | ![펀딩 결제 페이지](./images/funding_payment.png)      |


<br>


### 7-5. End donation sign (기부 종료 표시)

| 상태                        | 설명                                                               | 이미지                               |
|-----------------------------|--------------------------------------------------------------------|-------------------------------------------|
| **기부 아이템 - 종료**      | 특정 기부 아이템 카드에는 "종료" 오버레이가 표시되며, 진행률 바가 "100%"로 나타납니다. 이를 통해 사용자는 완료된 캠페인을 쉽게 식별할 수 있습니다. | ![기부 아이템](./images/donation_sub_end.png) |
| **모금함 아이템 - 종료**    | 모금함 프로젝트의 경우, 목표에 도달하면 "종료" 오버레이가 표시되어 프로젝트가 성공적으로 완료되었음을 나타냅니다. | ![모금함 아이템](./images/fundrasing_end.png) |



<br>



### 7-6. Administrator Page (관리자 페이지)


| 관리자 페이지 | 설명 | 이미지지 |
|---------------|------|-----------|
| **기부 관리** | 기부 프로젝트를 관리하고, 목표 금액 달성 여부를 확인하며 수정 및 삭제할 수 있는 페이지입니다. | ![기부 관리 페이지](./images/maneger_donation.png) |
| **펀딩 관리** | 펀딩 아이템을 관리하고, 목표 금액 달성 여부를 확인하며 수정 및 삭제할 수 있는 페이지입니다. | ![펀딩 관리 페이지](./images/maneger_funding.png) |
| **캠페인 관리** | 새로운 캠페인을 생성하고, 수정 및 삭제할 수 있는 페이지입니다. | ![캠페인 관리 페이지](./images/maneger_campaign.png) |
| **공지사항 관리** | 새로운 공지사항을 작성하고 수정 및 삭제할 수 있는 페이지입니다. | ![공지사항 관리 페이지](./images/maneger_notice.png) |



