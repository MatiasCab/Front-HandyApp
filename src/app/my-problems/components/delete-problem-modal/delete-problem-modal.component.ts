import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-problem-modal',
  templateUrl: './delete-problem-modal.component.html',
  styleUrls: ['./delete-problem-modal.component.scss']
})
export class DeleteProblemModalComponent {
  closeResult = '';
  todayDate?: string

  @ViewChild('content', { static: true }) modal!: TemplateRef<any>;

	constructor(
    private modalBootstrapService: NgbModal,
    private config: NgbModalConfig) {
      config.backdrop = 'static';
		  config.keyboard = false;
    }

  dateToString(){
    let today: Date = new Date();
    
  }

	open(content: any) {
		this.modalBootstrapService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
		);
	}
}
