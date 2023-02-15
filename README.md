# sqlite를 활용한 고객관리자앱 프로젝트
- 제작자 : 안정원
- 깃허브 url : https://github.com/geniunahn/customerApp
- 프로젝트 url : https://port-0-customerapp-20z52flbz7mc39.gksl2.cloudtype.app/


# 제작 상황 및 목표
- 제작 상황 및 목표 : 작업 환경은 node.js, ejs, sequelize(sqlite).  sqlite 데이터 베이스를 다루는 기초적인 개념과 사용법을 익힌 상황에서 CRUD가 가능한 고객관리자 APP을 만들어야 한다. 

# 디자인 및 적용기술 설명
![1](https://user-images.githubusercontent.com/106502672/210034647-e58a34ec-0e38-40e0-abba-bf5b08a26465.jpg)
![2](https://user-images.githubusercontent.com/106502672/210034649-3fc329b9-410d-454c-bef0-9a2617654524.jpg)
![3](https://user-images.githubusercontent.com/106502672/210034653-c02f5c32-42e3-46a8-a481-6b4b5ce835bd.jpg)

# 제작 과정에서의 문제와 극복 과정
- 기초적인 CRUD 와 삭제시 비밀번호를 입력해야 하는 것은 이전의 연하장 프로젝트에서 json을 활용한 경험이 있었기 때문에 프로젝트를 완성하는 것은 예상한 것 보다 힘들지 않았다. 하지만 CRUD 과정에서 발생하는 부수전인 상황들, 이를테면 존재하지 않는 이름을 검색했을 때 해당 상황에 적절히 대응해주는 이벤트를 만드는 것은 한 번에 해결되지 않는 문제였다.
- 머리로는 어떻게 문제를 해결해야 하는지 방향이 떠올랐지만 그것을 실현시키는 코드를 만들지 못하니 애가 탔다. 인터넷으로 검색을 해 보아도 자신이 해결하고 싶은 문제를 정확히 짚고 해결하는 소스나 글을 찾기란 쉬운 일이 아니었다. 

# 개발자 노트
# 12월 30일
- 검색 결과와 일치하는 값이 없으면 그에 맞는 텍스트가 나오도록 수정함
- 회원 정보 안내를 table 태그로 수정함

