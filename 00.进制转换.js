/**
 * 十进制转任意
 * 4 % 2 = 0
 * 2 % 2 = 0
 * 1 % 2 = 1
 * 十: 4 = 二: 100
 * * */
function NumSystem(num, system = 2) {
    let arr = []
    while (num) {
        arr.push(Math.floor(num % system))
        num = Math.floor(num / system)
    }
    return arr.reverse().join('')
}
// console.log(NumSystem(48, 2))
// console.log(NumSystem(48, 8))
// console.log(NumSystem(48, 16))

/**
 * 任意进制转十进制
 * 规则:
 *      系数: 每个位上的数字, (157, 个位上系数是7, 十位是5, 百位是1)
 *      基数: 几进制基数就是几
 *      权: 一个数从右往左数, 从零开始进行编号, 这个编号就是该位置的权
 * 
 * BCD码(Binary-Coded Decimal)  二进码十进数,  国内称 8421码
 *      二进制:   1       1       1       1       1       1       1       1
 *      十进制: 128     64     32     16     (8       4       2       1)    
 *      0b10110 = 16 + 0 + 4 + 2 + 1 
 *      88 = 64 + 16 + 8 = 0b1011000
 *  
 * 规律: 
 *      任意进制到十进制的转换都等于: 这个数据的各个位上的 (系数*基数^权) 相加的和
 *          十进制: 157 = (7 * 10 ^ 0) + (5 * 10 ^ 1) + (1 * 10 ^ 2) = 157 
 *          二进制: 0b1100 = 0 + 0 + (1 * 2 ^ 2) + (1 * 2 ^ 3) = 12
 * * */
function towTen(num, system) {
    let sixteen = ['a', 'b', 'c', 'd', 'e', 'f']
    num = '' + num
    return [].reduce.call(num, (old, item, i) => {
        if (!(item*1) && item != 0) {
            item = sixteen.indexOf(item) + 10
        }
        return old + item * system ** (num.length - 1 - i)
    }, 0)
}
console.log(towTen(100, 2))
console.log(towTen(1647, 8))
console.log(towTen('abc', 16))