import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  numberOfRooms = 0;

  hideAddRooms = true;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15
  }

  roomList: RoomList[] = [
    {
      roomNumber: 102,
      roomType: 'Deluxe Room',
      amenities: 'Bathroom, Tv, Air Conditioner',
      price: 500,
      photo: 'https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80',
      checkinTime: new Date('11-Jan-2023'),
      checkoutTime: new Date('14-Feb-2023')
    },
    {
      roomNumber: 103,
      roomType: 'Normal Room',
      amenities: 'Bathroom, Tv',
      price: 200,
      photo: 'https://images.unsplash.com/photo-1536494126589-29fadf0d7e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80',
      checkinTime: new Date('21-Mar-2023'),
      checkoutTime: new Date('14-Jun-2023')
    },
    {
      roomNumber: 104,
      roomType: 'Deluxe Room',
      amenities: 'Bathroom, Tv, Air Conditioner, Pool',
      price: 600,
      photo: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      checkinTime: new Date('10-Jan-2023'),
      checkoutTime: new Date('11-Mar-2023')
    },

  ]
  toggle() {
    this.hideAddRooms = !this.hideAddRooms;
  }
  addRoom() {
    this.numberOfRooms++;
  }
}
