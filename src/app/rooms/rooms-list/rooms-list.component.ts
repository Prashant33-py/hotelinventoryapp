import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
    selector: 'app-rooms-list',
    templateUrl: './rooms-list.component.html',
    styleUrls: ['./rooms-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, DoCheck {

    @Input() rooms: RoomList[] = []
    @Input() title: string = ''
    @Output() selectedRoom = new EventEmitter<RoomList>();

    ngOnInit(): void {

    }
    selectRoom(room: RoomList) {
        this.selectedRoom.emit(room);
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);

    }
    ngDoCheck(): void {
        console.log("on changes is called");
    }

}
