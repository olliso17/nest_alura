import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService{
    produtos: Produto[]=[
        new Produto('LIV01', 'Livro de JavaScript', 29.90),
        new Produto('LIV02', 'Livro de React.js', 30),
        new Produto('LIV03', 'Livro de TypeScript', 35),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto{
        return this.produtos[0];
    }

    criar(produto:Produto){
        this.produtos.push(produto);
    }
    alterar(produto:Produto):Produto{
        return produto;
    }
    apagar(id:number){
        this.produtos.pop();
    }
}