import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleWare } from './common/logger/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filter/http-Exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide : APP_FILTER, 
      useClass : HttpExceptionFilter
    }],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes({path : 'cats', method : RequestMethod.GET});
  }
}
