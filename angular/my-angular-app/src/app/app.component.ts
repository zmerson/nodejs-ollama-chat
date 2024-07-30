import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromptResComponent } from "./prompt-res/prompt-res.component";
import { PromptResStreamComponent } from "./prompt-res-stream/prompt-res-stream.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, PromptResComponent, PromptResStreamComponent, HttpClientModule

  ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
