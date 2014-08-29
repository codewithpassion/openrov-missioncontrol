module.exports = {
  setup: function(app, assets) {
    app.get('/', function (req, res) {
      res.render('index', {
        title: 'Express',
        scripts: assets.scripts,
        styles: assets.styles
      });
    });
  }
};