'use client'

import { Question, QuestionOption } from '@/types'
import Image from 'next/image'

interface QuestionCardProps {
  question: Question
  selectedValue?: string
  onAnswerSelect: (questionId: number, option: QuestionOption) => void
}

export default function QuestionCard({ question, selectedValue, onAnswerSelect }: QuestionCardProps) {
  return (
    <div className="card" style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ paddingBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.875rem', color: '#166534', lineHeight: '1.4', marginBottom: '1rem' }}>
          {question.text}
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#4b5563', marginTop: '0.5rem' }}>
          {question.description}
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Imagem Ilustrativa */}
        <div style={{ position: 'relative', width: '100%', height: '20rem', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
          <Image
            src={question.imageUrl}
            alt={question.imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: #f0fdf4; border: 2px dashed #bbf7d0; color: #16a34a; text-align: center; padding: 2rem;">
                    <div>
                      <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🌱</div>
                      <p style="font-size: 0.875rem; margin-bottom: 0.25rem;">Imagem ilustrativa</p>
                      <p style="font-size: 0.75rem; color: #6b7280; max-width: 20rem;">${question.imageAlt}</p>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>

        {/* Opções de Resposta */}
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <h4 style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
            Selecione a opção que melhor descreve seu solo:
          </h4>
          {question.options.map((option) => (
            <button
              key={option.value}
              style={{
                justifyContent: 'flex-start',
                textAlign: 'left',
                padding: '1rem',
                height: 'auto',
                transition: 'all 0.2s',
                backgroundColor: selectedValue === option.value ? '#16a34a' : 'white',
                color: selectedValue === option.value ? 'white' : '#374151',
                border: `2px solid ${selectedValue === option.value ? '#16a34a' : '#bbf7d0'}`,
                borderRadius: '0.5rem',
                cursor: 'pointer',
                boxShadow: selectedValue === option.value ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                transform: selectedValue === option.value ? 'scale(1.02)' : 'scale(1)'
              }}
              onClick={() => onAnswerSelect(question.id, option)}
              onMouseOver={(e) => {
                if (selectedValue !== option.value) {
                  e.currentTarget.style.backgroundColor = '#f0fdf4';
                  e.currentTarget.style.borderColor = '#16a34a';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }
              }}
              onMouseOut={(e) => {
                if (selectedValue !== option.value) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#bbf7d0';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  border: `2px solid ${selectedValue === option.value ? 'white' : '#16a34a'}`,
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {selectedValue === option.value && (
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '50%',
                      backgroundColor: 'white'
                    }}></div>
                  )}
                </div>
                <span style={{ flex: 1, fontSize: '1rem', fontWeight: '500' }}>
                  {option.label}
                </span>
                <span style={{
                  fontSize: '0.875rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: selectedValue === option.value ? 'rgba(255, 255, 255, 0.2)' : '#dcfce7',
                  color: selectedValue === option.value ? 'white' : '#15803d'
                }}>
                  {option.score}/10 pts
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Dica Adicional */}
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.5rem', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span style={{ color: '#3b82f6', fontSize: '1.125rem' }}>💡</span>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e40af', marginBottom: '0.25rem' }}>Dica:</p>
              <p style={{ fontSize: '0.875rem', color: '#1d4ed8' }}>
                Use a imagem como referência para comparar com o que você observa em seu solo. 
                Não se preocupe se não for uma correspondência exata - escolha a opção mais próxima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}