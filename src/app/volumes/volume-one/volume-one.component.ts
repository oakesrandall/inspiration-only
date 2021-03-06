/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

/* services */
import { StoryService } from '../../shared/story/story.service';
import { Story } from '../../shared/story/story';

@Component({
  selector: 'app-volume-one',
  templateUrl: './volume-one.component.html',
  styleUrls: ['./volume-one.component.css']
})

export class VolumeOneComponent implements OnInit {

	stories: FirebaseListObservable<Story[]>;

	constructor(
		private storyService: StoryService
	) { }

	ngOnInit() {
		this.stories = this.storyService.getStoryList({ limitToLast: 1 })
	}

}
