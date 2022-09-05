+++
title = "How to Embed YouTube videos in Angular Applications"
subtitle = "Render YouTube videos in Angular"
type="post"
summary ="In this tutorial we learn how to embed youtube videos in Angular applications using `@angular/youtube-player` component."
lastmod="2022-09-04T00:00:00+0000"
date="2022-09-04T00:00:00+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Angular Youtube Player Component"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

In this tutorial we learn how to embed youtube videos in Angular applications using `@angular/youtube-player` component.

{{%toc%}}

## What is Angular Youtube Player Component? 

Using `@angular/youtube-player` component we can render an inline YouTube Player within our Angular applications.

**Angular Youtube player component is a simple Angular wrapper around the [embed YouTube player API](https://developers.google.com/youtube/iframe_api_reference) introduced in Angular version 9.**

## Steps to embed YouTube Video in Angular applications.

### Step 1: Install `@angular/youtube-player` component package

The first step is to install `@angular/youtube-player` package in our Angular applications using `npm install` command.

```
npm install @angular/youtube-player
```

### Step 2: Import `YouTubePlayerModule` in the target module.

Import `YouTubePlayerModule` from `@angular/youtube-player` and add in `AppModule` imports array.

```
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [BrowserModule, FormsModule, YouTubePlayerModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Instead of adding in `AppModule` you can add it in your own video component module.

```
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoComponent } from './video.component';

@NgModule({
  imports: [YouTubePlayerModule],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})
export class VideoModule {}
```

### Step 3: Load the YouTube iframe API Script.

As explained above it's wrapper around [embed YouTube player API](https://developers.google.com/youtube/iframe_api_reference), so we need to load iframe API script before using YouTube player component.

There are two ways we can add YouTube iframe API script.

Directly add the script in `index.html` file.

```
<script src="https://www.youtube.com/iframe_api"></script>
```

Load IFrame Player API script asynchronously in `component.ts` file.

```
export class AppComponent {

  apiLoaded = false;

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
```

This is the practice suggested by [youtube iframe api reference](https://developers.google.com/youtube/iframe_api_reference#Getting_Started).

### Step 4: Get the video id of youtube.

Every YouTube video has an ID, it will be part of video URL.

Have a look at the below [YouTube video](https://www.youtube.com/watch?v=QIZ9aZD6vs0) url.

```
https://www.youtube.com/watch?v=QIZ9aZD6vs0
```

The video id is `QIZ9aZD6vs0`.

### Step 5: Render video using `<youtube-player>` tag. 

Pass the video id to the `youtube-player` component `videoId @input`.

```
<youtube-player videoId="QIZ9aZD6vs0"> </youtube-player>

```

That's it our video will be loaded automatically. 

And we can bind a variable to `[videoId]` input.

Here is the complete example.

```
export class AppComponent {
  //  videoUrl = 'https://www.youtube.com/watch?v=QIZ9aZD6vs0';

  apiLoaded = false;

  videoId = 'QIZ9aZD6vs0';

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
```

In `component.html` file use `videoId` variable.

```
<youtube-player [videoId]="videoId"> </youtube-player>
```

## Changing width and height of youtube video

By default youtube player component loads the video in `640` width and `390` height.

To change the width and height of the video we can make use `[height]` and `[width]` input parameters.

```
<youtube-player [videoId]="videoId"
                [height]="250" 
                [width]="500"> 

</youtube-player>

```
## Changing the quality of the youtube video.

To change the quality of the youtube video loaded use `suggestedQuality` input of `youtube-player` component.

```
<youtube-player [videoId]="videoId"
                [height]="250" 
                [width]="500"
                suggestedQuality="hd720"> 

</youtube-player>
```

The allowed values of `suggestedQuality` input are 'default' , 'small', 'medium', 'large', 'hd720', 'hd1080', and 'highres'.

## Change play Start and end times of youtube video.

We can make use of Angular Youtube Player Component's `[startSeconds]` and `[endSeconds]` inputs to change the start and end play times of youtube video.

```
startSeconds = 60;
endSeconds = 120;

<youtube-player
  [videoId]="videoId"
  suggestedQuality="small"
  [startSeconds]="startSeconds"
  [endSeconds]="endSeconds"
  [height]="height"
  [width]="width"
>
</youtube-player>
```

The above video will start at 60 seconds and ends at 120 seconds.


## Angular youtube player component `@Output` events

The Angular youtube player component have following `@output` events


### (ready): PlayerEvent 

Triggers whenever a player has finished loading and is ready to begin receiving API calls.

### (stateChange): OnStateChangeEvent

Triggers whenever the player’s state changes

### (error): OnErrorEvent 

Triggers if an error occurs in the player

### (apiChange): PlayerEvent

fires to indicate that the player has loaded (or unloaded) a module with exposed API methods

### (playbackQualityChange): OnPlaybackQualityChangeEvent

Triggers whenever the video playback quality changes

### (playbackRateChange): OnPlaybackRateChangeEvent

Triggers whenever the video playback rate changes

The `@output` events maps to the events fired from the YouTube JS API. 

[https://developers.google.com/youtube/iframe_api_reference#Events](https://developers.google.com/youtube/iframe_api_reference#Events)

## Angular youtube player component StackBlitz Demo. 

Here is the link for Angular youtube player component StackBlitz Demo.

[https://stackblitz.com/edit/embed-youtube-videos-in-angular](https://stackblitz.com/edit/embed-youtube-videos-in-angular)

