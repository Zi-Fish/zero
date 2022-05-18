// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址
  user: 'root', // 登录数据库的账号
  password: 'admin123', // 登录数据库的密码
  database: 'zrl', // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
//  db.query('select 1', (err, results) => {
//   // mysql 模块工作期间报错了
//   if(err) return console.log(err.message)
//   // 能够成功的执行 SQL 语句
//   console.log(results)
// }) 

// 查询 users 表中所有的数据
//  const sqlSt = 'select * from users'
//  db.query(sqlSt, (err, results) => {
//   // 查询数据失败
//   if (err) return console.log(err.message)
//   // 查询数据成功
//   // 注意：如果执行的是 select 查询语句，则执行的结果是数组
//   console.log(results)
// }) 

// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123
//  const user = { usesname: 'Spider-Man', passward: 'pcc123' }
// // 定义待执行的 SQL 语句
// const sqlSt = 'insert into users (usesname, passward) values (?, ?)'
// // 执行 SQL 语句
// db.query(sqlSt, [user.usesname, user.passward], (err, results) => {
//   // 执行 SQL 语句失败了
//   if (err) return console.log(err.message)
//   // 成功了
//   // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
//   // 可以通过 affectedRows 属性，来判断是否插入数据成功
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功!')
//   }
// }) 

// 演示插入数据的便捷方式
//  const user = { usesname: 'Spider-Man2', passward: 'pcc4321' }
// // 定义待执行的 SQL 语句
// const sqlSt = 'insert into users set ?'
// // 执行 SQL 语句
// db.query(sqlSt, user, (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功')
//   }
// }) 

// 演示如何更新用户的信息
//  const user = { id: 5, usesname: 'aaa', passward: '000' }
// // 定义 SQL 语句
// const sqlSt = 'update users set usesname=?, passward=? where id=?'
// // 执行 SQL 语句
// db.query(sqlSt, [user.usesname, user.passward, user.id], (err, results) => {
//   if (err) return console.log(err.message)
//   // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
//   if (results.affectedRows === 1) {
//     console.log('更新成功')
//   }
// }) 

// 演示更新数据的便捷方式
 const user = { id: 6, usesname: 'aaaa', passward: '0000' }
// 定义 SQL 语句
const sqlSt = 'update users set ? where id=?'
// 执行 SQL 语句
db.query(sqlSt, [user, user.id], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  }
}) 

// 删除 id 为 5 的用户
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
  if (results.affectedRows === 1) {
    console.log('删除数据成功')
  }
}) */

// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
