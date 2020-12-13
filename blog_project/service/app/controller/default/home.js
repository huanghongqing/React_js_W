'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'API now';
  }

  async getArticleList() {
    const sql='select article.id as id,'+
              'article.title as title, ' +
              'article.introduce as introduce, ' +
              'article.article_content as content ,' +
              'article.addTIme as addTime ,' +
              'article.view_count as view_count ,' +
              'type.typeName as typeName '+
              'from article left join type on article.type_id=type.id';
    const results= await this.app.mysql.query(sql);
    this.ctx.body={data:results};

  }
}

module.exports = HomeController;