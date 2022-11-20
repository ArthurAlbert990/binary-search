console.log('app.js working');

//definir o centro do array como root
//particionar array em esquerda(left) e direita(right)
//repetir o procedimento no array esquerdo
//repetir o procedimento no array direito.


class Node{
    constructor(root,leftChild,rightChild){
        this.root = root;
        this.left = leftChild;
        this.right = rightChild;
    }
}


class Three{
    constructor(array){
        this.array = array;
        this.root = this.buildThree();
    }

    //PAREI NESTA FUNÇÃO
    buildThree(){
        let array = this.array.sort((a,b)=>a-b);
        let middle = [array[Math.floor(array.length/2)]];
        let left = array.slice(0,middle-1);
        let right= array.slice(middle,array.length+1);

        const node = new Node(middle,left,right)
        return node;
    }
}


const three =  new Three([2,1,3,5,6,7,8,4])
console.log(three.root)



//************** A FAZER: **********************
//seção .3 da página do TOP.
//ainda necessário escrever os métodos de insert, delete..
//ver página do projeto.

/// !!!!! OBS IMPORTANTE !! OBS !! OBS !! OBS
//obs: a lógica da próxima função "LevelOrder"
// é percorrer a árvore, toda vez que root != null
// possui um próximo level a percorrer
// não utilizar um ponteiro/cursor (current)
// utilizar o conceito de queue, uma fila, First In First Out.
// lembrar, a recursividade é mantida por root, se root == null
// significa que acabou a árvore.

//07:55 ás 09:15.