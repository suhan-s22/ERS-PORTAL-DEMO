import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RequisitionService } from '../services/requisition.service';
import { Requisition } from '../models/requisition';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit{

  private route = inject(ActivatedRoute);

private requisitionService = inject(RequisitionService);

requisition?: Requisition;

  showJobPopup = false;

  ngOnInit(): void {

  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.requisitionService.getRequisitionById(id).subscribe({

    next: (data) => {

      this.requisition = data;

    },

    error: (err) => {

      console.error(err);

    }

  });

}

  generateJobNo(): void {
    this.showJobPopup = true;
  }

  closePopup(): void {
    this.showJobPopup = false;
  }

  validateSap(): void {
    alert('SAP Code Validated Successfully');
  }

  sendAcknowledgement(): void {
    alert('Acknowledgement Sent Successfully');
  }

  rejectRequest(): void {
    alert('Request Rejected');
  }

}