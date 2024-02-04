

var estudantes = [
    { 
     nome: "João",
     nota1: 8,
     nota2: 7 
    },

    { 
     nome: "Maria",
     nota1: 6,
     nota2: 9 
    },

    { 
     nome: "Pedro",
     nota1: 7,
     nota2: 7.5 
    }
  ];
  
  
  function calcularMedia(estudante) {
    return (estudante.nota1 + estudante.nota2) / 2;
  }
  
 
  function verificarSucesso() {
    for (var i = 0; i < estudantes.length; i++) {
      var aluno = estudantes[i];
      var media = calcularMedia(aluno);
  
      if (media >= 7) {
        alert(aluno.nome + " foi aprovado com média " + media.toFixed(2));
      } else {
        alert(aluno.nome + " não foi aprovado com média " + media.toFixed(2));
      }
    }
  }
  
  
  verificarSucesso();
