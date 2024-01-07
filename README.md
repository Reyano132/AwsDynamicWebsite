# AwsDynamicWebsite
Creation of a Dynamic website using AWS S3, API gateway and lambda functions

# Architecture of Todo App:
![image](https://github.com/Reyano132/AwsDynamicWebsite/assets/42914404/a317a4d6-8205-4689-bd82-5de647385978)

To host this Todo app, follow the below steps:
1. Clone following GitHub repository: https://github.com/Reyano132/AwsDynamicWebsite
2. Create an S3 bucket in your account and upload DyanamicSiteCreation.json, index.html, error.html, script.js, and crudOnDB.zip.
3. In cloud formation UI, create a stack and pass the location of the site creation cloudformation template(DyanamicSiteCreation.json).
4. In input parameters, pass the name of you bucket in which you stored all the above files as SourceS3Bucket, and in DestinationS3Bucket, pass the name of the bucket in which you want to host your site.
![image](https://github.com/Reyano132/AwsDynamicWebsite/assets/42914404/8465c4e8-d2f0-494d-98c2-8a1244cf2bf1)

5. As we are creating new IAM roles for resources, check the checkbox that comes in before the submission.
6. After the creation of this stack, you'll get the website URL in the output tab.
![image](https://github.com/Reyano132/AwsDynamicWebsite/assets/42914404/a9767f79-9577-445e-a59d-c7bc9c13183a)

7. You'll see your Todo App :) 
![todoapp](https://github.com/Reyano132/AwsDynamicWebsite/assets/42914404/a081500b-7e4a-4c0b-8e22-64f905fb896a)


