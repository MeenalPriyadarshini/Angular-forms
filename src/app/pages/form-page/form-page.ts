import { Component } from '@angular/core';
import { ProfileCard } from '../../components/profile-card/profile-card';

@Component({
  selector: 'app-form-page',
  imports: [ProfileCard],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage {}