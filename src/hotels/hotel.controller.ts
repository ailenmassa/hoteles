import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode,Query} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { iHotel } from './hotel.interface';
import { HotelDto } from './hotel.dto';

@Controller('hotel')
export class HotelController {
    constructor (private readonly hotelService:HotelService){}
        @Get()
        async getHotels(): Promise<iHotel[]> {
            return await this.hotelService.getHotels()
        }
        @Get(':id')
        async getHotelsById(@Param('id') id:string): Promise<iHotel> {
            return await this.hotelService.getHotelById(id)
        }

        @Get('location')
        async getHotelsByLocation(@Query('location') location: string): Promise<iHotel[]> {
            return await this.hotelService.getHotelsByLocation(location);
        }

        @Post()
        async create(@Body() hotelDto:HotelDto):Promise<any> {
           return await this.hotelService.createHotel(hotelDto);
           
        }
        
        @Delete(':id')
        deleteHotelById(@Param('id')id:string) {
            return this.hotelService.deleteHotelById(id);
        }

        @Put(':id')
        @HttpCode(204)
        async updateHotelById(@Param('id')id:string, @Body() body:HotelDto): Promise<void>{
            return await this.hotelService.updateHotelById(id, body);
        }
}

