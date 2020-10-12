/*
    + 计算机中有符号数据的表示
        - 符号: 用0, 1代表正,负号,放在数值的最高位
        - 计算机中, 有符号数有3种表示法: 原码,反码, 补码. 
        - 计算机中, 所有数据的运算都是采用补码进行
        - 计算机为什么使用补码计算 https://blog.csdn.net/sd631032049/article/details/72781138

    + 原码: 最高位表示数的符号, 其他位表示数值
         4(原) = 0b00000100
        -4(原) = 0b10000100
       
    + 反码: 
        - 正数的反码和原码相同
            4(反) = 0b00000100 = 4(原) 
        - 负数的反码是由器原码的符号位不变, 其余位按位取反
           -4(反) = 0b11111011

    + 补码: 
        - 正数的补码和原码相同, 
            4(补) = 0b00000100 = 4(原) 
        - 负数的补码是原码的符号位不变, 其余位按位取反, 最后在最低位加1
           -4(补) = 0b11111011 + 0b1 = 0b11111100
* */
