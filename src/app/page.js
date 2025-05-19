'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const noWa = '62881023435966'; // Ganti dengan nomor WhatsApp tujuan
    const text = `Data Diri:%0ANama: ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
    const url = `https://wa.me/${noWa}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <main style={{ padding: 20 }} className='text-black bg-white'>
      <h1>Form Data Pilihan</h1>
      <form onSubmit={handleSubmit} className='bg-blue-500 p-6'>
        <label>Nama:</label><br />
        <input className='border p-1' type="text" value={nama} onChange={e => setNama(e.target.value)} required /><br /><br />
        <label>Email:</label><br />
        <input className='border p-1' type ="email" value={email} onChange={e => setEmail(e.target.value)} required /><br /><br />
        <label>Pesan:</label><br />
        <textarea className='border p-1' value={pesan} onChange={e => setPesan(e.target.value)} required /><br /><br />
        <button type="submit" className='bg-green-600 p-4'>Kirim via WhatsApp</button>
      </form>
    </main>
  );
}