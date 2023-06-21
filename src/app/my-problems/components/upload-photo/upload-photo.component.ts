import { ChangeDetectorRef, Component, Input} from '@angular/core';

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
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload() {
    if (this.selectedFile) {
      // Perform the upload logic here
      console.log('Uploading file:', this.selectedFile);
      // You can send the file to your server or perform any other necessary actions
    } else {
      console.log('No file selected.');
    }
  }


 
  

}
