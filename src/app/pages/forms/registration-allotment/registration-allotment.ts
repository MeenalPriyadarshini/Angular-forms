import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormNavComponent } from '../../../components/form-nav/form-nav.component';

@Component({
  selector: 'app-registration-allotment',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormNavComponent
  ],
  templateUrl: './registration-allotment.html',
  styleUrls: ['./registration-allotment.css']
})
export class RegistrationAllotmentComponent {

  form = new FormGroup({

    // =========================================================
    // 1. CONSIGNMENT DETAILS
    // =========================================================
    consignment: new FormGroup({

      stationFrom: new FormControl<any>(''),

      consignmentId: new FormControl<any>(''),

      date: new FormControl<any>(''),

      serviceMode: new FormControl<any>(''),

      requestDate: new FormControl<any>(''),

      deliveryDate: new FormControl<any>(''),

      wCnsee: new FormControl<any>(false)
    }),


    // =========================================================
    // 2. REGISTRATION DETAILS
    // =========================================================
    registration: new FormGroup({

      // Registration information
      rebooking: new FormControl<any>(false),

      rake: new FormControl<any>(false),

      owned: new FormControl<any>(false),

      stationTo: new FormControl<any>(''),

      commodityCode: new FormControl<any>(''),

      commodityDescription: new FormControl<any>(''),


      // -------------------------------------------------------
      // CONSIGNOR
      // -------------------------------------------------------
      consignor: new FormGroup({

        code: new FormControl<any>(''),

        id: new FormControl<any>(''),

        name: new FormControl<any>(''),

        address: new FormControl<any>(''),

        cityState: new FormControl<any>(''),

        phone: new FormControl<any>(''),

        email: new FormControl<any>(''),

        gstin: new FormControl<any>(''),

        distance: new FormControl<any>(''),

        pickupPoint: new FormControl<any>('')
      }),


      // -------------------------------------------------------
      // CONSIGNEE
      // -------------------------------------------------------
      consignee: new FormGroup({

        code: new FormControl<any>(''),

        id: new FormControl<any>(''),

        name: new FormControl<any>(''),

        address: new FormControl<any>(''),

        cityState: new FormControl<any>(''),

        phone: new FormControl<any>(''),

        email: new FormControl<any>(''),

        gstin: new FormControl<any>(''),

        distance: new FormControl<any>(''),

        pickupPoint: new FormControl<any>('')
      })
    }),


    // =========================================================
    // 3. CONTAINER DETAILS
    // =========================================================
    container: new FormGroup({

      containerNumber: new FormControl<any>(''),

      containerSize: new FormControl<any>(''),

      containerType: new FormControl<any>(''),

      sealNumber: new FormControl<any>(''),

      loadedWeight: new FormControl<any>(''),

      tareWeight: new FormControl<any>('')
    }),


    // =========================================================
    // 4. PAYMENT & REGISTRATION AMOUNT
    // =========================================================
    payment: new FormGroup({

      // Dropdown
      paymentType: new FormControl<any>(''),

      // Radio group 1
      // Only ONE of these can be selected.
      paidBy: new FormControl<any>(''),

      // Radio group 2
      // Only ONE of these can be selected.
      paymentMode: new FormControl<any>(''),

      // Amount fields
      totalAmount: new FormControl<any>(''),

      advanceAmount: new FormControl<any>(''),

      balanceAmount: new FormControl<any>(''),

      registrationAmount: new FormControl<any>('')
    }),


    // =========================================================
    // 5. ALLOTMENT DETAILS
    // =========================================================
    allotment: new FormGroup({

      allottedWagonNo: new FormControl<any>(''),

      allottedCoachNo: new FormControl<any>(''),

      allottedSlotNo: new FormControl<any>(''),

      allottedBerthNo: new FormControl<any>(''),

      remarks: new FormControl<any>('')
    })
  });


  // -----------------------------------------------------------
  // Container table
  // -----------------------------------------------------------
  containerRows: any[] = [];


  // -----------------------------------------------------------
  // Allotment table
  // -----------------------------------------------------------
  allotmentRows: any[] = [];


  // ===========================================================
  // ADD CONTAINER
  // ===========================================================
  addContainer(): void {

    const container = this.form.get('container')?.value;

    this.containerRows.push({
      containerNumber: container?.containerNumber || '',
      containerSize: container?.containerSize || '',
      containerType: container?.containerType || '',
      sealNumber: container?.sealNumber || '',
      loadedWeight: container?.loadedWeight || '',
      tareWeight: container?.tareWeight || ''
    });

    this.form.get('container')?.reset();
  }


  // ===========================================================
  // REMOVE CONTAINER
  // ===========================================================
  removeContainer(index: number): void {

    this.containerRows.splice(index, 1);
  }


  // ===========================================================
  // ADD ALLOTMENT
  // ===========================================================
  addAllotment(): void {

    const allotment = this.form.get('allotment')?.value;

    this.allotmentRows.push({
      allottedWagonNo: allotment?.allottedWagonNo || '',
      allottedCoachNo: allotment?.allottedCoachNo || '',
      allottedSlotNo: allotment?.allottedSlotNo || '',
      allottedBerthNo: allotment?.allottedBerthNo || '',
      remarks: allotment?.remarks || ''
    });

    this.form.get('allotment')?.reset();
  }


  // ===========================================================
  // REMOVE ALLOTMENT
  // ===========================================================
  removeAllotment(index: number): void {

    this.allotmentRows.splice(index, 1);
  }


  // ===========================================================
  // SUBMIT
  // ===========================================================
  submitForm(): void {

    console.log('Form Data:', this.form.value);

    console.log('Container Data:', this.containerRows);

    console.log('Allotment Data:', this.allotmentRows);
  }
}