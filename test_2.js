function test_2(string) {
    string = string.toLowerCase();

    let hashmap = {};
    
    for(let i = 0; i < string.length; i++) {
        if(hashmap[string[i]] == undefined) {
	   hashmap[string[i]] = 1;
	} else {
	   hashmap[string[i]] += 1;
	}
    }

    return hashmap;
}

console.log(test_2("JJFOweiJFSLjYRKECNkdd62348243793249"));
