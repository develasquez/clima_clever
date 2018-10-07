var express = require('express');
var router = express.Router();
var servicios= require('../models/_servicios');
_idToString = function (r) {
 for (i=0;i<r.length;i++){
 r[i]._id = r[i]._id.toString();
 }
return r
}
 _toList = function (req, res) {
      res.redirect('servicios/list');
};
 _list = function(req, res){
 servicios.list([],0,function(r,f) {
     try{
         r= _idToString(r);
         if (req.params.format !="json"){
             res.render('servicios', { title: 'Servicios', servicios : r });
         }else{
             res.send({data:r})
         }
     }catch(ex){
     }
 })
};
 _new = function(req, res){
 res.render('servicios_new', { title: 'new servicios' });
};
 _delete = function(req, res){
 var _id = req.params.id;
 servicios.delete([],_id,function(r,f) {
     try{
         r= _idToString(r);
         res.render('servicios', { title: 'Servicios', servicios : r });
     }catch(ex){
     }
 })
};
 _update = function(req, res){
 var _id = req.params.id;
 if (_id){
 servicios.update(req.body,_id,function(r,f) {
     try{
         r= _idToString(r);
         res.render('servicios_new', { title: 'Servicios', servicios : r[0] });
     }catch(ex){
     }
 })
}else{
 servicios.insert(req.body,function(r,f) {
     try{
         r = _idToString(r);
         res.render('servicios_new', { title: 'Servicios', servicios : r[0] });
     }catch(ex){
     }
     })
 }
};
 _range = function(req, res){
	res.render('servicios_range', { title: 'servicios' });
};
 _get = function(req, res){
     var _id = req.params.id.split(".")[0];
     var _format = req.params.id.split(".")[1];
     servicios.find(_id,function(r,f) {
     try{
        r = _idToString(r);
         if (_format !="json"){
            res.render('servicios_new', { title: 'Servicios', servicios : r[0] });
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