import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interface/Cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

    constructor(private catService: CatsService){}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catService.creat(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catService.findAll();
    }
}
