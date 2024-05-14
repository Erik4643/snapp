'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ICONS } from 'assets/icons';
import { IMAGES } from 'assets/images';
import Image from 'next/image';
import { SubscribeSchema } from 'validations/SubscribeSchema';

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SubscribeSchema())
  });

  const onSubmit = (data) => {
    // TODO add dispatch endpoint
    console.log('data', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container pt-50 pb-50 desktop:pt-90 desktop:pb-122 flex flex-col gap-100 desktop:gap-170"
    >
      <div className="max-w-860 m-auto text-center flex flex-col gap-90">
        <div className="header-4 desktop:header-2">
          Welcome to the Future of Finance
        </div>

        <Image className="" src={IMAGES.Logo} alt="logo" />

        <div className="flex flex-col gap-24 desktop:gap-30">
          <div className="header-3 desktop:header-1">Coming Soon!</div>
          <div className="text-6 desktop:text-4">
            Are you ready to redefine the way you manage your wealth? Meet
            Snapp, the ultimate AI-driven digital wallet that’s not just smart,
            but also understands your financial aspirations.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-30 desktop:gap-50">
        <div className="text-3 desktop:text-2">Why Snapp?</div>

        <div className="flex gap-16 desktop:gap-20">
          <div className="flex flex-col gap-30">
            <div className="flex gap-14">
              <ICONS.SmartBudgetingIcon />

              <div className="flex flex-col gap-14">
                <div className="text-6 desktop:text-4">Smart Budgeting</div>
                <div className="text-6 desktop:text-4">
                  Automatically analyzes your spending habits and suggests ways
                  to save more without cutting back on what you love.
                </div>
              </div>
            </div>

            <div className="flex gap-14">
              <ICONS.DashboardIcon />

              <div className="flex flex-col gap-14">
                <div className="text-6 desktop:text-4">
                  All-in-One Dashboard
                </div>
                <div className="text-6 desktop:text-4">
                  Your financial world in one glance. Track your accounts,
                  transactions, and more from a single, intuitive interface.
                </div>
              </div>
            </div>

            <div className="flex gap-14">
              <ICONS.SecureIcon />

              <div className="flex flex-col gap-14">
                <div className="text-6 desktop:text-4">Secure and Trusted</div>
                <div className="text-6 desktop:text-4">
                  State-of-the-art security features to keep your financial data
                  protected around the clock.
                </div>
              </div>
            </div>
          </div>
          <Image
            className="max-tablet:hidden w-340 h-288 desktop:w-420 desktop:h-356"
            src={IMAGES.SecondImageLight}
            alt="second-image-light"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-860 m-auto gap-28 desktop:gap-32 text-center desktop:mt-30">
        <div className="text-3 desktop:header-2 ">
          Get Ready to Elevate Your Financial Intelligence
        </div>

        <div className="text-6 desktop:text-5">
          Join the Waitlist Today! Be the first to experience the power of AI in
          managing your finances. Exclusive early access, updates, and more
          await!
        </div>

        <div className="m-auto">
          <div className="flex relative">
            <input
              className="input-gradient rounded-l-8"
              type="text"
              placeholder="Enter Your E-mail Address"
              {...register('email')}
            />

            <div className="absolute top-1/2 left-20 -translate-y-1/2">
              <ICONS.MessageIcon />
            </div>

            <button className="subscribe-gradient py-10 px-26 text-white rounded-r-8 cursor-pointer">
              Subscribe
            </button>
          </div>

          {errors?.email?.message ? (
            <div className="text-left mt-2 text-red text-8">
              {errors?.email?.message}
            </div>
          ) : null}
        </div>

        <div className="text-6 desktop:text-5">
          Stay tuned. The future of personal finance management is just around
          the corner. With Snapp, your financial goals are not just
          dreams—they're upcoming realities!
        </div>

        <div className="text-3 desktop:header-1 text-blue mt-10 desktop:mt-84 text-nowrap">
          Snapp - Empower Your Wealth
        </div>
      </div>
    </form>
  );
};
