import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoService } from '../services/video.service';
import * as moment from 'moment';
import  'moment-duration-format';

import  'moment-duration-format';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {
  urls: string[]=[];
  urlSafe: any;

  /* the code here subscribes to the observable providing the video list
    and additionally adds the relativeTime which gives the publish duration
    and the length of video
  */

  video$: Observable<Array<any>>;
  constructor(private videoService: VideoService,public sanitizer: DomSanitizer) {
    this.video$ = this.videoService.video$.pipe(map(this.addRelativeTime));
  }

  addRelativeTime(videos: any) {
    return videos.map((video: any) => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.contentDetails.length = moment.duration(video.contentDetails.duration,"minutes").format();
      return video;
    });
  }

  // videos=[{url:"https://www.youtube.com/embed/JKa05nyUmuQ",title:"vid1"},
  //         {url:"https://www.youtube.com/embed/JKa05nyUmuQ",title:"vid1"},
  //         {url:"https://www.youtube.com/embed/JKa05nyUmuQ",title:"vid1"}]

  //constructor(public sanitizer: DomSanitizer) { }
  ngOnInit() {
    // for (let i = 0; i < this.videos.length; i++) {
    //   this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[i]);
    //   this.urls.push(this.urlSafe)
      
    }
  }
  // videos=["https://www.youtube.com/embed/JKa05nyUmuQ",
  //          "https://www.youtube.com/embed/nQfxAq5J5Qw",
  //          "https://www.youtube.com/embed/NJktTAMhE74",
  //          "https://www.youtube.com/embed/JKa05nyUmuQ",
  //          "https://www.youtube.com/embed/nQfxAq5J5Qw",
  //          "https://www.youtube.com/embed/NJktTAMhE74"]

