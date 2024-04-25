import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { senha } from 'senha';
import { Produto } from './produtos/entities/produtos.entity';
import { ProdutoModule } from './produtos/produtos.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './auth/usuario/entities/usuario.entity';
import { UsuarioModule } from './auth/usuario/usuario.module';


@Module({
  imports: [ //Configura o modulo ORM na raiz do projeto.
    TypeOrmModule.forRoot({ //passa os dados do banco de dados
      type: 'mysql', 
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: senha,
      database: 'db_lojadegames',
      entities: [Produto, Categoria, Usuario],
      synchronize: true,
      logging: true,
    }),

    ProdutoModule,
    CategoriaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
