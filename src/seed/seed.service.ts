import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsSevice: BrandsService
  ) {}
  populateDB() {
    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandsSevice.fillBrandsWithSeedDate(BRANDS_SEED);
    return 'SEED executed';
  }
}
