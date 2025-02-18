import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calendar',
    imports: [FullCalendarModule, CommonModule],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
    private isMobile = window.matchMedia('(max-width: 768px)').matches;

    calendarOptions: CalendarOptions = {
        locale: esLocale,
        plugins: [dayGridPlugin, timeGridPlugin],
        initialView: this.isMobile ? 'timeGridDay' : 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next today',
            center: this.isMobile ? '' : 'title',
            right: this.isMobile ? 'title' : 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        titleFormat: this.isMobile
            ? { day: 'numeric', month: 'short' }
            : { weekday: 'long', day: 'numeric', month: 'short' },
        events: [
            {
                title: 'Reunión de trabajo',
                date: '2025-02-14',
                start: '2025-02-13T10:00:00',
                end: '2025-02-13T12:00:00',
                description: 'Este es un evento con más detalles, como la ubicación o los participantes.', // Detalle del evento
                location: 'Remoto', // Ubicación del evento
                participants: 'Juan, Pedro, María' // Participantes
            },
            {
                title: 'Reunión de trabajo',
                date: '2025-02-14',
                start: '2025-02-13T12:00:00',
                end: '2025-02-13T14:00:00'
            },
            {
                title: 'Reunión de trabajo',
                date: '2025-02-14',
                start: '2025-02-13T16:00:00',
                end: '2025-02-13T17:00:00',
                description: 'Este es un evento con más detalles, como la ubicación o los participantes.', // Detalle del evento
                location: 'Remoto', // Ubicación del evento
                participants: 'Juan, Pedro, María' // Participantes
            },
            {
                title: 'Reunión de trabajo',
                date: '2025-02-14',
                start: '2025-02-13T18:00:00',
                end: '2025-02-13T20:00:00',
                description: 'Este es un evento con más detalles, como la ubicación o los participantes.', // Detalle del evento
                location: 'Remoto', // Ubicación del evento
                participants: 'Juan, Pedro, María' // Participantes
            }
        ],
        height: 'auto',
        slotMinTime: '08:00:00', // Horario mínimo
        slotMaxTime: '22:00:00', // Establecer la hora máxima visible en la cuadrícula
        slotDuration: '00:30:00', // Duración de cada fila de hora,
        allDaySlot: false,
        eventClick: this.handleEventClick.bind(this)
    };

    ngOnInit(): void {}

    selectedEventDetails: any = null;

    // Función para manejar el clic en el evento
    handleEventClick(arg: any) {
        this.selectedEventDetails = {
            title: arg.event.title,
            start: arg.event.start,
            end: arg.event.end,
            description: arg.event.extendedProps.description,
            location: arg.event.extendedProps.location,
            participants: arg.event.extendedProps.participants
        };
    }
}
