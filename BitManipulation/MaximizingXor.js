function maximizingXor(l,r) {
    let s = l ^ r;
    console.log({s});
    let i = 1;
    while (s > 0) {
        i <<= 1;
        s>>=1
    }
    console.log({i});
    return i-1
}

maximizingXor(10,15)