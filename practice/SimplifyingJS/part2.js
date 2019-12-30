/*
자바스크립트의 코딩의 기술 - 조 모건

Part2, 배열로 데이터 컬렉션을 관리하라
1. 배열로 유연한 컬렉션을 생성하라
2. includes()로 존재 여부를 확인하라
3. 펼침연산자로 배열을 본떠라
4. push() 메서드 대신 펼침 연산자로 원본 변경을 피하라
5. 펼침연산자로 정렬에 의한 혼란을 피하라
*/

const TEAM = ['DD','BB','CC','AA'];

const alphabetizeTeam = (team) => {
    return [...team].sort();
}
console.log(alphabetizeTeam(TEAM));