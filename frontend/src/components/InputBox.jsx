export default function InputBox({ text, setText, onAnalyze, loading }) {
  const minChars = 20
  const charCount = text.length
  const canSubmit = charCount >= minChars && !loading

  const loadSample = () => {
    setText("Congratulations! You have been selected for a Work From Home Data Entry job. Earn ₹85,000 - ₹1,50,000 per month working only 2 hours from home! No experience required, no interview needed. To activate your employee ID, a small refundable registration fee of ₹2,499 is required. Pay via: http://hr-onboard-portal.xyz/pay. This is a LIMITED time offer expiring in 24 hours. Send your Aadhaar card, PAN card copy, and bank account details with passbook photo. Reply ASAP to secure your dream job!!!")
  }

  return (
    <div className="card" style={{padding: '24px'}}>
      {/* Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
        <span style={{fontWeight: '600', fontSize: '15px', color: 'white'}}>
          Job offer or email content
        </span>
        <button
          onClick={loadSample}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px', padding: '6px 12px', color: '#9ca3af',
            fontSize: '13px', cursor: 'pointer'
          }}
        >
          📋 Load sample
        </button>
      </div>

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Paste the full job offer,\nrecruiter email, or WhatsApp\nmessage here..."}
        style={{
          width: '100%', minHeight: '200px', resize: 'vertical',
          background: '#0f0f13', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px', padding: '14px', color: '#e5e7eb',
          fontSize: '14px', lineHeight: '1.7', fontFamily: 'monospace',
          outline: 'none'
        }}
      />

      {/* Scan Button */}
      <button
        onClick={onAnalyze}
        disabled={!canSubmit}
        style={{
          width: '100%', marginTop: '14px', padding: '16px',
          borderRadius: '12px', fontWeight: '700', fontSize: '15px',
          cursor: canSubmit ? 'pointer' : 'not-allowed',
          border: 'none', color: 'white',
          background: canSubmit
            ? 'linear-gradient(135deg, #0d9488, #0f766e)'
            : 'rgba(255,255,255,0.08)',
          boxShadow: canSubmit ? '0 0 24px rgba(13,148,136,0.35)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {loading ? (
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
            <svg style={{animation: 'spin 1s linear infinite', width: '16px', height: '16px'}} viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
              <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75"/>
            </svg>
            Scanning...
          </span>
        ) : "Scan Now"}
      </button>

      {/* Char counter */}
      <p style={{marginTop: '8px', fontSize: '12px', color: '#6b7280'}}>
        {charCount} chars · {charCount < minChars ? `min ${minChars} required` : 'ready to scan'}
      </p>
    </div>
  )
}