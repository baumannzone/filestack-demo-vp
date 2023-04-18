---
next:
  text: "Image borders and effects"
  link: "/image-borders-and-effects"
---

# Image Transformations

## Image size

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#image-size)

### Usage

```
https://cdn.filestackcontent.com/imagesize/FJSDPKz8QKvypYiUXN48
```

### Response

```json
{ "height": 1593, "width": 2832 }
```

## Resize

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#resize)

### Usage

```
https://cdn.filestackcontent.com/resize=width:200/FJSDPKz8QKvypYiUXN48
https://cdn.filestackcontent.com/resize=height:400/FJSDPKz8QKvypYiUXN48
https://cdn.filestackcontent.com/resize=width:1500,height:400,fit:crop/FJSDPKz8QKvypYiUXN48
https://cdn.filestackcontent.com/resize=width:1500,height:400,fit:scale/FJSDPKz8QKvypYiUXN48
```

### Example

`width:200`
![resize](https://cdn.filestackcontent.com/resize=width:200/FJSDPKz8QKvypYiUXN48)

`height:200`
![resize](https://cdn.filestackcontent.com/resize=height:200/FJSDPKz8QKvypYiUXN48)

`width:1500,height:400,fit:crop`
![resize](https://cdn.filestackcontent.com/resize=width:1500,height:400,fit:crop/FJSDPKz8QKvypYiUXN48)

`width:1500,height:400,fit:scale`
![resize](https://cdn.filestackcontent.com/resize=width:1500,height:400,fit:scale/FJSDPKz8QKvypYiUXN48)

## Crop

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#crop)

### Usage

```
https://cdn.filestackcontent.com/crop=dim:[0,0,500,1000]/FJSDPKz8QKvypYiUXN48
```

### Example

`dim:[0,0,500,1000]`
![crop](https://cdn.filestackcontent.com/crop=dim:[0,0,500,1000]/FJSDPKz8QKvypYiUXN48)

## Rotate

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#rotate)

### Usage

```
https://cdn.filestackcontent.com/rotate=deg:180/FJSDPKz8QKvypYiUXN48
https://cdn.filestackcontent.com/rotate=deg:18/FJSDPKz8QKvypYiUXN48
https://cdn.filestackcontent.com/rotate=d:18,b:7CFC00FF/FJSDPKz8QKvypYiUXN48
```

### Examples

`deg:180`
![rotate](https://cdn.filestackcontent.com/rotate=deg:180/FJSDPKz8QKvypYiUXN48)

`deg:18`
![rotate](https://cdn.filestackcontent.com/rotate=deg:18/FJSDPKz8QKvypYiUXN48)

`d:18,b:7CFC00FF`
![rotate](https://cdn.filestackcontent.com/rotate=d:18,b:7CFC00FF/FJSDPKz8QKvypYiUXN48)

## Flip

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#flip)

### Usage

```
https://cdn.filestackcontent.com/flip/FJSDPKz8QKvypYiUXN48
```

### Examples

`flip`
![flip](https://cdn.filestackcontent.com/flip/FJSDPKz8QKvypYiUXN48)

## Flop

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#flop)

### Usage

```
https://cdn.filestackcontent.com/flop/FJSDPKz8QKvypYiUXN48
```

### Examples

`flop`
![flop](https://cdn.filestackcontent.com/flop/FJSDPKz8QKvypYiUXN48)

## Watermark

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#watermark)

### Usage

```
https://cdn.filestackcontent.com/watermark=f:Urj7ezG8SAKtIWdqTDx7,p:[bottom,right],s:50/FJSDPKz8QKvypYiUXN48
https://cdn.filestackcontent.com/watermark=f:DLzyl0OS9mBl7pR4lFAI,p:[top,left],s:250/FJSDPKz8QKvypYiUXN48
```

### Examples

`p:[bottom,right],s:50`
![watermark](https://cdn.filestackcontent.com/watermark=f:Urj7ezG8SAKtIWdqTDx7,p:[bottom,right],s:50/FJSDPKz8QKvypYiUXN48)

`p:[top,left],s:250`
![watermark](https://cdn.filestackcontent.com/watermark=f:DLzyl0OS9mBl7pR4lFAI,p:[top,left],s:250/FJSDPKz8QKvypYiUXN48)

## Compress

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#compress)

### Usage

```
https://cdn.filestackcontent.com/compress/FJSDPKz8QKvypYiUXN48
```

### Examples

`compress`
![compress](https://cdn.filestackcontent.com/compress/FJSDPKz8QKvypYiUXN48)

## Quality

🔗 [Documentation](https://www.filestack.com/docs/api/processing/#quality)

### Usage

```
https://cdn.filestackcontent.com/quality=v:5/flop/FJSDPKz8QKvypYiUXN48
```

### Examples

`quality=v:5/flop`
![quality](https://cdn.filestackcontent.com/quality=v:5/flop/FJSDPKz8QKvypYiUXN48)
