import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface IQuiz {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  selectedValue!: string;

  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  messageError!: string;
  messageSuccess!: string;

  hasError: boolean = false;
  sended: boolean = false;
  isSending: boolean = false; 

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  quizes: IQuiz[] = [
    {value: 'rock', viewValue: 'Rock'},
    {value: 'pop', viewValue: 'Pop'},
    {value: 'jazz', viewValue: 'Jazz'},
    {value: 'classic', viewValue: 'Clasica'},
    {value: 'etc', viewValue: 'Etc'},
  ];

  sendQuiz(){

    this.hasError = false;
    this.isSending = true;
    this.sended = false;

    if(this.selectedValue == undefined){
      this.messageError = "Seleccione un estilo musical";
      this.hasError = true;
      return;
    }

    if(!this.emailFormControl.valid){
      this.messageError = "Hay problemas con el correo";
      this.hasError = true;
    }

    let quiz : Quiz = 
    {
      email: this.emailFormControl.value,
      rock: this.selectedValue == "rock" ? true : false ,
      jazz: this.selectedValue == "jazz" ? true : false,
      pop: this.selectedValue == "pop" ? true : false,
      classic: this.selectedValue == "classic" ? true : false,
      etc: this.selectedValue == "etc" ? true : false
    }


    this.quizService.save(quiz).subscribe
    ({
      next: (res) => {
        this.messageSuccess = "Gracias por su Opinion";
        this.sended = true;
      },
      error: (err) => {
        this.messageError = "Encuesta ya ingresada";
        this.hasError = true;
      }  
    })

  }

}
