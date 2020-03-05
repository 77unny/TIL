const tag = '[Promise]';
const data = {
    result: [
        {
            contents: '도리를 찾아서~',
            date: '19920601',
            user: 'Dory'
        },
        {
            contents: '와플번트 진짜 맛있었는데 왜 사라진거지 너무 속상하다',
            date: '20190327',
            user: 'Waffle'
        },
        {
            contents: '예쓰! 우리는 모두 위코더 룰루~',
            date: '20190729',
            user: 'Wecode'
        }
    ]
};
const url = 'https://baekcode.github.io/codesquad-FE/day4_search/keyword.json';

const foo = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
};
foo()
    .then(data => {
        const a = data.result;
        const b = [];
        a.forEach(v => b.push(v.date));
        return b;
    })
    .then(date => console.log(date));

fetch(url)
    .then(res => res.text())
    .then(data => {
        localStorage.setItem('test_json', data)
    });
