function test_1(arr) {

    for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
    }

    return "上記の内容を出力しました。";
}

console.log(test_1(["あ","い","う","え","お"]));
