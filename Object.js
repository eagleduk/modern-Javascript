const dog = {
    name: "강아지",
    sound: "멍멍",
    say: function () {
        console.log(this.sound);
    }
};

const cat = {
    name: "고양이",
    sound: "냐옹"
};

cat.say = dog.say;
dog.say();
cat.say();

// this가 포함된 함수를 객체화 하면 error가 발생한다.
const catsay = cat.say;
catsay();

// getter, setter 함수
const numbers = {
    _a: 1,
    _b: 2,
    _sum: 3,
    calculate() {
        this._sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    // 값이 변경될 때마다 sum 값을 계산하여 저장한다.
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}