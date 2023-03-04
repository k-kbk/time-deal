export default function TimeBanner() {
  return (
    <div className="mt-[4rem] flex h-[8rem] w-full flex-col items-center justify-center bg-neutral-300 sm:h-[10rem]">
      <p className="mb-2 text-lg font-bold sm:text-xl">남은 시간</p>
      <div className="flex items-center text-4xl font-semibold sm:text-5xl">
        <div className="text-center">
          <p>05</p>
          <p className="text-sm text-neutral-500 sm:text-base">시간</p>
        </div>
        <div className="mx-4 mb-5 text-center sm:mb-6">
          <p className="text-neutral-500">:</p>
        </div>
        <div className="text-center">
          <p>15</p>
          <p className="text-sm text-neutral-500 sm:text-base">분</p>
        </div>
        <div className="mx-4 mb-5 text-center sm:mb-6">
          <p className="text-neutral-500">:</p>
        </div>
        <div className="text-center">
          <p>53</p>
          <p className="text-sm text-neutral-500 sm:text-base">초</p>
        </div>
      </div>
    </div>
  );
}
