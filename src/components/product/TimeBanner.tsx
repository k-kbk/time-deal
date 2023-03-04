export default function TimeBanner() {
  return (
    <div className="mt-[4rem] flex h-[10rem] w-full flex-col items-center justify-center bg-neutral-300">
      <p className="mb-2 text-xl font-bold">남은 시간</p>
      <div className="flex items-center text-5xl font-semibold">
        <div className="text-center">
          <p>05</p>
          <p className="text-base text-neutral-500">시간</p>
        </div>
        <div className="mx-4 mb-6 text-center">
          <p className="text-neutral-500">:</p>
        </div>
        <div className="text-center">
          <p>15</p>
          <p className="text-base text-neutral-500">분</p>
        </div>
        <div className="mx-4 mb-6 text-center">
          <p className="text-neutral-500">:</p>
        </div>
        <div className="text-center">
          <p>53</p>
          <p className="text-base text-neutral-500">초</p>
        </div>
      </div>
    </div>
  );
}
