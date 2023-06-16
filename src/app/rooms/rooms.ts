export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}
export interface RoomList {
    roomNo: number;
    roomType: string;
    amenities: string;
    price: number;
    image: string;
    checkInTime: Date;
    checkOutTime: Date;
}
