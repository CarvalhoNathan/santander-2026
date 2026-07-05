// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const entrada = gets();

const [nome, saldoEmCentavos] = entrada.split(" ");

const saldoFormatado = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2
}).format(saldoEmCentavos / 100);

print(`Bem-vindo, ${nome}! Seu saldo é R$${saldoFormatado}`);


// TODO: Separe o nome do usuário e o saldo em centavos a partir da entrada
// Dica: Use split para separar a string e parseInt para converter o saldo para número

// Exemplo de saída esperada (após implementar o TODO):
// print(`Bem-vindo, Nome! Seu saldo é R$0,00`);
// não pode haver espaço após o R$, no nosso caso está tendo espaço após o R$