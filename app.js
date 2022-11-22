console.log('app.js working');

// definir o root
//definir o centro do array como parent
//particionar array em esquerda(left) e direita(right) (children of parent)
//para cada valor do array
// se o valor for menor que node, posicionar a esquerda, maior a direita
// só insere o valor quando o fim for null E não sobrar valores para inserir.
// assim fica recursivo.


class Node{
    constructor(value,leftChild=null,rightChild=null){
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    }
}


class Three{
    constructor(array){
        this.array = array;
        this.root = null;
    }

    buildThree(){
        let array = this.array.sort((a,b)=>a-b);
        let middle = [array[Math.floor(array.length/2)]];
        let left = array.slice(0,middle-1);
        let right= array.slice(middle,array.length+1);

        const node = new Node(middle,left,right)
        return node;
    }

    insert(value){
        let node = new Node(value)

        //se root for null, node criado será root
        if(this.root === null){
            this.root = node
        }else {
            //acha a posição correta para inserir novo node
            this.insertNode(this.root,node)
        }
    }

    //insere novo node, se menor, vai para esquerda
    // percorre a esquerda de maneira recursiva até encontrar null
    // null significa que tem espaço para ser adicionado.
    // igual para direita.  
    insertNode(rootNode,newNode){
        if(newNode.value < rootNode.value){
            if(rootNode.left === null){
                rootNode.left = newNode;
            } else{
                this.insertNode(rootNode.left,newNode)
            }
        } else if(newNode.value>rootNode.value){
            if(rootNode.right === null){
                rootNode.right = newNode;
            } else{
                this.insertNode(rootNode.right,newNode)
            }
        }
    }

    //Remove um determinado valor
    //Como um node será excluído é necessário redefinir
    //um novo node para atualizar a árvore
    //utiliza deleteNode para realizar as operações.
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    deleteNode(node,keyValue){
        //Se valor == null, árvore vazia
        // para percorrer a árvore, compara valor menor(esquerda)
        // ou maior(direita) com valor do node, ('root temporário')
        if(node===null){
            return null
        }else if(keyValue<node.value){
            node.left = this.deleteNode(node.left, keyValue);
            return node;
        }else if(keyValue>node.value){
            node.right = this.deleteNode(node.right,keyValue);
            return node;
        }
        //se valores iguais
        else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }
            // aux armazena o próximo node, que irá "subir" a árvore.
            let aux = this.findMinNode(node.right);//precisa criar função
            node.value = aux.value;
            node.right = this.deleteNode(node.right, aux.value)
            return node;
        }
    }

    //Percorre a árvore, método in order: primeiro esquerda completa, depois direita.
    inOrder(node){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
    preOrder(node){
        if(node !== null){
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node){
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    //procura por um node a partir de u valor mínimo
    //se esquerda == null, significa que foi o menor valor da árvore
    // se não, percorre de maneira recursiva até null.
    findMinNode(node){
        if(node.left === null){
            return node;
        } else{
            return this.findMinNode(node.left)
        }
    }
    //retorna root da árvore
    getRootNode(){
        return this.root
    }
    //encontra node com x valor, retorna node no else
    search(node, value){
        if(node === null){
            return null
        }else if(value < node.value){
            return this.search(node.left,value)
        }else if(value > node.right){
            return this.search(node.right, value)
        }
        else{
            return node
        }
    }
}


//const three =  new Three([2,1,3,5,6,7,8,4])
const three = new Three()
three.insert(1)
three.insert(3)
three.insert(27)
three.insert(5)
three.insert(0)
three.insert(9)


three.inOrder(three.getRootNode())



//************** A FAZER: **********************
//seção .3 da página do TOP.
//ainda necessário escrever os métodos de insert, delete..
//ver página do projeto.

/// !!!!! OBS IMPORTANTE !! OBS !! OBS !! OBS
//obs: a lógica do método "LevelOrder"
// é percorrer a árvore, toda vez que root != null
// possui um próximo level a percorrer
// não utilizar um ponteiro/cursor (current)
// utilizar o conceito de queue, uma fila, First In First Out.
// lembrar, a recursividade é mantida por root, se root == null
// significa que acabou a árvore.



// ESTOU FAZENDO: TENTANDO MANTER RECURSIVO PARA CONSTRUIR A ÁRVORE INTEIRA,
// VER COMENTÁRIOS ABAIXO:

// OBS: Sem progresso
// como manter recursivo? como passar novos parents?
// se left ou right de node == null, fim da array.

// se o valor for menor que node, posicionar a esquerda, maior a direita
// só insere o valor quando o fim for null E não sobrar valores para inserir.
// assim fica recursivo.

//21/11:
//07:52 às 08:41. tentando manter recursivo.
//08:58 às 09:44. //criar método de insert/delete.
//10:00 às 10:06 // criando função delete

//22/11
//08:00 às 08:36
//08:50 às 09:13, funções auxiliares.

//Faltam algumas funções.
