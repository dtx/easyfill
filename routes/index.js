
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Easyfill', theme: 0});
};

exports.fuckedup = function(req, res){
    res.send('fucked up');
};
