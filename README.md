# wordCard
word card for demo

2017-2-27 10:25:06
Distinguish work style and casual style

2017-2-28
<1>媒体查询 + inline-block 设置menu
<div.container>
    <ul class='inline-list'>
        <li></li>
        <li></li>
    </ul>
</div>
@media(min-width:1200px){
    .container{
        width:1170px;
    }
}
//注意媒体查询的顺序，如果为min-width则从小到大
->
.inline-list{
    list-style: none;
    padding-left:0;
    margin-left:-5px;
}
.inline-list>li{
    display:inline-block;
}

<2>采用rem相对布局注意事项
字体直接用px，而div等大小，需要采用rem设置

<3>可以使用媒体查询隐藏部分html，改变布局