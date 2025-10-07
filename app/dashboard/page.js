'use client';
export default function Dashboard() {
  async function logout() {
    await fetch('/api/logout', { method: 'POST' });
    location.href = '/login';
  }
  return (
    <main style={{padding:24}}>
      <h1>Dashboard</h1>
      <p>Erfolgreich eingeloggt. (Geschützter Bereich)</p>
      <a href="/admin/employees">Zum Admin: Mitarbeiter</a>
      <div style={{marginTop:16}}>
        <button onClick={logout} style={{padding:'10px 14px',border:0,borderRadius:10,background:'#222',color:'#fff'}}>Logout</button>
      </div>
    </main>
  );
}
