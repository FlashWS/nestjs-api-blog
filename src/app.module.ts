import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'nestjs-config';
import { BlogModule } from './blog/blog.module';
import * as path from 'path';

@Module({
  imports: [
      ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
      MongooseModule.forRoot('mongodb://localhost/blog_app', { useNewUrlParser: true }),
      BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
