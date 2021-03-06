## Flex布局



通过给父盒子添加flex属性，来控制子盒子的位置和排列方式



### 常见的父项属性



#### flex-direction设置主轴方向



默认主轴是水平的`x`轴



主轴和侧轴是会变化的， flex-direction 设置谁为主轴，剩下的就是侧轴

| 属性值         | 说明              |
| -------------- | ----------------- |
| row            | 从左到右   默认值 |
| row-reverse    | 从右到左          |
| column         | 从上到下          |
| column-reverse | 从下到上          |



#### justify-content 设置主轴上的子元素排列方式

| 属性值         | 说明                          |
| -------------- | ----------------------------- |
| flex-start     | 从头开始，主轴是x轴。则左到右 |
| flex-end       | 从尾开始                      |
| center         | 主轴居中对齐                  |
| space-around   | 平分剩余空间                  |
| space -between | 先两边贴边，再平分剩余空间    |



#### flex-wrap设置是否换行



```
flex-wrap: nowrap;//默认值，不换行
```



都排在一条轴线上，摆不下就就缩小每个盒子宽度，挤进去



#### align-items 设置侧轴上的子元素排列方式（单行 ）

| 属性值     | 说明                          |
| ---------- | ----------------------------- |
| flex-start | 从头开始，主轴是x轴。则左到右 |
| flex-end   | 从尾开始                      |
| center     | 居中对齐                      |
| stretch    | 拉伸                          |



#### align-content  设置侧轴上的子元素的排列方式（多行）



子项中出现换行`wrap`,才有效果

| 属性值         | 说明                             |
| -------------- | -------------------------------- |
| flex-start     | 在侧轴的头部开始排列             |
| flex-end       | 侧轴尾部开始排列                 |
| center         | 侧轴居中对齐                     |
| space-around   | 子项在侧轴平分剩余空间           |
| space -between | 侧轴先分布在两头，再平分剩余空间 |
| stretch        | 子项元素高度平分父元素高度       |



单行用align-items  多行用align-content



### 常见的子项属性



#### flex属性



分配剩余空间，用flex来表示占多少份数



#### align-self控制子项自己在侧轴上的排列方式



允许单个盒子与其他盒子有不一样的对齐方式，可覆盖`align-items`属性



```
span:nth-child(2) {
      /* 设置自己在侧轴上的排列方式 */
      align-self: flex-end;
}
```



#### order 属性定义项目的排列顺序



默认值为0，值越小排列越靠前