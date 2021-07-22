강의
2021-07-21 : Part 3. JavaScript Essentials 강의 시작
메모
    1.Node.js 
        - npm init -y   ->  npm을 사용
        
        - npm install parcel-bundler -D ->  npm으로 package 설치
        
        - npm install lodash    ->  -D 없이 설치, 이유는 뒤에서 계속
        
        - npm install or npm i  ->  package에 정의된 modules를 설치, node_modules폴더를 생성
        
        - package.json(프로젝트에서 설치한 모듈을 관리하는 파일), package-lock.json(설치한 모듈에서 사용하는 모듈을 관리하는 파일) 
        
        - 위에 언급된 2개의 파일은 절대로 삭제하면 안됨
        
        - npm install시 -D 플래그 사용유무
            1) -D 플래그 사용 : 개발용 의존성 패키지 설치, 개발할 때만 필요한 패키지(package.json파일의 devDependencies에 명시)
            2) -D 플래그 사용 x : 일반 의존성 패키지 설치, 실제 웹 브라우저에서도 필요한 패키지(package.json파일의 dependencies에 명시)
        
        - parcel-bundler(개발서버 번들) 사용법
            1-1) package.json의 scripts에 명령어 정의
                "scripts": {
                    "gogo": "parcel index.html"
                }
            1-2) bundler사용
                npm run gogo
            1-3) 브라우저에서 확인
                http://localhost:1234
            
            2-1) scripts에 명령어 정의
                "scripts": {
                    "build": "parcel build index.html"
                }
            2-2) build 명령 사용
                npm run build
            2-3) dist 폴더에 난독화된 소스가 생성됨(브라우저 해석용 소스)
        
        - 유의적 버전(Semantic Vershoning, SemVer), 버전에 의미를 부여해서 구분하고 해석함
            1-1) ex) ^12.14.1 -> ^Major.Minor.Patch
                Major : 기존 버전과 호환되지 않는 새로운 버전
                Minor : 기존 버전과는 호환되는 새로운 기능이 추가된 버전
                Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전
                ^(캐롯) : Major버전 안에서 가장 최신 버전으로 업데이트 가능
                    lodash 버전이 ^4.17.21으로 명시된 경우 
                    -> npm update lodash시 4.xx.xx의 버전에서는 최신으로 update를 허용한다는 의미
                    lodash 버전이 4.17.21으로 명시된 경우 
                    -> npm update lodash시 4.17.21로만 update를 허용한다는 의미
        - git을 활용한 버전 관리
            1-1) 버전 관리가 불필요한 파일
                .cache, dist, node_modules는 버전관리가 따로 불필요
            1-2) .gitignore파일 생성
                파일 생성 후 git 버전 관리가 불필요한 파일을 정의한다.
            1-3) github에 push하기
                git add . 
                git commit -m""
                git push origin master
                이후에 github에서 확인하면 .gitignore파일에 정의된 파일은 관리하지않음

    2.JS 시작하기
        - ECMA 스크립트, 에크마 스크립트, ES6부터가 많이 달라졌음
        
        - babel(바벨) : 이전 버전의 javascript를 호환되는 버젼으로 변경해주는 컴파일러  
        
        - js파일 
            1) 사용할 대상이 되는 js파일에 정의 
                export default function getType(data) {
                    return Object.prototype.toString.call(data).slice(8,-1)
                }
            2) 사용할 js파일을 import하여 사용
                import getType from './getType'
        
        - 산술, 할당 연산자
            1) 산술 연산자 (+, -, *, /, %)
            2) 할당 연산자
                const : 재할당 불가능
                let : 재할당 가능

        - 비교, 논리 연산자
        


            

