import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
    title: string = "Room List"
    hotelName: string = "Landon Hotel";
    numberOfRooms: number = 20
    roomList: RoomList[] = []
    selectedRoom !: RoomList;

    @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

    rooms: Room = {
        availableRooms: 10,
        bookedRooms: 5,
        totalRooms: 15
    };
    ngOnInit(): void {
        this.roomList = [
            {
                roomType: "Luxury",
                roomNo: 201,
                amenities: "AC, Free Wifi",
                price: 500,
                image: "image",
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('13-Nov-2021')
            },
            {
                roomType: "Deluxe",
                roomNo: 102,
                amenities: "AC, Free Wifi, Bedsheets & Towels",
                price: 800,
                image: "image2",
                checkInTime: new Date('12-Nov-2021'),
                checkOutTime: new Date('15-Nov-2021')
            },
            {
                roomType: "Deluxe",
                roomNo: 103,
                amenities: "AC, Free Wifi, Bedsheets & Towels, TV",
                price: 1000,
                image: "image3",
                checkInTime: new Date('20-Nov-2021'),
                checkOutTime: new Date('22-Nov-2021')
            }
        ]
    }
    selectRoom(room: RoomList) {
        this.selectedRoom = room
    }
    addRoom() {
        const newRoom: RoomList = {
            roomNo: 103,
            amenities: "AC, Free Wifi, Bedsheets & Towels",
            checkInTime: new Date("12-Dec-2022"),
            checkOutTime: new Date("16-Dec-2022"),
            image: "image22",
            price: 800,
            roomType: "luxury"
        }
        // this.roomList.push(newRoom);
        this.roomList = [...this.roomList, newRoom]
    }
    ngAfterViewInit(): void {
        this.headerComponent.title = "Header Component"
    }
    ngAfterViewChecked(): void {

    }
}
