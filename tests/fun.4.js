
function foo(a,b,c) {
    print("hello",a,b,c)
}

foo.call(null, 1,2,3);

[10,20,30].forEach(function (v,k,o) { print(v,k,o); });

print([10, 20, 30].every(function (v,k,o) { return v > 9 }));
print([10, 20, 30].some(function (v,k,o) { return v == 20 }));
print([10, 20, 30].map(function (v,k,o) { return v * v }));


