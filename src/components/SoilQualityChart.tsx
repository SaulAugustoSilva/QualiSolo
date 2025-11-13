'use client'

import { useEffect, useState } from 'react'
import { EvaluationResult } from '@/types'

interface SoilQualityChartProps {
  result: EvaluationResult
  animate?: boolean
}

export default function SoilQualityChart({ result, animate = true }: SoilQualityChartProps) {
  const [animatedScore, setAnimatedScore] = useState(0)

  // Animação da pontuação
  useEffect(() => {
    if (animate) {
      let start = 0
      const end = result.totalScore
      const increment = end / 60 // 60 frames para animação suave
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setAnimatedScore(end)
          clearInterval(timer)
        } else {
          setAnimatedScore(Math.round(start))
        }
      }, 16) // ~60fps

      return () => clearInterval(timer)
    } else {
      setAnimatedScore(result.totalScore)
    }
  }, [result.totalScore, animate])

  // Função para determinar o ícone baseado na pontuação
  const getScoreIcon = (score: number) => {
    if (score >= 80) return '🌟'
    if (score >= 70) return '🌱'
    if (score >= 50) return '⚠️'
    if (score >= 30) return '🚨'
    return '💀'
  }

   const circumference = 2 * Math.PI * 120 // raio de 120px
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference

  return (
    <div style={{ position: 'relative' }}>
      {/* Container do Gráfico Circular */}
      <div style={{ position: 'relative', width: '20rem', height: '20rem', margin: '0 auto' }}>
        {/* SVG Circular Progress */}
        <svg width="320" height="320" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
          {/* Círculo de fundo */}
          <circle
            cx="160"
            cy="160"
            r="120"
            stroke="#f1f5f9"
            strokeWidth="20"
            fill="none"
          />
          {/* Círculo de progresso */}
          <circle
            cx="160"
            cy="160"
            r="120"
            stroke={result.category.color}
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1s ease-out'
            }}
          />
        </svg>

        {/* Centro do Gráfico com Pontuação */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.75rem', marginBottom: '0.5rem' }}>
              {getScoreIcon(animatedScore)}
            </div>
            <div 
              style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                marginBottom: '0.25rem',
                color: result.category.color,
                transition: 'color 0.5s'
              }}
            >
              {animatedScore}
            </div>
            <div style={{ fontSize: '1.125rem', fontWeight: '500', color: '#4b5563' }}>
              de 100
            </div>
          </div>
        </div>
      </div>

      {/* Escala Visual */}
      <div style={{ marginTop: '2rem', maxWidth: '28rem', margin: '2rem auto 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>10</span>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>50</span>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>100</span>
        </div>
        
        {/* Barra de Escala Colorida */}
        <div style={{ 
          position: 'relative', 
          height: '1.5rem', 
          borderRadius: '9999px', 
          overflow: 'hidden',
          background: 'linear-gradient(to right, #ef4444, #eab308, #22c55e)',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Indicador da Pontuação */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '0.25rem',
              backgroundColor: 'white',
              border: '2px solid #1f2937',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'left 1s ease-out',
              left: `${Math.max(2, Math.min(98, animatedScore))}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '-2rem', 
              left: '50%', 
              transform: 'translateX(-50%)' 
            }}>
              <div style={{ 
                backgroundColor: '#1f2937', 
                color: 'white', 
                fontSize: '0.75rem', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '0.25rem',
                whiteSpace: 'nowrap'
              }}>
                {animatedScore} pts
              </div>
              <div style={{ 
                width: 0, 
                height: 0, 
                borderLeft: '0.25rem solid transparent', 
                borderRight: '0.25rem solid transparent', 
                borderTop: '0.25rem solid #1f2937',
                margin: '0 auto'
              }}></div>
            </div>
          </div>
        </div>

        {/* Labels das Zonas */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.75rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#ef4444', borderRadius: '50%', margin: '0 auto 0.25rem' }}></div>
            <span style={{ color: '#dc2626', fontWeight: '500' }}>Baixa</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#eab308', borderRadius: '50%', margin: '0 auto 0.25rem' }}></div>
            <span style={{ color: '#d97706', fontWeight: '500' }}>Média</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#22c55e', borderRadius: '50%', margin: '0 auto 0.25rem' }}></div>
            <span style={{ color: '#16a34a', fontWeight: '500' }}>Alta</span>
          </div>
        </div>
      </div>

      {/* Categoria e Descrição */}
      <div 
        style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          borderRadius: '0.75rem', 
          border: '2px solid',
          borderColor: result.category.color + '40',
          backgroundColor: result.category.bgColor,
          maxWidth: '28rem',
          margin: '2rem auto 0',
          textAlign: 'center',
          transition: 'all 0.5s'
        }}
      >
        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {result.category.icon}
        </div>
        <h3 
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.5rem',
            color: result.category.color 
          }}
        >
          {result.category.name}
        </h3>
        <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: '1.5' }}>
          {result.category.description}
        </p>
      </div>
    </div>
  )
}