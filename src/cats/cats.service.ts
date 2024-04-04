import { Injectable } from '@nestjs/common';
import { Cat } from './interface/Cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    
    creat(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
