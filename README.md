<h1 align="center"> DP2 react dummy deploy</h1>

This project has the purpose to show how to deploy a reac app into a AWS S3 bucket.

## Run It

First, `git clone` the project and enter to the project folder. Then, follow the next instructions:

- Install all package dependencies

```shell
npm install
```

---

#### Run in _development_ mode:

- Runs the application is development mode. By defaullt it runs on port 3000.

```shell
npm start
```

Now got to [http://localhost:3000/](http://localhost:3000/)


#### Deploy to _AWS S3 bucket_:

- Deploys the app to an aws S3 bucket.

1. Make the build folder, wich will contain all required files for our app.

```shell
npm run build
```

<p align="center">
 <img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975369-e0482a00-a529-11eb-8ef5-735132a49060.png" alt="img">
</p>

2. After the execution of that command, you will be able to see a new folder: "./build".
3. Log in into your aws account and create an S3 bucket with all read permissions enabled.
4. In the created bucket, in the "properties" option switch to "enable" the option to host static web sites.

<p align="center">
 <img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975429-5187dd00-a52a-11eb-94b9-d1e5484cf4a4.png" alt="img">
</p>
<p align="center">
 <img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975457-7e3bf480-a52a-11eb-8c74-58bdcaa63465.png" alt="img">
</p>

6. Drag all the content of the "build" folder and drag them into the S3 bucket panel to satart to load them.

<p align="center">
 <img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975524-29e54480-a52b-11eb-8cc6-af36cc8288f9.png" alt="img">
</p>
<p align="center">
 <img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975532-38cbf700-a52b-11eb-8814-41b5c41efe46.png" alt="img">
</p>

8. Select all files to load.
9. Allow public read to everybody.

<p align="center">
<img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975631-f35bf980-a52b-11eb-812f-d5193b8521ce.png" alt="img">
</p>
<p align="center">
<img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/115975644-0a9ae700-a52c-11eb-8350-0ad0b1cb6fd8.png" alt="img">
</p>

12. Once all the files have been loaded correctly, in your browser go to the corresponding URL to check the app runnig.

- For example purposes an already deployed app can be accesed here:
  [http://dp2-test-deploy.s3-website-us-east-1.amazonaws.com/](http://dp2-test-deploy.s3-website-us-east-1.amazonaws.com/).

