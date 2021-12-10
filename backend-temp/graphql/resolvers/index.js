const { Article } = require("../../models");

module.exports = {
  articles: async () => {
    try {
      const articles = await Article.find();
      return articles.map((article) => ({
        ...article._doc,
        _id: article.id,
        createdAt: new Date(article._doc.createdAt).toISOString(),
      }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createArticle: async (args) => {
    try {
      const { title, body } = args.article;
      const article = new Article({ title, body });
      const saved = await article.save();
      return { ...saved._doc, _id: saved.id };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
