---
title: 'Detecting SMS Spam using ML.NET'
date: '2021-08-05'
tags: ['ML.NET', '.NET5', 'Machine-Learning']
draft: false
summary: 'Use ML.NET Model Builder in Visual Studio to train and use your first machine learning model with ML.NET.'
layout: PostSimple
---

![Hacker Man](https://miro.medium.com/max/1400/1*kSw-njRsFwVlqbTElIX8oQ.jpeg)

In this article we're going to take a look at ML.NET Model Builder in Visual Studio and how we can easily train a model to detect whether an SMS is spam or not. 🦄

## What is ML.NET?

ML.NET is an open source and cross-platform machine learning framework. ML.NET's Model Builder provides a GUI that makes it really easy to train a model without even writing a line of code.

## How to Get Started with ML.NET?

[Official Docs](https://dotnet.microsoft.com/learn/ml-dotnet/get-started-tutorial/intro)

ML.NET is currently in preview so you need to enable it in Visual Studio. Make sure you have at least version 16.6.1.

- Go to Tools -> Options -> Environment -> Preview Features
- Make sure "Enable ML.NET Model Builder" is enabled

![Enable Ml.NET](/static/images/mlnet/enable_mlnet.png)

If you don't see the option, open Visual Studio Installer and make sure you have ML.NET Model Builder installed:

![Enable ML.NET in Visual Studio Installer](/static/images/mlnet/visual_studio_installer.png)

## Lets Go! 🚗

For this tutorial, we're going to create a Web API that allows us to send some text to the API and get back whether or not the SMS is spam and how likely it is to be spam.

First let's select a Web API project in Visual Studio:

![Creating a Web API Project](/static/images/mlnet/create_project.png)

And let's ensure we're using .NET 5 and enabled OpenAPI Support:

![Enabling OpenAPI support](/static/images/mlnet/additional_info.png)

Let's run the project and make sure everything is fine:

![Testing if our API is working](/static/images/mlnet/test.png)

Right click on our project -> Add -> Machine Learning. If you don't see Machine Learning, make sure it's installed correctly.

![Adding our ML.NET config](/static/images/mlnet/add_ml.png)

Let's call it `MLSpamDetectorModel.mbconfig` and hit `Add`.

![Adding our ML.NET config](/static/images/mlnet/add_ml_continued.png)

### 1. Scenario

ML.NET Model Builder has a few scenarios to pick from, but today we're going to select `Text classification` as we want to classify the SMS as either Spam or not.

![Selecting text classification](/static/images/mlnet/scenario.png)

### 2. Environment

Some scenarios allow you to train on Azure but for this scenario we can only train on our local machine.

![Selecting our local environment](/static/images/mlnet/environment.png)

### 3. Data

[You can download the training data from here.](https://drive.google.com/file/d/1TxKm-3ohYJjXm6Iwb_FaU9wyWSQXFicD/view?usp=sharing) It's a list of 5k+ SMSs where some are spam and some are not.

Let's select the CSV file and choose Column1 as the column to predict. **spam** being spam and **ham** being not spam.

![Selecting the CSV file to train](/static/images/mlnet/data.png)

### 4. Train

It's time to start training! During this time ML.NET will find the best algorithm to use that will give us the highest accuracy. Letting the model train for longer will give you higher accuracy. For this tutorial, let's try 60 seconds and see how well we do:

![Training for 60 seconds](/static/images/mlnet/train.png)

After 60 seconds, we can see in the console it only explored 3 algorithms, but the accuracy is quite high at 98.8%!

```
start nni training
|     Trainer                              MicroAccuracy  MacroAccuracy  Duration #Iteration                     |
|1    SdcaMaximumEntropyMulti                     0,8660         0,5000       6,6          1                     |
|2    LbfgsMaximumEntropyMulti                    0,9882         0,9585      17,5          2                     |
|3    FastForestOva                               0,9796         0,9412      29,4          3                     |
```

### 5. Evaluate

The Model Builder lets us try out our model. Let's try a known spam message such as:

> Our records indicate your Pension is under performing to see higher growth and up to 25% cash release reply PENSION for a free review. To opt out reply STOP

And wow! 97% likely to be a spam message. That's pretty good for 60 seconds of training 😅.

![97% accuracy on a spam sms](/static/images/mlnet/try_model.png)

## Integrating into our Web API

Now that our model has been trained, let's integrate it into our API. First lets open the **Package Manager Console** and install:

`Install-Package Microsoft.Extensions.ML`

This package lets us add our prediction engine as a service. If we go to our `Startup.cs` file we can add our prediction engine:

```csharp
using Microsoft.Extensions.ML;

public void ConfigureServices(IServiceCollection services)
{
    services
        .AddPredictionEnginePool<MLSpamDetectorModel.ModelInput, MLSpamDetectorModel.ModelOutput>()
        .FromFile("MLSpamDetectorModel.zip");

    // ...
}
```

Great! Now let's use our prediction engine in our API!

Let's right click on the `Controllers` folder and click Add -> Controller. Let's call it `PredictionController`.

```csharp
using Microsoft.AspNetCore.Mvc;

namespace SmsSpamDetectionApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PredictionController : ControllerBase
    {
        public PredictionController()
        {

        }
    }
}
```

Now let's grab the prediction engine from the constructor and create a predict method to use our engine!

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ML;

namespace SmsSpamDetectionApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PredictionController : ControllerBase
    {
        private readonly PredictionEnginePool<MLSpamDetectorModel.ModelInput, MLSpamDetectorModel.ModelOutput> _predictionEngine;

        public PredictionController(PredictionEnginePool<MLSpamDetectorModel.ModelInput, MLSpamDetectorModel.ModelOutput> predictionEngine)
        {
            _predictionEngine = predictionEngine;
        }

        [HttpGet]
        public IActionResult Predict(string text)
        {
            var input = new MLSpamDetectorModel.ModelInput { Feature = text };

            var prediction = _predictionEngine.Predict(input);

            return Ok(prediction);
        }
    }
}
```

Aaaaaand... if we run it...

![Swagger Home Page](/static/images/mlnet/swagger_1.png)

...

![Swagger Prediction GET Request](/static/images/mlnet/swagger_2.png)

Amazing! We can send our API an SMS and it will give us back a prediction and a score! 🥳

## Conclusion
