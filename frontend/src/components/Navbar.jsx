export default function Navbar() {
  return (
    <nav style={{borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '16px 24px'}}>
      <div style={{maxWidth: '640px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '10px'}}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: 'linear-gradient(135deg, #ef4444, #991b1b)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'
        }}>🛡️</div>
        <span style={{fontWeight: '700', fontSize: '16px', color: 'white'}}>JobGuard AI</span>
        <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px'}}>
          <div style={{width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e'}}></div>
          <span style={{color: '#6b7280', fontSize: '12px'}}>Live</span>
        </div>
      </div>
    </nav>
  )
}