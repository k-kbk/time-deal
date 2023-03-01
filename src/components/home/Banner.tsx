import Fire from '../../assets/fire.png';

export default function Banner() {
  return (
    <div className="flex items-center justify-center bg-header py-8 text-white">
      <img src={Fire} alt="fire" className="mx-3 w-9" />
      <div className="mx-3 flex flex-col items-center">
        <p className="text-base font-medium">놓치면 후회할</p>
        <p className="text-3xl font-semibold">TIME DEAL</p>
      </div>
      <img src={Fire} alt="fire" className="mx-3 w-9" />
    </div>
  );
}
