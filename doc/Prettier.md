#Prettier

## .prettierrc Config


- printWidth: **\<int\>**: 80,              

  换行字符串阈值

- tabWidth: **\<int\>**: 2,                 

  水平缩进的空格数

- useTabs: **\<bool\>**: false,

  使用 Tab 缩进而非空格

- semi: **\<bool\>**: true,                  

  句末加分号; true - 每条语句后添加分号, false - 只在可能导致ASI错误的行首添加分号

- singleQuote: **\<bool\>**: false,          

  用单引号; JSX/TSX 文件无视

- trailingCommas: **\<string\>**: none\es5\all,          

  最后一个对象元素加逗号

- bracketSpacing: **\<bool\>**: true,           

  对象，数组加空格; Example: { foo: bar }

- jsxBracketSameLinte: **\<bool\>**: false, 

  JSX 元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）

- alwaysParens: **\<string\>**: avoid\always,             

  (x) => {} 是否要有小括号

- rangeStart(0)/rangeEnd(Infinity): **\<int\>**,

  指定起止偏移字符格式化代码

- requirePragma: **\<bool\>**: false,      

  是否要注释来决定是否格式化代码
  ```
  /**
  *@prettier/@format
  */
  ```

- insertPragma: **\<bool\>**: false,

  prettier 格式化后标记 `@format`

- proseWrap: **\<string\>**: always\never\preserver            

  是否要折行; always - 超出 `printWidth` 时折行, never - 不折行, perserve - 按照文件原样折行