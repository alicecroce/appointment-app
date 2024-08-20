import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  newAppointmentTitle:string = "";
  newAppointmentDate:Date = new Date();

  appointments:Appointment[] = []

  //Aggiungo un impegno
  addAppointment(){
    if(this.newAppointmentTitle.trim().length&&this.newAppointmentDate){
      let newAppointment: Appointment={
        id:Date.now(),
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }

      this.appointments.push(newAppointment);//push aggiunge

      this.newAppointmentTitle="";
      this.newAppointmentDate=new Date();
    }
  }

   //Rimuovo un impegno
  deleteAppointment(index:number){
    this.appointments.splice(index,1)//splice elimina (index=dal numero uno, 1= solo un elemento)
  }
}
