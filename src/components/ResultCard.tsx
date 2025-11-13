'use client'

import { EvaluationResult } from '@/types'
import Link from 'next/link'

interface ResultCardProps {
  result: EvaluationResult
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Recomendações */}
      <div className="card">
        <h3 style={{ fontSize: '1.5rem', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span>💡</span>
          <span>Recomendações para Seu Solo</span>
        </h3>
        <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '1.5rem' }}>
          Baseadas na sua avaliação, aqui estão as principais ações recomendadas:
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {result.category.recommendations.map((recommendation, index) => {
            const isProfessionalRecommendation = 
              recommendation.includes('engenheiro agrônomo') || 
              recommendation.includes('agrônomo');
            
            const isUrgent = recommendation.includes('URGENTE');
            
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid',
                  background: isProfessionalRecommendation
                    ? isUrgent 
                      ? 'linear-gradient(to right, #fef2f2, #fff7ed)'
                      : 'linear-gradient(to right, #eff6ff, #eef2ff)'
                    : 'linear-gradient(to right, #f0fdf4, #ecfdf5)',
                  borderColor: isProfessionalRecommendation
                    ? isUrgent 
                      ? '#fecaca'
                      : '#bfdbfe'
                    : '#bbf7d0'
                }}
              >
                <div style={{
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  color: 'white',
                  backgroundColor: isProfessionalRecommendation
                    ? isUrgent 
                      ? '#ef4444'
                      : '#3b82f6'
                    : '#22c55e'
                }}>
                  {index + 1}
                </div>
                <p style={{
                  lineHeight: '1.6',
                  color: isProfessionalRecommendation
                    ? isUrgent 
                      ? '#991b1b'
                      : '#1e40af'
                    : '#374151',
                  fontWeight: isProfessionalRecommendation ? '500' : 'normal'
                }}>
                  {recommendation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Consultoria Profissional */}
      {(result.totalScore < 80) && (
        <div style={{
          border: '2px solid',
          borderColor: result.totalScore < 50 ? '#fca5a5' : '#93c5fd',
          background: result.totalScore < 50 
            ? 'linear-gradient(to right, #fef2f2, #fff7ed)' 
            : 'linear-gradient(to right, #eff6ff, #eef2ff)',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: result.totalScore < 50 ? '#991b1b' : '#1e40af',
            marginBottom: '1rem'
          }}>
            <span>{result.totalScore < 50 ? '🚨' : '👨‍🌾'}</span>
            <span>
              {result.totalScore < 50 
                ? 'Consultoria Profissional URGENTE' 
                : 'Consultoria Profissional Recomendada'
              }
            </span>
          </h3>
          <div style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px dashed',
            borderColor: result.totalScore < 50 ? '#fca5a5' : '#93c5fd',
            backgroundColor: result.totalScore < 50 ? '#fef2f2' : '#eff6ff'
          }}>
            {result.totalScore < 50 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                  <h4 style={{ fontWeight: 'bold', color: '#991b1b', fontSize: '1.125rem' }}>Ação Urgente Necessária</h4>
                </div>
                <p style={{ color: '#b91c1c', lineHeight: '1.6' }}>
                  Seu solo apresenta problemas significativos que requerem intervenção profissional imediata. 
                  É <strong>altamente recomendado</strong> contratar um <strong>engenheiro agrônomo ou agrônomo</strong> 
                  para realizar uma <strong>análise físico-química completa</strong> do solo.
                </p>
                <div style={{ backgroundColor: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '0.5rem', padding: '0.75rem', marginTop: '0.75rem' }}>
                  <h5 style={{ fontWeight: '600', color: '#991b1b', marginBottom: '0.5rem' }}>O que o profissional fará:</h5>
                  <ul style={{ color: '#b91c1c', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '1rem' }}>
                    <li>• Coleta adequada de amostras de solo</li>
                    <li>• Análise laboratorial completa (pH, nutrientes, matéria orgânica)</li>
                    <li>• Diagnóstico preciso dos problemas</li>
                    <li>• Plano de correção e recuperação personalizado</li>
                    <li>• Acompanhamento técnico durante o processo</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>💡</span>
                  <h4 style={{ fontWeight: 'bold', color: '#1e40af', fontSize: '1.125rem' }}>Otimize Seus Resultados</h4>
                </div>
                <p style={{ color: '#1d4ed8', lineHeight: '1.6' }}>
                  Seu solo tem potencial! Para maximizar sua produtividade, considere contratar um 
                  <strong> engenheiro agrônomo ou agrônomo</strong> para realizar uma <strong>análise 
                  detalhada</strong> e obter recomendações específicas de manejo.
                </p>
                <div style={{ backgroundColor: '#dbeafe', border: '1px solid #93c5fd', borderRadius: '0.5rem', padding: '0.75rem', marginTop: '0.75rem' }}>
                  <h5 style={{ fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>Benefícios da consultoria:</h5>
                  <ul style={{ color: '#1d4ed8', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '1rem' }}>
                    <li>• Análise precisa de nutrientes e pH</li>
                    <li>• Recomendação de correções específicas</li>
                    <li>• Plano de adubação personalizado</li>
                    <li>• Orientações sobre cultivos mais adequados</li>
                    <li>• Maximização da produtividade</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Detalhes da Avaliação */}
      <div className="card">
        <h3 style={{ fontSize: '1.25rem', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span>📋</span>
          <span>Detalhes da Sua Avaliação</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gap: '1.5rem' }}>
          {/* Resumo das Respostas */}
          <div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Resumo das Respostas:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {result.answers.map((answer) => (
                <div key={answer.questionId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                    Pergunta {answer.questionId}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: answer.score >= 8 
                        ? '#dcfce7'
                        : answer.score >= 5 
                        ? '#fef3c7'
                        : '#fee2e2',
                      color: answer.score >= 8 
                        ? '#166534'
                        : answer.score >= 5 
                        ? '#92400e'
                        : '#991b1b'
                    }}>
                      {answer.score}/10
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estatísticas */}
          <div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Estatísticas:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#4b5563' }}>Pontuação Total:</span>
                <span style={{ fontWeight: 'bold', color: result.category.color }}>
                  {result.totalScore}/100
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#4b5563' }}>Categoria:</span>
                <span style={{ fontWeight: '600', color: result.category.color }}>
                  {result.category.name.split(' ')[2]} {/* Pega só "Baixa/Média/Alta" */}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#4b5563' }}>Perguntas Respondidas:</span>
                <span style={{ fontWeight: '600', color: '#1f2937' }}>
                  {result.answers.length}/10
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#4b5563' }}>Pontuação Média:</span>
                <span style={{ fontWeight: '600', color: '#1f2937' }}>
                  {(result.answers.reduce((sum, answer) => sum + answer.score, 0) / result.answers.length).toFixed(1)}/10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Próximos Passos */}
      <div style={{ background: 'linear-gradient(to right, #eff6ff, #eef2ff)', border: '1px solid #bfdbfe', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span>🚀</span>
          <span>Próximos Passos</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gap: '1rem' }}>
          <div>
            <h5 style={{ fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>Implementação:</h5>
            <p style={{ color: '#1d4ed8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Comece implementando as primeiras 2-3 recomendações. Mudanças no solo levam tempo, 
              então seja paciente e consistente.
            </p>
          </div>
          <div>
            <h5 style={{ fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>Reavaliação:</h5>
            <p style={{ color: '#1d4ed8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Refaça esta avaliação em 3-6 meses para monitorar o progresso e 
              ajustar as práticas de manejo.
            </p>
          </div>
        </div>
      </div>

      {/* Ações */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/avaliacao" className="btn" style={{ border: '2px solid #22c55e', color: '#15803d', backgroundColor: 'white', padding: '1rem 2rem' }}>
            🔄 Nova Avaliação
          </Link>
          <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
            🏠 Página Inicial
          </Link>
        </div>
      </div>
    </div>
  )
}