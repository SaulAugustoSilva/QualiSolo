'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { calculateSoilQuality } from '@/lib/soilEvaluation'
import { Answer, EvaluationResult } from '@/types'
import SoilQualityChart from '@/components/SoilQualityChart'
import ResultCard from '@/components/ResultCard'
import Link from 'next/link'

export default function ResultadoPage() {
  const router = useRouter()
  const [result, setResult] = useState<EvaluationResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Carregar respostas do localStorage
    const savedAnswers = localStorage.getItem('soilEvaluationAnswers')
    
    if (!savedAnswers) {
      // Se não há respostas salvas, redirecionar para avaliação
      router.push('/avaliacao')
      return
    }

    try {
      const answers: Answer[] = JSON.parse(savedAnswers)
      
      if (answers.length === 0) {
        router.push('/avaliacao')
        return
      }

      // Calcular resultado
      const evaluationResult = calculateSoilQuality(answers)
      setResult(evaluationResult)
      setIsLoading(false)

    } catch (error) {
      console.error('Erro ao processar respostas:', error)
      router.push('/avaliacao')
    }
  }, [router])

  // Função para compartilhar resultado (futura implementação)
  const handleShare = () => {
    if (!result) return

    const shareText = `🌱 Minha avaliação QualiSolo: ${result.totalScore}/100 pontos - ${result.category.name}!`
    
    if (navigator.share) {
      navigator.share({
        title: 'QualiSolo - Resultado da Avaliação',
        text: shareText,
        url: typeof window !== 'undefined' ? window.location.origin : ''
      }).catch(console.error)
    } else {
      // Fallback: copiar para clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Resultado copiado para a área de transferência!')
      }).catch(() => {
        alert('Não foi possível copiar o resultado.')
      })
    }
  }

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3.75rem', marginBottom: '1rem', animation: 'spin 2s linear infinite' }}>🌱</div>
          <p style={{ fontSize: '1.25rem', color: '#15803d', fontWeight: '500' }}>
            Processando sua avaliação...
          </p>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.5rem' }}>
            Analisando a qualidade do seu solo
          </p>
        </div>
        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (!result) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
          <div style={{ fontSize: '3.75rem', marginBottom: '1rem' }}>❌</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Erro ao Carregar Resultado
          </h1>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            Não foi possível processar sua avaliação. Tente fazer uma nova avaliação.
          </p>
          <Link href="/avaliacao" className="btn btn-primary">
            🔄 Nova Avaliação
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🎯 Resultado da Sua Avaliação
        </h1>
        <p className="text-lg text-gray-600">
          Aqui está a análise completa da qualidade do seu solo
        </p>
      </header>

      {/* Gráfico Principal */}
      <div className="mb-12">
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '2rem', border: '1px solid #bbf7d0' }}>
          <SoilQualityChart result={result} />
        </div>
      </div>

      {/* Cards de Resultado */}
      <ResultCard result={result} />

      {/* Ações Adicionais */}
      <div className="mt-12 text-center">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <button
            onClick={handleShare}
            className="btn"
            style={{ border: '2px solid #3b82f6', color: '#1d4ed8', backgroundColor: 'white', padding: '1rem 2rem' }}
          >
            📤 Compartilhar Resultado
          </button>
          <button
            onClick={() => window.print()}
            className="btn"
            style={{ border: '2px solid #6b7280', color: '#374151', backgroundColor: 'white', padding: '1rem 2rem' }}
          >
            🖨️ Imprimir Resultado
          </button>
        </div>
        
        <div style={{ backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '0.5rem', padding: '1rem', maxWidth: '32rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#a16207' }}>
            <span style={{ fontSize: '1.25rem' }}>⚠️</span>
            <span style={{ fontWeight: '600' }}>Importante:</span>
          </div>
          <p style={{ color: '#a16207', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
            Esta avaliação é baseada em observações visuais e serve como orientação inicial. 
            Para análises mais precisas, considere fazer uma análise química completa do solo 
            em laboratório especializado.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 pt-8 border-t">
        <p>
          Resultado gerado pelo QualiSolo em {new Date().toLocaleDateString('pt-BR')}
        </p>
        <p className="mt-1">
          Refaça a avaliação em 3-6 meses para monitorar o progresso
        </p>
      </footer>
    </div>
  )
}