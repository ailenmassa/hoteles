import { Injectable } from '@nestjs/common';
import { iHotel } from './hotel.interface';
import { createId } from 'src/utils/utils';
import { HotelDto } from './hotel.dto';
const base_url:string = 'http://localhost:3030/hotels/';

@Injectable()
export class HotelService {
   async getHotels(): Promise<iHotel[]> {
    const res = await fetch(base_url);
    const hotels = await res.json();
        return hotels;
    } 
    
    async getHotelById(id:string): Promise<iHotel> {
    const res = await fetch(base_url + id);
    const hotel = await res.json();
    return hotel;
    }

    async getHotelsByLocation(location: string): Promise<iHotel[]> {
        const res = await fetch(base_url);
        const hotels = await res.json();
        return hotels.filter((hotel: iHotel) => hotel.location === location);
    }

    async createHotel(hotelDto:HotelDto): Promise<iHotel> {
        const id = createId();
        const newHotel = {...hotelDto, id};
        const res = await fetch(base_url, {
            method: 'POST',
            headers: {
                'Content-Type':'application.json',
            },
            body:JSON.stringify(newHotel)
        });
        const parsedResponse = await res.json();
        return parsedResponse; 
}

      async deleteHotelById(id:string):Promise<any> {
        const res = await fetch(base_url + id, {
            method: 'DELETE',
        });
        const parsedResponse = await res.json();
        return parsedResponse;
    }
      
     async updateHotelById(id:string, body: HotelDto): Promise<any> {
        const isHotel = await this.getHotelById(id);
        if (!Object.keys(isHotel).length) return;
        const updatedHotel = {...body, id} ;
        const res = await fetch(base_url + id, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updatedHotel),
        });
     }
}
