import { Module } from "@nestjs/common";
import { Produto } from "./entities/produtos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./service/produtos.service";
import { ProdutoController } from "./controller/produtos.controller";

@Module ({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule],
})

export class ProdutoModule { }