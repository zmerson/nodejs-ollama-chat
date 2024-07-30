import { Component } from '@angular/core';
import { PromptResStreamService } from '../prompt-res-stream.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-prompt-res',
  standalone: true,
  imports: [ 
    CommonModule, RouterOutlet, HttpClientModule
  ],
  providers: [HttpClientModule],
  templateUrl: './prompt-res.component.html',
  styleUrl: './prompt-res.component.scss'
})
export class PromptResComponent {
  streamService: PromptResStreamService;
  responses: string[] = [];
  fileContent: any;
  reqResArray: { req: string, res: string }[] = [];
  llamaFile: { [key: string]: string } = {};
  conversationHistory: string[] = [];

  constructor( streamService: PromptResStreamService, private http: HttpClient) {
    this.streamService = new PromptResStreamService();
   }

   askQuestion = async() =>  {
    let inputEl = document.getElementById('question') as HTMLInputElement;
    try {

      inputEl.classList.add('disabled');
      const question = inputEl.value;
      let res = await this.streamService.resStream(question);
      console.log("response: ", res);
      this.responses.push(JSON.stringify(res.message.content))
      this.reqResArray.push({ req: question, res: JSON.stringify(res.message.content) });
      console.log("total messages: " , this.streamService.messages);
      inputEl.classList.remove('disabled');
      // localStorage.setItem('question' + question.substring(0, 50), JSON.stringify(this.responses));
      localStorage.setItem('question' , JSON.stringify(this.reqResArray));
    } catch(e: any){
      console.log("error: ", e);  
      inputEl.classList.remove('disabled');
    }
    }
    logPath: string = 'assets/log.txt';

    // askQuestionWithTextFile
    // public async readFile(): Promise<void> {
    //   let headers: HttpHeaders = new HttpHeaders();
    //   headers.set('Content-Type', 'text/plain');
    //   let options = {
    //     headers: headers,
    //     responseType: "'text'"
    //   }
  
    //   this.http.request('GET', this.logPath, {responseType: 'text'})
    //       .subscribe((data: any) => {
    //       console.log(data)  
    //       // text = data;
    //       this.fileContent = data;
    //       console.log('file content\n' + this.fileContent)
    //       })
  
    // }
    ngOnInit() {
      // Load from local storage
      const savedResponses = localStorage.getItem('question');
      // const savedReqResArray = localStorage.getItem('response');
      
      if (savedResponses) {
        this.conversationHistory = JSON.parse(savedResponses);
      }
      
      // if (savedReqResArray) {
      //   this.conversationHistory = JSON.parse(savedReqResArray);
      // }
    }
    
    promtTools = async() => {
      let inputEl = document.getElementById('question') as HTMLInputElement;
      try {
        inputEl.classList.add('disabled');
        const question = inputEl.value;
        try {
          let res = await this.streamService.resStream(question);
          console.log("response: ", res);
          this.responses.push(JSON.stringify(res.message.content));
          this.reqResArray.push({ req: question, res: JSON.stringify(res.message.content) });
          console.log("total messages: ", this.streamService.messages);
          
          // Save to local storage
          localStorage.setItem('responses', JSON.stringify(this.responses));
          localStorage.setItem('reqResArray', JSON.stringify(this.reqResArray));
        } catch (e: any) {
          console.log("error: ", e);
        }
        inputEl.classList.remove('disabled');
      } catch(e: any){
        console.log("error: ", e);  
        inputEl.classList.remove('disabled');
      }
    }
    promptHugeText = async(question: string) => {
      try {
        let res = await this.streamService.resStream(question);
        console.log("response: ", res);
        this.responses.push(JSON.stringify(res.message.content))
        this.reqResArray.push({ req: question, res: JSON.stringify(res.message.content) });
        console.log("total messages: " , this.streamService.messages);
      } catch(e: any){
        console.log("error: ", e);  
      }
    }
    prepareFileForOllama() {
      // this.onFileSelected();
      // console.log("file content: ", this.fileContent)
      // split file content into lines, each line is a property in an object
      let inputEl = document.getElementById('question') as HTMLInputElement;
      inputEl.classList.add('disabled');
      let question = inputEl.value;

      let lines = this.fileContent.split('\n');
      // console.log("lines: ", lines)
      let count = 0;
      // for (let i = 0; i < lines.length; i++) {
      while (count < 10000) {
        for (let i = 0; i < 50000; i+=lines[i].length) {
          this.llamaFile[i] = lines[i];
          question += lines[i];
          count++;
        }
        console.log("sending question: ", question)
        this.promptHugeText(question);
        inputEl.classList.remove('disabled');
        question = '';
        // console.log("llama file finished: ", this.llamaFile)
        }
      }

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          this.fileContent = reader.result;
          // console.log('file content\n' + this.fileContent);
        };
        reader.readAsText(file);
      }
    }
}
