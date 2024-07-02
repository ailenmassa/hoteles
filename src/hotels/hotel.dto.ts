import {IsString} from 'class-validator';
export class HotelDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    location: string;
    @IsString()
    images: string;
}