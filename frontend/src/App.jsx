
import { useState } from "react"
import axios from "axios"
import Navbar from "./components/Navbar"
import InputBox from "./components/InputBox"
import ResultCard from "./components/ResultCard"

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleAnalyze = async () => {
    setLoading(true)
    setError("")
    setResult(null)
    try {
      const res = await axios.post("http://127.0.0.1:8000/analyze", { text })
      setResult({ ...res.data, source_text: text })
    } catch {
      setError("Something went wrong. Make sure the backend is running.")
    }
    setLoading(false)
  }

  return (
    <div style={{minHeight: '100vh', background: '#0f0f13'}}>
      <Navbar />
      <div style={{maxWidth: '640px', margin: '0 auto', padding: '48px 20px'}}>

        {/* Badge */}
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '99px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '13px', color: '#9ca3af'
          }}>
           
          </div>
        </div>

        {/* Hero */}
        <h1 style={{
          textAlign: 'center', fontWeight: '900',
          fontSize: '42px', lineHeight: '1.15', marginBottom: '16px'
        }}>
          Fake Job<br />
          Offer{" "}
          <span style={{
            background: 'linear-gradient(90deg, #2dd4bf, #ef4444)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Detector
          </span>
        </h1>

        <p style={{
          textAlign: 'center', color: '#6b7280', fontSize: '15px',
          lineHeight: '1.6', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px'
        }}>
          Paste any job offer or recruiter email. We'll flag the red signals and tell you if it's legit.
        </p>

        <InputBox text={text} setText={setText} onAnalyze={handleAnalyze} loading={loading} />

        {error && (
          <p style={{color: '#ef4444', textAlign: 'center', marginTop: '16px', fontSize: '14px'}}>
            {error}
          </p>
        )}

        <ResultCard result={result} />

        <p style={{
          textAlign: 'center', color: '#374151', fontSize: '12px', marginTop: '32px'
        }}>
          AI analysis can make mistakes. Always verify offers independently.
        </p>
      </div>
    </div>
  )
}

export default App