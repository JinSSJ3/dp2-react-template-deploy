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

---

#### Deploy to _AWS S3 bucket_:

- Deploys the app to an aws S3 bucket.


1. Make the build folder, wich will contain all required files for our app.

```shell
npm run build
```

2. After the execution of that command, you will be able to see a new folder: "./build".
3. Log in into your aws account and create an S3 bucket with all read permissions enabled.
4. In the created bucket "properties" switch to "enable" the option to host static web sites.

6. Drag all the content of the "build" folder and drag them into the S3 bucket panel to satrt the load.
7. Select all files to load.
8. Allow public read to everybody.
9. Start the files load.
10. Once all the files have been loaded correctly, in your browser go to the corresponding URL to check the app runnig.
   - For example purposes an already deployed app can be accesed here:
     [http://commit-history-ftf.s3-website-us-east-1.amazonaws.com/](http://commit-history-ftf.s3-website-us-east-1.amazonaws.com/).

## Commit pattern

In order to make it easy to review the previous commits and understand the "what"s and "why"s behind each change, the following commit pattern is used:

- To make descriptive commits the command`git commit -v` is used. Otherwhise,`git commit -m "<message>"` command can be used when the commit message is not long enought to give it a body.

````
<type>: <subject>
<BLANK_LINE>
<body> (optional)
````

The definition for each commit section is as follows:
`<type>`: A short label of the type of change.

- It can be any of the following:
  + FEAT: A new feature
  + FIX: Bug fix
  + DOCS: Documentation changes
  + STYLE: Formatting, missing spaces, etc
  + REFACTOR: Code that it's neither a feat nor a fix

`<subject>`: It is a short description of the commit

- In general, no more than 80 characters
- Written in present tense
- Starts with capital letter

`<body>`: The long description of the commit

- Explains why the commit is needed
- Briefly explains what the commit does
- Talks about the related test cases and docs
- In general, no more than 80 characters per line

