var express = require('express');
var router = express.Router();
var galeriacategoriaservicio= require('../models/_galeriacategoriaservicio');
_idToString = function (r) {
 for (i=0;i<r.length;i++){
 r[i]._id = r[i]._id.toString();
 }
return r
}
 _toList = function (req, res) {
      res.redirect('galeriacategoriaservicio/list');
};
 _list = function(req, res){
 galeriacategoriaservicio.list([],0,function(r,f) {
     try{
         r= _idToString(r);
         if (req.params.format !="json"){
             res.render('galeriacategoriaservicio', { title: 'Galeriacategoriaservicio', galeriacategoriaservicio : r });
         }else{
             res.send({data:r})
         }
     }catch(ex){
     }
 })
};
 _new = function(req, res){
 res.render('galeriacategoriaservicio_new', { title: 'new galeriacategoriaservicio' });
};
 _delete = function(req, res){
 var _id = req.params.id;
 galeriacategoriaservicio.delete([],_id,function(r,f) {
     try{
         r= _idToString(r);
         res.render('galeriacategoriaservicio', { title: 'Galeriacategoriaservicio', galeriacategoriaservicio : r });
     }catch(ex){
     }
 })
};
 _update = function(req, res){
 var _id = req.params.id;
 if (_id){
 galeriacategoriaservicio.update(req.body,_id,function(r,f) {
     try{
         r= _idToString(r);
         res.render('galeriacategoriaservicio_new', { title: 'Galeriacategoriaservicio', galeriacategoriaservicio : r[0] });
     }catch(ex){
     }
 })
}else{
 galeriacategoriaservicio.insert(req.body,function(r,f) {
     try{
         r = _idToString(r);
         res.render('galeriacategoriaservicio_new', { title: 'Galeriacategoriaservicio', galeriacategoriaservicio : r[0] });
     }catch(ex){
     }
     })
 }
};
 _range = function(req, res){
	res.render('galeriacategoriaservicio_range', { title: 'galeriacategoriaservicio' });
};
 _get = function(req, res){
     var _id = req.params.id.split(".")[0];
     var _format = req.params.id.split(".")[1];
     galeriacategoriaservicio.find(_id,function(r,f) {
     try{
        r = _idToString(r);
         if (_format !="json"){
            res.render('galeriacategoriaservicio_new', { title: 'Galeriacategoriaservicio', galeriacategoriaservicio : r[0] });
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