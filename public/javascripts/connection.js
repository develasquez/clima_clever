   var connection = {
       getRefData:function (ref,field) {
           if(!field){field = '_id'}
           $.ajax({
               dataType: "json",
               url: '/' + ref.replace(/_id$/, '') + '/list.json',
               success: function (json) {
                   $.each(json.data,function (index, element) {
                       $("#" + ref).append($("<option>").attr("value",element._id).text(element[field]));
                   })
                   $("#" + ref).val($("#" + ref).attr("value"));
               }
           });
       }
   }
