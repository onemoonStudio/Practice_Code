# Express generator 

## 사용법

1. express-generator global 설치
2. 원하는 폴더로 이동
3. express --view=hbs 입력
4. npm install 후 npm start

(nodemon 또한 gloabal로 설치가 되어 있어야 한다.)

### 변경사항

기본적인 router 로직 변경

기존 app.js 에서 라우터마다 require() 하는 것 보다 , router.js 를 만들어 router 라는 객체로 모든 라우터를 연결한 뒤 module.exports

npm start -> node ./bin/www 가 아닌 nodemon ./bin/www 로 변경

app.listen시 console 찍히도록 변경

