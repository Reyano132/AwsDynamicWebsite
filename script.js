$( document ).ready(function() {
    console.log( "ready!" );
    row_number=1


    $.fn.callAjax =function(input){
      $.ajax({
        url: 'https://<#API_ID#>.execute-api.ap-south-1.amazonaws.com/v0/getTasks',
        type: 'POST',
        contentType: 'application/json',
        crossDomain: true,
        data: JSON.stringify(input),
        success: function(response){
          console.log(response['Items'])
          $.fn.updateTable(response['Items']); 
        }
      });
    }

    $.fn.updateTable = function(Items) {  
          table="<table class='table table-bordered'><thead><tr><th scope='col'>Index</th>"
          table+="<th scope='col'>Task</th></tr></thead><tbody>"
          for(i=0;i<Items.length;i++){
            table+="<tr><th scope='row'>"+Items[i]['id']+"</th>"
            table+="<td>"+Items[i]['task']+"</td>"
            table+="</tr>"
          }
          table+="</tbody></table>"

          document.getElementById("data").innerHTML=table
    }

    $.fn.callAjax({'action':'get tasks'}) //Initial Call

    $('#add_btn').click(function() {
      row_number+=1
      $.fn.callAjax({
        'action':'add task',
        'id':row_number.toString(),
        'task':document.getElementById("add_task").value
      })

      document.getElementById("add_task").value=""
    });

    $('#delete_btn').click(function() {
      $.fn.callAjax({
        'action':'delete task',
        'id':document.getElementById("delete_task_id").value
      })

      document.getElementById("delete_task_id").value=""
    });

    $('#update_btn').click(function() {
      row_number+=1
      $.fn.callAjax({
        'action':'add task',
        'id':document.getElementById("update_task_index").value,
        'task':document.getElementById("update_task_value").value
      })
      document.getElementById("update_task_index").value=""
      document.getElementById("update_task_value").value=""
    });
       
});