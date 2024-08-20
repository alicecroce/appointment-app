import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {


  newAppointmentTitle:string = "";
  newAppointmentDate:Date = new Date();

  appointments:Appointment[] = []

  ngOnInit(): void {//viene invocato quando quando il componente viene inizializzato/avviamo o ricarichiamo lìapplicazione)
    let savedAppointments=localStorage.getItem('appointments');

    this.appointments=savedAppointments?JSON.parse(savedAppointments):[]
    //ho salvato l'appuntamento? se si archivialo nel json se no crea un array vuot
  }

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

      //Archiviare in locale creando un json e senza usare DB
      localStorage.setItem("appointments", JSON.stringify(this.appointments));//crea il json di dati javascript quindi leggibili
    }
  }

   //Rimuovo un impegno
  deleteAppointment(index:number){
    this.appointments.splice(index,1)//splice elimina (index=dal numero uno, 1= solo un elemento)

    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
