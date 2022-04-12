import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Result } from 'src/app/models/result';
import { QuizService } from 'src/app/services/quiz.service';
import { single } from './data';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  results!: any[];


  view: [number, number] = [700,400]

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Estilos';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f01', '#f52', '#1ff','#f04', '#f07'],
  };


  constructor(private quizService: QuizService) {

    this.results = [
      {
        "name": "Rock",
        "value": 0
      },
      {
        "name": "Pop",
        "value": 0
      },
      {
        "name": "Jazz",
        "value": 0
      },
      {
        "name": "Classic",
        "value": 0
      },
      {
        "name": "Etc",
        "value": 0
      }
    ];

    this.quizService.rockCount().subscribe({
      next: (res) => {
        this.results.push(
          {
            "name": "Rock",
            "value": Number(res)
          }
          );
          console.log(this.results);
        },
      error: (err) => {

      }
    });

    this.quizService.popCount().subscribe({
      next: (res) => {
        this.results.push(
          {
            "name": "Pop",
            "value": Number(res)
          }
        );
      },
      error: (err) => {
        
      }
    });

    this.quizService.jazzCount().subscribe({
      next: (res) => {
        this.results.push(
          {
            "name": "Jazz",
            "value": Number(res)
          }
        );

      },
      error: (err) => {
        
      }
    });

    this.quizService.classsicCount().subscribe({
      next: (res) => {
        this.results.push(
          {
            "name": "Classic",
            "value": Number(res)
          }
        );

      },
      error: (err) => {
        
      }
    });

    this.quizService.etcCount().subscribe({
      next: (res) => {
        this.results.push(
          {
            "name": "Etc",
            "value": Number(res)
          }
        );
        this.results = [...this.results];
      },
      error: (err) => {
        
      }
    });


    Object.assign(this, this.results)
  }


  ngOnInit() {
  }



  onSelect(event : any) {
    console.log(event);
  }
}
