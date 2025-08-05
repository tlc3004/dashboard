import LegalBadgeHibrido from './components/LegalBadgeHibrido';

export default function App() {
  return (
    <div className="bg-white-600 flex items items-center mt-[400px] p-10">
      <h1 className="text-2xl ">📑</h1>

      <p className='ml-20'>
        <LegalBadgeHibrido clave="terminos" className="absolute flex flex-items items-center ml-2" />
      </p>

      <p className='ml-20'>
        <LegalBadgeHibrido 
        clave="politica"
        className="absolute flex flex-items items-center ml-2" />
      </p>
      <p className='ml-20'>
        <LegalBadgeHibrido clave="manifiesto"
        className="absolute flex flex-items items-center ml-2" />
      </p>
      <p className='ml-20'>
        <LegalBadgeHibrido clave="contacto"
        
        className="absolute flex flex-items items-center ml-2" />
      </p>
      
    </div>
  );
}
