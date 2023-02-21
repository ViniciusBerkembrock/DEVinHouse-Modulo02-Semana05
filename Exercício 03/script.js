
class MeuNome {
    constructor(nome, sobrenome) {
      this._nome = nome;
      this._sobrenome = sobrenome;
    }
  
  
    imprime() {

      const impressora = () => {
        console.log("Meu nome é", this._nome, this._sobrenome);
      }
  
      impressora();

    }
  }
  
  const meuNome = new MeuNome('Vinícius', 'Berkembrock Marcon');
  meuNome.imprime();