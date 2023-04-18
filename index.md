---
author: Jorge Baumann
title: Introduction to Filestack
description: Learn how to use Filestack with the JavaScript File Picker
---

# Filestack

Filestack is a service that allows you to upload and transform images among other things. It is a great tool to use when you need to upload images to your application.

## Understanding file handles in Filestack

Each time you upload a file to Filestack, a **handle** is generated. This handle serves as a unique identifier for the file, allowing you to perform operations on it and retrieve it from the Filestack servers.

In every example throughout this demo, we will use this handle to perform operations on the image: `FJSDPKz8QKvypYiUXN48`

![image](https://cdn.filestackcontent.com/FJSDPKz8QKvypYiUXN48)

This is a previously uploaded image to Filestack. You can see the handle in the URL.

## JavaScript File Picker

To integrate Filestack with your application, you need to add the Filestack JavaScript library to your project. You can do this by adding the following script tag to your HTML file:

```html
<script src="//static.filestackapi.com/filestack-js/3.x.x/filestack.min.js"></script>
```

After adding the script tag, you can use the `filestack.init` function to initialize the Filestack client.  
This function takes your Filestack API key as a parameter. You can find your API key in the Filestack dashboard.

```js
const client = filestack.init(YOUR_API_KEY);
client.picker().open();
```

### Codepen live demo

Check the live demo below to see how the Filestack JavaScript File Picker works.

https://codepen.io/baumannzone/pen/XWxdJzR
