'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
            🌱 QualiSolo
          </h1>
          <p className="text-xl md:text-2xl text-green-700 font-medium">
            Avalie a Qualidade do Seu Solo
          </p>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Descubra a saúde do seu solo através de observações simples e visuais. 
          Receba uma avaliação colorida de 10 a 100 pontos com recomendações práticas.
        </p>
      </header>

       {/* Main Content */}
      <div className="grid grid-cols-2 mb-12">
        {/* Como Funciona */}
        <div className="card">
          <h3 className="text-green-800 text-2xl mb-4">
            🔍 Como Funciona
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <p className="text-gray-700">
                <strong>Responda 10 perguntas</strong> sobre características visíveis do solo
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <p className="text-gray-700">
                <strong>Compare com imagens</strong> ilustrativas para orientar suas respostas
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <p className="text-gray-700">
                <strong>Receba o resultado</strong> em um gráfico colorido com recomendações
              </p>
            </div>
          </div>
        </div>

        {/* Categorias */}
        <div className="card">
          <h3 className="text-green-800 text-2xl mb-4">
            📊 Categorias de Qualidade
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <div>
                <p className="font-semibold text-gray-800">Baixa (10-40)</p>
                <p className="text-sm text-gray-600">Solo precisa de atenção urgente</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              <div>
                <p className="font-semibold text-gray-800">Média (50-70)</p>
                <p className="text-sm text-gray-600">Solo com potencial para melhorar</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div>
                <p className="font-semibold text-gray-800">Alta (80-100)</p>
                <p className="text-sm text-gray-600">Solo saudável e produtivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Características Avaliadas */}
      <div className="card mb-12">
        <h3 className="text-green-800 text-2xl text-center mb-4">
          🧪 O Que Será Avaliado
        </h3>
        <p className="text-center text-lg text-gray-600 mb-8">
          Características observacionais que você pode verificar a olho nu
        </p>
        <div className="grid grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🪱</span>
              <span className="text-gray-700">Presença de minhocas e organismos vivos</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌿</span>
              <span className="text-gray-700">Cobertura vegetal e proteção</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌾</span>
              <span className="text-gray-700">Histórico de produtividade</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌧️</span>
              <span className="text-gray-700">Capacidade de absorção de água</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🍂</span>
              <span className="text-gray-700">Presença de matéria orgânica</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👃</span>
              <span className="text-gray-700">Cheiro de terra úmida</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎨</span>
              <span className="text-gray-700">Cor do solo (escuro, vermelho, amarelo)</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <span className="text-gray-700">Compactação da superfície</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌊</span>
              <span className="text-gray-700">Sinais de erosão</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">☀️</span>
              <span className="text-gray-700">Histórico de estresse hídrico</span>
            </div>
          </div>
        </div>
      </div>

       {/* Call to Action */}
      <div className="text-center">
        <Link href="/avaliacao" className="btn btn-primary">
          🚀 Iniciar Avaliação
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          Tempo estimado: 5-10 minutos
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-green-200">
        <p>
          QualiSolo - Ferramenta educativa para avaliação visual da qualidade do solo
        </p>
      </footer>
    </div>
  )
}