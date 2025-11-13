'use client'

import { ProgressInfo } from '@/types'

interface ProgressBarProps {
  progress: ProgressInfo
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div style={{ width: '100%', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#15803d' }}>
          Pergunta {progress.current} de {progress.total}
        </span>
        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#15803d' }}>
          {Math.round(progress.percentage)}% concluído
        </span>
      </div>
      <div style={{ width: '100%', backgroundColor: '#dcfce7', borderRadius: '9999px', height: '0.75rem', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)' }}>
        <div
          style={{
            background: 'linear-gradient(to right, #22c55e, #16a34a)',
            height: '0.75rem',
            borderRadius: '9999px',
            transition: 'all 0.5s ease-out',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            width: `${progress.percentage}%`
          }}
        ></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
        {Array.from({ length: progress.total }, (_, i) => (
          <div
            key={i}
            style={{
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '50%',
              transition: 'background-color 0.3s',
              backgroundColor: i < progress.current
                ? '#22c55e'
                : i === progress.current - 1
                ? '#4ade80'
                : '#d1d5db'
            }}
          />
        ))}
      </div>
    </div>
  )
}