import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe()) id: string) {
    const cars = this.carsService.findOneById(id);
    return cars;
  }
  @Post()
  createCar(@Body() CreateCarDto: CreateCarDto) {
    return this.carsService.create(CreateCarDto);
  }
  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCarDto: UpdateCarDto
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.carsService.delete(id);
  }
}
