import Image from 'next/image';
import React from 'react';

export function NoResult() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div>
        <Image
          width={51}
          height={53}
          src="/svg/search-no-result.svg"
          alt="no-result"
        />
      </div>
      <h5 className="text-labelSmall text-content-tertiary">
        نتیجه‌ای پیدا نشد!
      </h5>
      <p className="text-bodyXSmall text-content-tertiary">
        لطفا از نوشتار صحیح و اتصال به اینترنت مطمئن شوید
      </p>
    </div>
  );
}
