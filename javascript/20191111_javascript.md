## javascript 

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript
const gugudan = (x) => {
        let ret = []
        for (let i = 1; i <= 9; i++) {
            ret[i] = x * i;
        }
        return ret;
    };
    const printResult = (n, ret) => {
        document.write(`<h2>${n}단 구현</h2>`);
        for (let i = 1; i <= 9; i++) {
            document.write(`${n} x ${i} = ${n * i} <br>`);
        }
    };
    const main = () => {
        for (let i = 2; i <= 9; i++) {
            let result = gugudan(i);
            printResult(i, result);
        }
    };
    main()

```

```
push() : 맨뒤 추가
shift() : 맨앞 제거
unshift() : 맨앞 추가
pop() : 맨뒤 제거
splice(a,b,c) : a번째에서 b갯수만큼 수정

```

```
cd : 경로 이동
ls : 현재 디렉토리 구성
rmdir : 디렉토리 제거
mkdir : 디렉토리 추가
touch : 파일 추가
```

 

#### function 함수

- 함수는 한 번에 한 가지 일(역활)을 할 것
- 전역변수를 사용하지 말 것
- 입력은 매개변수로 받을 것



구구단을 함수(기능)로 바꾼 코드

```javascript
const gugudan = (x) => {
        let ret = []
        for (let i = 1; i <= 9; i++) {
            ret[i] = x * i;
        }
        return ret;
    };
    const printResult = (n, ret) => {
        document.write(`<h2>${n}단 구현</h2>`);
        for (let i = 1; i <= 9; i++) {
            document.write(`${n} x ${i} = ${n * i} <br>`);
        }
    };
    const main = () => {
        for (let i = 2; i <= 9; i++) {
            let result = gugudan(i);
            printResult(i, result);
        }
    };
    main()


```

gugudan(x) 함수는 계산하는 기능

printResult(n,ret) 함수는 출력

main() 함수는 구구단 메인 함수122



#### Object 객체

```javascript
human1 = {
  name: '홍길동',
  money: 50,
  //객체에서는 arrow fucntion 사용 하면 안된다.
  /*
  work : () => {블라블라}
  */
  /*work: function(hour){
    this.money += 100 * hour;
  }
  */
  work(hour){
     this.money += 100 * hour;
  }
}

human1.work(2);
z
```

**`arrow function`** 을 사용 하면 안되는 경우

- 객체의 메소드를 정의 할 때는 사용하면 안된다. (객체의 this를 바인딩하지않고 전역객체가 바인딩)
- 생성자 함수로 사용할수없음
- addEventListener 함수의 콜백 함수에서 사용하면 this가 상위 컨텍스트