var app = document.getElementById('app')
var app1 = document.getElementById('app1')
var origin = document.getElementById('origin')
var node = document.getElementById('node')
var add = document.getElementById('add')
var remove = document.getElementById('remove')

var str = '有些时候产品会有这么个需求，希望给文章或者帖子给一个摘要，最多3行，或者其它行数，超出3行会补上。当然这种很简单，用css可以搞定。但是遇上要求多点的产品，希望补上的是，这样的话就难办了。我也在网上查了很多，至少我没发现有一个比较好的解决方案，也参考了微博和知乎的信息流，发现它们可能是根据文字的个数来算的，因为并没有看到有那种 刚好这4个字就处于最后一行的末尾';

origin.innerHTML = str

var maxWidth  = 360

textOverflow({ 
  node: app,
  str,
  addedStr: '...<a href="javascript:;">点击查看全文</a>',
  maxLine: 3,
  maxWidth,
  emptyLine: true
})

textOverflow({ 
  node: app1,
  str,
  addedStr: '...<a href="javascript:;">点击查看全文</a>',
  maxLine: 7,
  maxWidth,
  emptyLine: false
})

var userList = [
  '哎哎哎',
  '不不不',
  // '嘎嘎嘎',
  // '嘿嘿嘿',
  '😆😆😆',
  '😎😎😎',
  'xixixixi',
  '吼 吼 吼',
  'enenen',
  'gogogo',
  '哦哦哦'
];

textOverflow({
  node,
  str: convertUserListToHTML(userList),
  addedStr: `等${userList.length}觉得很赞`,
  maxLine: 2,
  maxWidth
})

var num = 0

add.onclick = function () {
  num++
  userList.push(`哟哟哟${num}`)
  var str = convertUserListToHTML(userList)
  textOverflow({
    node,
    str,
    addedStr: `等${userList.length}人觉得很赞`,
    maxLine: 2,
    maxWidth
  })
}

remove.onclick = function () {
  if (num <= 0) return
  num--
  userList.pop()
  var str = convertUserListToHTML(userList)
  textOverflow({
    node,
    str,
    addedStr: `等${userList.length}人觉得很赞`,
    maxLine: 2,
    maxWidth
  })
}

function convertUserListToHTML (array) {
  var html = ''
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      html += `<a href="#">${array[i]}</a>`
    } else {
      html += `<a href="#">${array[i]}</a>,`
    }
  }
  return html
}