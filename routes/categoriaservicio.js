var express = require('express');
var router = express.Router();
var categoriaservicio= require('../models/_categoriaservicio');
_idToString = function (r) {
 for (i=0;i<r.length;i++){
 r[i]._id = r[i]._id.toString();
 }
return r
}
 _toList = function (req, res) {
      res.redirect('categoriaservicio/list');
};
 _list = function(req, res){
 categoriaservicio.list([],0,function(r,f) {
     try{
         r= _idToString(r);
         if (req.params.format !="json"){
             res.render('categoriaservicio', { title: 'Categoriaservicio', categoriaservicio : r });
         }else{
             res.send({data:r})
         }
     }catch(ex){
     }
 })
};
 _new = function(req, res){
 res.render('categoriaservicio_new', { title: 'new categoriaservicio' });
};
 _delete = function(req, res){
 var _id = req.params.id;
 categoriaservicio.delete([],_id,function(r,f) {
     try{
         r= _idToString(r);
         res.render('categoriaservicio', { title: 'Categoriaservicio', categoriaservicio : r });
     }catch(ex){
     }
 })
};
 _update = function(req, res){
 var _id = req.params.id;
 if (_id){
 categoriaservicio.update(req.body,_id,function(r,f) {
     try{
         r= _idToString(r);
         res.render('categoriaservicio_new', { title: 'Categoriaservicio', categoriaservicio : r[0] });
     }catch(ex){
     }
 })
}else{
 categoriaservicio.insert(req.body,function(r,f) {
     try{
         r = _idToString(r);
         res.render('categoriaservicio_new', { title: 'Categoriaservicio', categoriaservicio : r[0] });
     }catch(ex){
     }
     })
 }
};
 _range = function(req, res){
	res.render('categoriaservicio_range', { title: 'categoriaservicio' });
};
 _get = function(req, res){
     var _id = req.params.id.split(".")[0];
     var _format = req.params.id.split(".")[1];
     categoriaservicio.find(_id,function(r,f) {
     try{
        r = _idToString(r);
         if (_format !="json"){
            res.render('categoriaservicio_new', { title: 'Categoriaservicio', categoriaservicio : r[0] });
         }else{
             res.send({data:r})
         }
     }catch(ex){
  }
})
};
/*
Excaffold generated routes
*/
router.get('/',_toList);
router.get('/list',_list);
router.get('/list.:format/',_list);
router.get('/new', _new);
router.post('/new', _update);
router.get('/:id/delete', _delete);
router.delete('/:id', _delete);
router.get('/:id/update', _update);
router.get('/:id/range',_range);
router.get('/:id', _get);
router.post('/:id', _update);
router.put('/:id', _update);
module.exports = router;