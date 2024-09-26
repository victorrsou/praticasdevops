// Classe simples para calcular a média de aprovação de um aluno em um arquivo “Aluno.js”
class Aluno {
        constructor(nome, notas) {
          this.nome = nome;
          this.notas = notas; // Array com 2 notas
        }
     
        calcularMedia() {
          const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
          let nota =   soma / this.notas.length;
          if (nota > 10.0) throw new Error('Média acima da máxima permitida!');
          return nota;
        }
     
        obterMencao() {
          const media = this.calcularMedia();
          if (media  >= 9) return 'SS';
          if (media  >= 7) return 'MS';
          if (media  >= 5) return 'MM';
          return 'MI';
        }
        statusAprovacao() {
            const menção = this.obterMencao();
     
            if (menção !== 'MI' && menção !== 'II') return 'aprovad@';
            return 'reprovad@';
    }
}

module.exports = Aluno;