import { Component } from '@angular/core';
import { PromptResStreamService } from '../prompt-res-stream.service';
import { JsonPipe } from '@angular/common';
import { ProgressResponse } from 'ollama';

@Component({
  selector: 'app-prompt-res-stream',
  standalone: true,
  imports: [],
  templateUrl: './prompt-res-stream.component.html',
  styleUrl: './prompt-res-stream.component.scss'
})
export class PromptResStreamComponent {

  response: string = '';
  promptResStreamService: PromptResStreamService; // Declare the property
  stream: Promise<ProgressResponse> | undefined = undefined;

  constructor( promptResStreamService: PromptResStreamService ) { 
    this.promptResStreamService = promptResStreamService; // Initialize the property
  }
  

  getLlama2Stream(){

  }

}
