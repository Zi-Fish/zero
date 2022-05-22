const db = require('../db/index')
exports.getArticlecates = (req, res) => {
  // res.send('ok')
  const sql = `select * from ev_article_cate where is_delete=0 order by id asc`
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      status: 0,
      message: '获取文章分类数据成功',
      data: results,
    }
    )
  })
}
exports.addArticleCates = (req, res) => {
  const sql = `select * from ev_article_cate where name=? or alias=?`
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    if (err) return res.cc(err)
    if (results.length === 2) return res.cc('分类名称与分类别名被占用，请更换')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
      return res.cc('分类名称与分类别名被占用，请更换')
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换')
    //定义插入文章分类的 sql语句
    //执行插入文章分类的sql语句
    const sql = `insert into ev_article_cate set ?`
    db.query(sql, req.body, (err, results) => {
      if (err) return res.cc(err)
      if (results.affecteRows !== 1) return res.cc('新增文章分类失败')
      res.cc('新增文章分类成功', 0)
    })
  })
}
exports.deleteCateById = (req, res) => {
  // res.send('ok')
  const sql = `update ev_article_cate set is_delete=1 id=?`
  db.query(sql, req.params.id, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // SQL 语句执行成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('删除文章分类失败！')

    // 删除文章分类成功
    res.cc('删除文章分类成功！', 0)
  })

}
// 根据 Id 获取文章分类的处理函数
exports.getArtCateById = (req, res) => {
  // res.send('ok')
  const sql = `select * from ev_article_cate where id=?`
  db.query(sql, req.params.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('获取文章分类失败')
    res.send({
      status: 0,
      message: '获取文章分类成功',
      data: results[0],
    })
  })
}
exports.updateById = (req, res) => {
  // res.send('ok')
  const sql = `select * from ev_article_cate where ID<>? and (name=? or alias=?)`
  db.query(sql, [req.body.ID, req.body.name, req.body.alias], (err, results) => {
    if (err) return res.vv(err)
    if (results.length === 2) return res.cc('分类名称与别名被占用，请更换')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用，请更换后重试！')
    // 分类名称 或 分类别名 被占用
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')

    const sql = `update ev_article_cate set ? where Id=?`
    db.query(sql, [req.body, req.body.ID], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('更新文章分类失败')
    })
  })

}
