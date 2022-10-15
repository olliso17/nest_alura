import {  Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.services';
import { SequelizeModule } from '@nestjs/sequelize';
import * as pg from 'pg';
import { Livro } from './livro.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectModule: pg,
      host: 'localhost',
      port: 5432,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'postgres',
      autoLoadModels: true,
      synchronize:true
    }),
    SequelizeModule.forFeature([Livro])
   
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule { }
