# Third-Party Login Practice

기본적인 Third-Party Login의 예제 폴더 입니다.

index.js & /middlewares/passport 에 서드파티 관련된 로직이 들어 있습니다.


## passport 관련

- 기본적으로 passport 관련 로직이 필요하다 ( serialize & deserialize )
- 따라서 세션 또한 설정해 줘야 한다.
- 기본적인 로그아웃은 서드파티 로그인 이더라도 <code>req.logout()</code>을 사용한다.

## kakao 

- 클라이언트 ID ( REST_KEY ) , 클라이언트 시크릿 필요
- [카카오 개발자](https://developers.kakao.com) 에서 callback 과 도메인 설정을 정확하게 해 주어야 한다. ( 도메인의 경우에는 port 번호까지 )
- /oauth/kakao & /oauth/kakao/callback 을 두개 다 사용해야 한다.
- /oauth/kakao/callback 에는 succesRedirect 와 failureRedirect 가 필요하다.

## facebook

## google

## youtube



## Reference 

[NPM](https://www.npmjs.com/)

[passport](http://www.passportjs.org/)

[카카오 개발자 센터](https://developers.kakao.com)
