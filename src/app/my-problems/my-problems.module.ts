import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { UpperSectionComponent } from './components/upper-section/upper-section.component';
import { MyProblemsComponent } from './components/my-problems/my-problems.component';

import { MyProblemsRoutingModule } from './my-problems-routing.module';
import { AddProblemButtonComponent } from './components/add-problem-button/add-problem-button.component';
import { AddEditProblemComponent } from './components/add-edit-problem/add-edit-problem.component';
import { DeleteProblemModalComponent } from './components/delete-problem-modal/delete-problem-modal.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';


@NgModule({
  declarations: [
    UpperSectionComponent,
    MyProblemsComponent,
    AddProblemButtonComponent,
    AddEditProblemComponent,
    DeleteProblemModalComponent,
    UploadPhotoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyProblemsRoutingModule
  ]
})
export class MyProblemsModule { }
