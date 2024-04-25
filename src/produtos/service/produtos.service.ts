import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produtos.entity";
import { DeleteResult, ILike, Repository } from "typeorm";



@Injectable()
export class ProdutoService {
    produtoService: any;
    constructor (
        @InjectRepository(Produto)
        private produtoRepository: Repository <Produto>,
    ) {}

    async findAll(): Promise <Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                usuario: true,
                categoria:true
            }
        });
    } 

    async findById(id: number): Promise <Produto> {
        
        let produto = await this.produtoRepository.findOne({
            where: {
                id
             }, relations: {
                usuario: true,
                categoria:true
            }
        });

        if (!produto) 
            throw new HttpException("Produto não encontrado", HttpStatus.NOT_FOUND) 
         return produto

      
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where:{
                nome: ILike(`%${nome}%`) 
            }, relations: {
                usuario: true,
                categoria:true
            }
        }) 
    }

    async create(produto: Produto): Promise <Produto> {
        return await this.produtoRepository.save(produto)
    }

    async update(produto: Produto): Promise <Produto> {

        let buscaProduto: Produto = await this.findById(produto.id)
        if(!buscaProduto || !produto.id)
        throw new HttpException ('Postagem não encontrada', HttpStatus.NOT_FOUND);

    return await this.produtoRepository.save(produto) 
}

    async delete(id: number): Promise<DeleteResult> {
        
        let buscaProduto: Produto = await this.findById(id)

    if (!buscaProduto)
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

         return await this.produtoRepository.delete(id);

}

}

