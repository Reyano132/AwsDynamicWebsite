import json
import boto3
import os
import logging

logger=logging.getLogger()
logger.setLevel(logging.INFO)

ddb = boto3.resource('dynamodb')
table_name=os.environ['TABLE']

def lambda_handler(event,context):
    table = ddb.Table(table_name)
    data=json.loads(event['body'])
    try:
        action=data['action']
        if(action=='add task'):
            table.put_item(Item={'id':data['id'],'task':data['task']})
        if(action=='update task'):
            table.update_item(
                Key={'id':data['id'] },
                UpdateExpression="set task=:t",
                ExpressionAttributeValues={":t":data['task']},
                ReturnValues="UPDATED_NEW"
            )
        if(action=="delete task"):
            table.delete_item(Key={'id':data['id']})
        res=table.scan()
    except Exception as e:
        logger.info(e)
    
    response= {
        'statusCode':200,
        'headers':{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        'body':json.dumps(res)
    }

    return response