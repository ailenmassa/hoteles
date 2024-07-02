import { Module } from '@nestjs/common';
import { HotelController } from './hotels/hotel.controller';
import { HotelService } from './hotels/hotel.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'data'), 
  }),],
  controllers: [ HotelController],
  providers: [HotelService],
})
export class AppModule {}
