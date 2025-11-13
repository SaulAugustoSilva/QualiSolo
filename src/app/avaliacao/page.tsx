'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '@/components/ProgressBar'
import QuestionCard from '@/components/QuestionCard'
import { questions } from '@/data/questions'
import { Answer, QuestionOption, ProgressInfo } from '@/types'

export default function AvaliacaoPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  
  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id)

  // Informações de progresso
  const progressInfo: ProgressInfo = {
    current: currentQuestionIndex + 1,
    total: questions.length,
    percentage: ((currentQuestionIndex + 1) / questions.length) * 100
  }

  // Função para lidar com seleção de resposta
  const handleAnswerSelect = (questionId: number, option: QuestionOption) => {
    const newAnswer: Answer = {
      questionId,
      selectedValue: option.value,
      score: option.score
    }

    setAnswers(prevAnswers => {
      const existingIndex = prevAnswers.findIndex(a => a.questionId === questionId)
      if (existingIndex >= 0) {
        // Atualizar resposta existente
        const updated = [...prevAnswers]
        updated[existingIndex] = newAnswer
        return updated
      } else {
        // Adicionar nova resposta
        return [...prevAnswers, newAnswer]
      }
    })
  }

  // Navegar para próxima pergunta
  const handleNext = () => {
    if (isLastQuestion) {
      // Salvar respostas no localStorage e navegar para resultado
      localStorage.setItem('soilEvaluationAnswers', JSON.stringify(answers))
      router.push('/resultado')
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  // Navegar para pergunta anterior
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  // Carregar respostas salvas (se houver)
  useEffect(() => {
    const savedAnswers = localStorage.getItem('soilEvaluationAnswers')
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers)
        setAnswers(parsed)
      } catch (error) {
        console.warn('Erro ao carregar respostas salvas:', error)
      }
    }
  }, [])

  // Salvar progresso automaticamente
  useEffect(() => {
    if (answers.length > 0) {
      localStorage.setItem('soilEvaluationProgress', JSON.stringify({
        currentQuestionIndex,
        answers
      }))
    }
  }, [answers, currentQuestionIndex])

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🌱 Avaliação QualiSolo
        </h1>
        <p className="text-lg text-gray-600">
          Responda baseado no que você observa em seu solo
        </p>
      </header>

      {/* Barra de Progresso */}
      <ProgressBar progress={progressInfo} />

      {/* Card da Pergunta */}
      <div className="mb-8">
        <QuestionCard
          question={currentQuestion}
          selectedValue={currentAnswer?.selectedValue}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>

      {/* Navegação */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '64rem', margin: '0 auto' }}>
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="btn"
          style={{
            padding: '1rem 2rem',
            border: '2px solid #16a34a',
            color: '#15803d',
            backgroundColor: 'white',
            opacity: currentQuestionIndex === 0 ? 0.5 : 1,
            cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          ← Anterior
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">
            {currentAnswer ? '✓ Respondida' : 'Selecione uma opção para continuar'}
          </p>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  backgroundColor: index === currentQuestionIndex
                    ? '#22c55e'
                    : answers.some(a => a.questionId === questions[index].id)
                    ? '#86efac'
                    : '#d1d5db'
                }}
                title={`Pergunta ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          className="btn btn-primary"
          style={{
            padding: '1rem 2rem',
            opacity: !currentAnswer ? 0.5 : 1,
            cursor: !currentAnswer ? 'not-allowed' : 'pointer'
          }}
        >
          {isLastQuestion ? '📊 Ver Resultado' : 'Próxima →'}
        </button>
      </div>

      {/* Info Adicional */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        <p>💾 Seu progresso é salvo automaticamente</p>
        <p className="mt-1">⏱️ Tempo estimado restante: {Math.ceil((questions.length - currentQuestionIndex) * 0.5)} minutos</p>
      </div>
    </div>
  )
}