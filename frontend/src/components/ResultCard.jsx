import { useEffect, useState } from "react"

const FLAG_TITLES = {
  "bank details": "Banking Info Request",
  "bank account": "Banking Info Request",
  "registration fee": "Upfront Fee Demand",
  "processing fee": "Upfront Fee Demand",
  "activation fee": "Upfront Fee Demand",
  "security deposit": "Upfront Fee Demand",
  "training fee": "Upfront Fee Demand",
  "guaranteed": "Unrealistic Guarantee",
  "100% guaranteed": "Unrealistic Guarantee",
  "no experience": "Too Good To Be True",
  "no interview": "Too Good To Be True",
  "no qualification": "Too Good To Be True",
  "earn while you sleep": "Unrealistic Income Claim",
  "easy money": "Unrealistic Income Claim",
  "unlimited income": "Unrealistic Income Claim",
  "earn daily": "Unrealistic Income Claim",
  "earn 1 lakh": "Unrealistic Income Claim",
  "2 hours a day": "Unrealistic Work Claim",
  "limited slots": "Urgency Tactic",
  "limited seats": "Urgency Tactic",
  "expires in 24 hours": "Urgency Tactic",
  "act now": "Urgency Tactic",
  "urgent": "Urgency Tactic",
  "aadhar": "Personal Documents Request",
  "aadhaar": "Personal Documents Request",
  "pan card": "Personal Documents Request",
  "passport copy": "Personal Documents Request",
  "send your photo": "Personal Info Request",
  "send otp": "OTP / Verification Scam",
  "whatsapp us": "Unofficial Contact Channel",
  "whatsapp to confirm": "Unofficial Contact Channel",
  "lottery": "Lottery / Prize Scam",
  "you have been selected": "Unsolicited Selection Claim",
  "congratulations you are selected": "Unsolicited Selection Claim",
  "copy paste work": "Fake Task Job",
  "typing job": "Fake Task Job",
  "watching videos": "Fake Task Job",
  "completing surveys": "Fake Task Job",
}

const FLAG_DESCRIPTIONS = {
  "bank details": "Legitimate employers never ask for banking information before a formal offer.",
  "bank account": "No real company needs your account number before you've even joined.",
  "registration fee": "Real companies never charge candidates to register or apply.",
  "processing fee": "Any fee to process your application is a scam signal.",
  "activation fee": "Activation fees are a common tactic used by fraudulent employers.",
  "security deposit": "Legitimate jobs never require a security deposit from candidates.",
  "training fee": "Real employers pay for training — they never charge you for it.",
  "guaranteed": "No job or income can be genuinely guaranteed — classic scam language.",
  "no experience": "Real professional roles require vetting. Skipping this is a major red flag.",
  "no interview": "Every legitimate employer conducts at least one interview.",
  "no qualification": "Jobs with no requirements and high pay are almost always fraudulent.",
  "earn while you sleep": "Passive income promises with no skills required are hallmarks of fraud.",
  "easy money": "Legitimate jobs require effort — 'easy money' is always suspicious.",
  "unlimited income": "No legitimate job offers unlimited income with no conditions.",
  "earn daily": "Daily salary payments are non-standard and often used to lure victims.",
  "earn 1 lakh": "Promising ₹1 lakh+ for simple work is an unrealistic and fraudulent claim.",
  "2 hours a day": "High income for minimal hours is a classic fraudulent promise.",
  "limited slots": "Creating artificial urgency pressures victims into acting without thinking.",
  "limited seats": "Fake scarcity is a psychological manipulation tactic used by scammers.",
  "expires in 24 hours": "Urgency tactics stop you from researching the company properly.",
  "urgent": "Urgency language is designed to prevent you from thinking critically.",
  "aadhar": "Asking for Aadhaar before a formal contract is highly suspicious.",
  "aadhaar": "Aadhaar should never be shared before official onboarding documentation.",
  "pan card": "PAN card details should only be shared during official tax onboarding.",
  "passport copy": "Passport copies requested early are a sign of potential identity theft.",
  "send your photo": "Photo requests before hiring are unprofessional and often used for fraud.",
  "send otp": "Never share OTPs — legitimate companies have no reason to ask for them.",
  "whatsapp us": "Real companies use official email channels, not personal WhatsApp numbers.",
  "whatsapp to confirm": "Job confirmations via WhatsApp are a strong indicator of fraud.",
  "lottery": "You cannot win a lottery you never entered — this is a classic scam.",
  "you have been selected": "Unsolicited selections without any application are always suspicious.",
  "congratulations you are selected": "Being 'selected' without applying is a textbook scam opener.",
  "copy paste work": "Copy-paste jobs are fake — no real company pays for this.",
  "typing job": "Online typing jobs promising high pay are almost always fraudulent.",
  "watching videos": "Getting paid to watch videos or complete surveys is a well-known scam format.",
  "completing surveys": "Survey-based income schemes are rarely legitimate and often harvest your data.",
}

export default function ResultCard({ result }) {
  const [visible, setVisible] = useState(false)
  const [showSource, setShowSource] = useState(false)

  useEffect(() => {
    if (!result) return
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [result])

  if (!result) return null
  const isScam = result.result === "SCAM"

  // Build enriched flags
  const enrichedFlags = result.reasons
    .filter(r => r !== "No specific red flags found")
    .map(reason => {
      const keyword = Object.keys(FLAG_TITLES).find(k => reason.toLowerCase().includes(k))
      return {
        title: keyword ? FLAG_TITLES[keyword] : "Suspicious Pattern",
        description: keyword ? FLAG_DESCRIPTIONS[keyword] : reason,
        quote: reason.replace("Contains suspicious phrase: ", "").replace(/"/g, ""),
      }
    })

  return (
    <div
      className={`animate-fadeSlideUp ${isScam ? 'result-card-scam' : ''}`}
      style={{
        marginTop: '24px',
        opacity: visible ? 1 : 0,
        background: isScam
          ? 'linear-gradient(135deg, #2a1018, #1a0a10)'
          : 'linear-gradient(135deg, #0f1f14, #0a150e)',
        border: `1px solid ${isScam ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.3)'}`,
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      {/* Top result header */}
      <div style={{padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px'}}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
          background: isScam ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)',
          border: `2px solid ${isScam ? '#ef4444' : '#22c55e'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px'
        }}>
          {isScam ? '🛡️' : '✅'}
        </div>
        <div>
          <h2 style={{
            fontSize: '22px', fontWeight: '900', letterSpacing: '2px',
            color: isScam ? '#ef4444' : '#22c55e', marginBottom: '4px'
          }}>
            {result.result} {isScam ? '🚨' : ''}
          </h2>
          <p style={{color: '#9ca3af', fontSize: '13px'}}>
            {isScam
              ? 'This appears to be a recruitment scam with multiple red flags.'
              : 'This job offer appears to be legitimate.'}
          </p>
        </div>
      </div>

      {/* Confidence bar */}
      <div style={{padding: '0 24px 20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
          <span style={{color: '#9ca3af', fontSize: '13px'}}>Confidence</span>
          <span style={{color: isScam ? '#ef4444' : '#22c55e', fontWeight: '700', fontSize: '13px'}}>
            {result.confidence}%
          </span>
        </div>
        <div style={{height: '6px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)'}}>
          <div style={{
            height: '6px', borderRadius: '99px',
            width: visible ? `${result.confidence}%` : '0%',
            background: isScam
              ? 'linear-gradient(90deg, #991b1b, #ef4444)'
              : 'linear-gradient(90deg, #15803d, #22c55e)',
            transition: 'width 1.2s ease'
          }}/>
        </div>
      </div>

      {/* Red flags */}
      {enrichedFlags.length > 0 && (
        <div style={{padding: '0 24px 20px'}}>
          <p style={{
            fontSize: '13px', fontWeight: '700', color: '#f87171',
            marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            ⚠️ Red flags detected ({enrichedFlags.length})
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {enrichedFlags.map((flag, i) => (
              <div key={i} className="flag-card">
                <p style={{color: '#ef4444', fontWeight: '700', fontSize: '14px', marginBottom: '6px'}}>
                  {flag.title}
                </p>
                <p style={{color: '#d1d5db', fontSize: '13px', lineHeight: '1.6'}}>
                  {flag.description}
                </p>
                <div className="quote-block">
                  "{flag.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show source text toggle */}
      <div style={{padding: '0 24px 20px'}}>
        <button
          onClick={() => setShowSource(!showSource)}
          style={{
            width: '100%', padding: '12px 16px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
            color: '#d1d5db', fontSize: '14px', cursor: 'pointer', textAlign: 'left'
          }}
        >
          {showSource ? '▼' : '▶'} Show highlighted source text
        </button>
        {showSource && (
          <div style={{
            marginTop: '10px', padding: '14px', borderRadius: '10px',
            background: '#0f0f13', border: '1px solid rgba(255,255,255,0.06)',
            fontFamily: 'monospace', fontSize: '13px', color: '#9ca3af', lineHeight: '1.8'
          }}>
            {result.source_text || "Source text not available."}
          </div>
        )}
      </div>

      {/* Footer disclaimer */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 24px',
        textAlign: 'center',
        color: '#4b5563', fontSize: '12px'
      }}>
        AI analysis can make mistakes. Always verify offers independently.
      </div>
    </div>
  )
}