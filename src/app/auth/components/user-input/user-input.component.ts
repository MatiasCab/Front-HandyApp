import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit{

  @Input() inputLabel?: string;
  @Input() inputType?: string;
  @Input() inputTypeAutocomplete?: string;
  @ViewChild('inputInfo') inputInfo?: ElementRef<HTMLInputElement>;

  get InputInfo(){
    return this.inputInfo?.nativeElement.value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
