import { Answer, EvaluationResult, SoilQualityCategory } from '@/types';
import { questions } from '@/data/questions';

export const soilQualityCategories: Record<string, SoilQualityCategory> = {
  poor: {
    name: "Solo de Baixa Qualidade",
    description: "O solo apresenta sérios problemas que afetam sua produtividade e saúde.",
    color: "#ef4444", // red-500
    bgColor: "#fef2f2", // red-50
    icon: "🔴",
    recommendations: [
      "Adicionar matéria orgânica (compostagem, esterco bem curtido)",
      "Implementar cobertura vegetal para proteção",
      "Corrigir compactação com subsolagem ou aeração",
      "Estabelecer sistemas de drenagem adequados",
      "Controlar erosão com terraceamento ou barreiras",
      "🚨 URGENTE: Contratar engenheiro agrônomo ou agrônomo para análise físico-química completa do solo"
    ]
  },
  medium: {
    name: "Solo de Qualidade Média",
    description: "O solo tem potencial, mas precisa de melhorias para otimizar sua produtividade.",
    color: "#eab308", // yellow-500
    bgColor: "#fefce8", // yellow-50
    icon: "🟡",
    recommendations: [
      "Aumentar adição de matéria orgânica",
      "Manter cobertura vegetal permanente",
      "Implementar rotação de culturas",
      "Melhorar práticas de irrigação",
      "Monitorar e corrigir pH se necessário",
      "Adicionar microrganismos benéficos",
      "💼 Recomendado: Contratar engenheiro agrônomo ou agrônomo para coleta de amostras e análise detalhada do solo"
    ]
  },
  good: {
    name: "Solo Saudável e Produtivo",
    description: "Parabéns! Seu solo está em excelente estado e altamente produtivo.",
    color: "#22c55e", // green-500
    bgColor: "#f0fdf4", // green-50
    icon: "🟢",
    recommendations: [
      "Manter as práticas atuais de manejo",
      "Continuar adição regular de matéria orgânica",
      "Preservar a cobertura vegetal existente",
      "Monitorar regularmente a saúde do solo",
      "Considerar práticas regenerativas avançadas",
      "Compartilhar suas práticas com outros produtores"
    ]
  }
};

export function calculateSoilQuality(answers: Answer[]): EvaluationResult {
  let totalWeightedScore = 0;
  let totalWeight = 0;

  // Calcular pontuação ponderada
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      totalWeightedScore += answer.score * question.weight;
      totalWeight += question.weight;
    }
  });

  // Normalizar para escala 0-100
  const normalizedScore = totalWeight > 0 ? (totalWeightedScore / totalWeight) : 0;
  const finalScore = Math.round(normalizedScore * 10); // Multiplica por 10 para escala 0-100
  
  // Garantir que a pontuação fique entre 10-100
  const clampedScore = Math.max(10, Math.min(100, finalScore));

  // Determinar categoria
  let category: SoilQualityCategory;
  if (clampedScore >= 80) {
    category = soilQualityCategories.good;
  } else if (clampedScore >= 50) {
    category = soilQualityCategories.medium;
  } else {
    category = soilQualityCategories.poor;
  }

  return {
    totalScore: clampedScore,
    percentage: clampedScore,
    category,
    answers
  };
}

export function getScoreColor(score: number): string {
  if (score >= 80) return soilQualityCategories.good.color;
  if (score >= 50) return soilQualityCategories.medium.color;
  return soilQualityCategories.poor.color;
}

export function getScoreBackgroundColor(score: number): string {
  if (score >= 80) return soilQualityCategories.good.bgColor;
  if (score >= 50) return soilQualityCategories.medium.bgColor;
  return soilQualityCategories.poor.bgColor;
}