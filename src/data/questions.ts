import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Existem minhocas ou outros organismos vivos visíveis no solo?",
    description: "A presença de minhocas e outros organismos indica atividade biológica saudável no solo.",
    imageUrl: "/images/pergunta-1.jpg",
    imageAlt: "Comparação entre solo com minhocas e organismos visíveis versus solo seco sem vida",
    options: [
      { value: "many", label: "Muitas minhocas e organismos", score: 10 },
      { value: "some", label: "Alguns organismos visíveis", score: 7 },
      { value: "few", label: "Poucos ou nenhum", score: 3 }
    ],
    weight: 1.2
  },
  {
    id: 2,
    text: "O solo apresenta cobertura vegetal (grama, palha, folhas)?",
    description: "A cobertura vegetal protege o solo da erosão e mantém a umidade.",
    imageUrl: "/images/pergunta-2.jpg",
    imageAlt: "Solo com boa cobertura vegetal, grama e palha versus solo descoberto e exposto",
    options: [
      { value: "full", label: "Cobertura completa", score: 10 },
      { value: "partial", label: "Cobertura parcial", score: 6 },
      { value: "none", label: "Solo descoberto", score: 2 }
    ],
    weight: 1.1
  },
  {
    id: 3,
    text: "A produção da safra anterior foi:",
    description: "A produtividade anterior indica a capacidade nutricional do solo.",
    imageUrl: "/images/pergunta-3.jpg",
    imageAlt: "Colheita saudável e produtiva versus safra com baixo rendimento",
    options: [
      { value: "above", label: "Acima da média", score: 10 },
      { value: "average", label: "Dentro da média", score: 7 },
      { value: "below", label: "Abaixo da média", score: 4 }
    ],
    weight: 1.0
  },
  {
    id: 4,
    text: "O solo passou por período de estiagem recentemente?",
    description: "Períodos prolongados de seca afetam a estrutura e vida do solo.",
    imageUrl: "/images/pergunta-4.jpg",
    imageAlt: "Solo ressecado e rachado pela seca versus solo bem hidratado e saudável",
    options: [
      { value: "no", label: "Não houve estiagem", score: 10 },
      { value: "short", label: "Estiagem curta", score: 6 },
      { value: "long", label: "Estiagem prolongada", score: 2 }
    ],
    weight: 0.9
  },
  {
    id: 5,
    text: "Há presença de matéria orgânica visível (folhas, raízes, restos de cultivo)?",
    description: "Matéria orgânica enriquece o solo com nutrientes e melhora sua estrutura.",
    imageUrl: "/images/pergunta-5.jpg",
    imageAlt: "Solo rico em matéria orgânica com folhas, raízes e material em decomposição versus solo pobre em conteúdo orgânico",
    options: [
      { value: "abundant", label: "Abundante matéria orgânica", score: 10 },
      { value: "moderate", label: "Moderada quantidade", score: 7 },
      { value: "little", label: "Pouca ou nenhuma", score: 3 }
    ],
    weight: 1.3
  },
  {
    id: 6,
    text: "O solo tem cheiro de terra úmida (indício de atividade biológica)?",
    description: "O cheiro característico de terra úmida indica atividade microbiana saudável.",
    imageUrl: "/images/pergunta-6.jpg",
    imageAlt: "Solo fresco e úmido com cheiro de terra e atividade biológica versus solo estéril sem odor",
    options: [
      { value: "strong", label: "Cheiro forte de terra úmida", score: 10 },
      { value: "mild", label: "Cheiro suave", score: 7 },
      { value: "none", label: "Sem cheiro ou odor ruim", score: 3 }
    ],
    weight: 1.0
  },
  {
    id: 7,
    text: "Qual é a cor predominante do seu solo?",
    description: "A cor do solo indica o teor de matéria orgânica e características minerais. Solos escuros são ricos em matéria orgânica, solos vermelhos e amarelos são comuns no Brasil.",
    imageUrl: "/images/pergunta-7.jpg",
    imageAlt: "Comparação de cores de solo brasileiros: solo escuro rico em matéria orgânica, solo vermelho argiloso e solo amarelo arenoso",
    options: [
      { value: "dark", label: "Solo escuro (preto/marrom escuro) - rico em matéria orgânica", score: 10 },
      { value: "red", label: "Solo vermelho - argiloso, comum no Brasil", score: 7 },
      { value: "yellow", label: "Solo amarelo - mais arenoso, menor fertilidade", score: 4 }
    ],
    weight: 1.1
  },
  {
    id: 8,
    text: "A superfície do solo está compactada ou fácil de penetrar com uma ferramenta simples?",
    description: "Solo compactado dificulta o crescimento das raízes e a infiltração de água.",
    imageUrl: "/images/pergunta-8.jpg",
    imageAlt: "Superfície de solo compactado e duro versus solo solto, penetrável e bem estruturado",
    options: [
      { value: "loose", label: "Fácil de penetrar, solto", score: 10 },
      { value: "moderate", label: "Moderadamente compactado", score: 6 },
      { value: "hard", label: "Muito compactado", score: 2 }
    ],
    weight: 1.2
  },
  {
    id: 9,
    text: "Há presença de erosão ou ravinas?",
    description: "Erosão indica perda de solo fértil e problemas estruturais.",
    imageUrl: "/images/pergunta-9.jpg",
    imageAlt: "Solo com erosão, sulcos, ravinas e danos por escoamento versus superfície de solo estável e protegida",
    options: [
      { value: "none", label: "Sem sinais de erosão", score: 10 },
      { value: "mild", label: "Erosão leve", score: 6 },
      { value: "severe", label: "Erosão severa com ravinas", score: 1 }
    ],
    weight: 1.0
  },
  {
    id: 10,
    text: "Quando chove, o solo absorve bem a água ou forma poças e escoamento?",
    description: "Boa infiltração indica estrutura de solo saudável e permeabilidade adequada.",
    imageUrl: "/images/pergunta-10.jpg",
    imageAlt: "Solo absorvendo bem a água da chuva com boa infiltração versus água empoçando com escoamento e drenagem ruim",
    options: [
      { value: "absorbs", label: "Absorve rapidamente", score: 10 },
      { value: "slow", label: "Absorve lentamente", score: 6 },
      { value: "pools", label: "Forma poças e escoa", score: 2 }
    ],
    weight: 1.1
  }
];

export const totalQuestions = questions.length;