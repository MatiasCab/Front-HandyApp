import { ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})

export class UploadPhotoComponent {

  constructor(
    private cd: ChangeDetectorRef
  ){}

  selectedFile: File | null= null;
  @Input() selectedFileURL: string | null = null;
  @Output() URLToSend = new EventEmitter<string>();

  isFileSelected: boolean = false;

  ngOnInit(){
    if(this.selectedFileURL){
      this.isFileSelected = true;
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.isFileSelected= true;
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileURL = reader.result as string;
        this.URLToSend.emit(this.selectedFileURL);
      };
      reader.readAsDataURL(this.selectedFile);
      
    }
  }


 
  

}
