# sqlite를 활용한 고객관리앱 프로젝트
- 제작자 : 안정원
- 깃허브 url : https://github.com/geniunahn/customerApp
- 프로젝트 url : https://port-0-customerapp-20z52flbz7mc39.gksl2.cloudtype.app/


# 제작 상황 및 목표
- 제작 상황 : node.js, ejs, sequelize(sqlite) 작업 환경에서 sqlite 데이터 베이스를 다루는 기초적인 개념과 사용법을 익힌 상황에서 CRUD가 가능한 고객관리자 APP을 만들어야 한다.
- 제작 목표 : sequelize 공식 홈페이지에 나와있는 기술 설명을 읽고 스스로 고민하며 CRUD가 가능한 고객관지자 APP을 만들어야 한다. 부족한 지식과 경험으로 최대한의 결과물을 내는 것이 본 프로젝트의 목표중 하나다. 다시말해 충분히 많은 기술과 경험이 준비된 상태가 아니라 빈 손으로 시행착오를 겪으며 프로젝트를 완성해야 한다는 말이다. 이것은 개발자가 모든 것을 알고 일하는 사람이 아니라 모르는 문제를 해결하는 사람이라는 본질을 직접 경험하게 하기 위한 의도적인 상황이므로 좌절하지 않고 목표한 결과물에 도달하는 것이 궁극적인 목표다.

# 디자인 및 적용기술 설명
![1](https://user-images.githubusercontent.com/106502672/209916729-8791f2dc-0449-4145-a6c7-b3e54fdda5ef.jpg)
![2](https://user-images.githubusercontent.com/106502672/209916735-fd57f829-7afe-4073-be5c-ff92884f0fe1.jpg)
![3](https://user-images.githubusercontent.com/106502672/209916740-accea5aa-390c-4fb3-a43d-82182b815c82.jpg)
![4](https://user-images.githubusercontent.com/106502672/209916742-76384cdc-f88a-4049-b17d-c23b119f1b7c.jpg)


# 제작 과정에서의 문제와 극복 과정
-  프로젝트가 요구하는 기술이 크게 어려운 것이 아니었음에도 불구하고 경험과 지식이 부족한 상태에서 작업을 하는 것은 심리적으로 압박이 따르는 일이었다. 짧은 시간 안에 공식홈페이지에 들어가서 낯선 언어를 하나씩 이해해 나가며 프로젝트를 만드는 경험은 고통이 따르는 인상 깊은 순간이었다.
- 기초적인 CRUD 와 삭제시 비밀번호를 입력해야 하는 것은 이전의 연하장 프로젝트에서 file DB로 해본 경험이 있었기 때문에 프로젝트의 기초 골격을 완성하는 것은 예상한 것 보다 힘들지 않았다. 하지만 CRUD 과정에서 발생하는 부수전인 상황들, 이를테면 틀린 비밀번호를 입력하거나, 존재하지 않는 이름을 검색했을 때 해당 상황에 적절히 대응해주는 이벤트를 만드는 것은 시행착오를 반복해도 극복되지 않는 문제였다.
- 머리로는 어떻게 문제를 해결해야 하는지 방향이 떠올랐지만 그것을 실현시키는 소스를 만들지 못하니 애가 탔다. 인터넷으로 검색을 해 보아도 자신이 해결하고 싶은 문제를 정확히 짚고 해결하는 소스나 글을 찾기란 쉬운 일이 아니었다. sequelize를 능숙하게 다루기 위해서는 앞으로 더 큰 노력이 필요하다는 것은 분명해 보인다. 그리고 이보다 더 어려운 데이터베이스를 다루는 것은 말할 것도 없을 것이다.

# TO DO LIST 
- 표를 table 태그로 만들 것
- db에 2개의 테이블을 만들어서 각각 하나의 페이지에서 운영할 수 있음. 
- db에 들어갈 테이블 이름을 자신이 원하는 것으로 
