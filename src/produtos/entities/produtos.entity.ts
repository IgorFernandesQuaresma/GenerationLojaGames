import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";




@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()     //Define chave primaria e autoIncremento
    id: number;

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 }) 
    preco: number;

    @IsNotEmpty()
    @Column({length:1000, nullable: false})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    
    categoria: Categoria
}