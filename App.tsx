import React, { useState } from 'react';
import { Leaf, Droplets, Thermometer, Microscope } from 'lucide-react';
import SoilAnalysisForm from './components/SoilAnalysisForm';
import AnalysisResults from './components/AnalysisResults';

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalysis = (formData) => {
    // Simulate API call to a backend service
    setTimeout(() => {
      const mockResults = {
        soilQuality: 'Good',
        fertility: 'Medium',
        cropSuitability: ['Wheat', 'Corn', 'Soybeans'],
        recommendations: [
          'Consider adding organic matter to improve soil structure',
          'Maintain current irrigation practices',
          'Monitor nitrogen levels closely during the growing season'
        ]
      };
      setAnalysisResults(mockResults);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Soil Analysis AI</h1>
          <p className="text-xl text-gray-600">Unlock the potential of your soil with machine learning</p>
        </header>
        <main className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center space-x-8 mb-8">
              <Leaf className="text-green-500" size={32} />
              <Droplets className="text-blue-500" size={32} />
              <Thermometer className="text-red-500" size={32} />
              <Microscope className="text-purple-500" size={32} />
            </div>
            {!analysisResults ? (
              <SoilAnalysisForm onSubmit={handleAnalysis} />
            ) : (
              <AnalysisResults results={analysisResults} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;