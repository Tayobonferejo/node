function example() {
    const num = 5;

    return function logNum() {
        console.log(num);
    }

}

example();

const innerFunction = example();


function makeFunction() {
    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        increment: () => {
            privateIncrement();
            console.log("incremented");
        }
    }
}

const { logNum, increment } = makeFunction();

logNum();
increment();
logNum();