import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss']
})
export class EditBtnComponent {

  @Input() User?: User;
  selectedFile: File | null= null;
  isFileSelected: boolean = false;
  selectedFileURL: string | null = null;
  canChangePass: boolean = false;

  @ViewChild('password1') password1?: ElementRef<HTMLInputElement>;
  @ViewChild('password2') password2?: ElementRef<HTMLInputElement>;
  @ViewChild('newdescription') newdescription?: ElementRef<HTMLInputElement>;
  
  constructor(
    private AuthService: AuthService,
  ) {}

  changepass(): void {
    if(this.canChangePass){
      var pass = this.password1?.nativeElement.value;
      //this.AuthService.changePassword(pass);
    }
  }

  checksamepass(): void {
    var pas1 = this.password1?.nativeElement.value;
    var pas2 = this.password2?.nativeElement.value;
    if(pas1 === pas2 && pas1!.length >= 8){
      this.canChangePass = true;
      (document.getElementById('buttonChangePass') as HTMLButtonElement).disabled = false;
    }else{
      this.canChangePass = false;
      (document.getElementById('buttonChangePass') as HTMLButtonElement).disabled = true;
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

  editprofile(): void {
    var newdescription = this.newdescription?.nativeElement.value;
    if(this.selectedFile != null){
      //hay foto para subir xd
      console.log("hay foto para subir xd");

      //SUBIR FOTO Y EDITAR EL PERFIL
    }

    // si hay descripcion para subir
    if (newdescription != this.User?.description) {
      console.log("hay descripcion para subir xd");

      //SUBIR DESCRIPCIÓN Y EDITAR EL PERFIL
    }

  }

  changeubi(): void {
    //SUBIR UBICACIÓN Y EDITAR EL PERFIL
  }
}
