import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interface/Cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
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
