'use client';
export default function UserProfile({ params }: any) {
  return (
    <div className='min-h-screen flex items-center justify-center py-2 '>
      <h1>Profile </h1>
      <hr />
      <p className='text-4xl '>Profile Page </p>
      <span className='p-2 rounded bg-amber-600 text-black'>{params.id}</span>
    </div>
  );
}
