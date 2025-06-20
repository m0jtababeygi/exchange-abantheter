"use client";
import React, { useState } from "react";
import {
  faBars,
  faSun,
  faXmark,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Header.module.css";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onLoginHandler = () => {
    console.log("login");
  };

  const onRegisterHandler = () => {
    console.log("register");
  };

  return (
    <header className={classes.header}>
      <div></div>
      <div className={classes.headerMobile_container}>
        <div className={classes.headerMobile_right}>
          {/* منو آیکون */}
          <div className={`${classes.headerMobile_menu} lg:hidden`}>
            <span
              className="cursor-pointer block lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="absolute h-full w-full top-0 right-0"
              />
            </span>
          </div>

          {/* لوگو */}
          <div className={`${classes.headerMobile_logo} lg:hidden`}>
            <a href="" className="h-full w-full cursor-pointer">
              <Image
                src="/img/primary-icon.svg"
                alt="header Mobile logo"
                fill
                className="absolute h-full w-full"
              />
            </a>
          </div>
          <div
            className={`${classes.headerDesktop_logo} relative h-20 w-56 hidden lg:block`}
          >
            <a href="" className="h-full w-full cursor-pointer">
              <Image
                src="/img/main-persian.svg"
                alt="header desktop logo"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-[2.5rem] text-sm">
          <a href="#" className="text-gray-800 text-base hover:text-blue-700">
            قیمت لحظه‌ای
          </a>
          <a href="#" className="text-gray-800 text-base hover:text-blue-700">
            معامله فوری
          </a>
          <a href="#" className="text-gray-800 text-base hover:text-blue-700">
            اعتبار معاملاتی
          </a>
          <a href="#" className="text-gray-800 text-base hover:text-blue-700">
            اعتبار خرید کالا
          </a>
          <a href="#" className="text-gray-800 text-base hover:text-blue-700">
            بلاگ
          </a>
          <a href="#" className="text-gray-800 text-base hover:text-blue-700">
            سوالات متداول
          </a>
          <a
            href="#"
            className="text-gray-800 text-base hover:text-blue-700 hidden 2xl:inline"
          >
            قوانین
          </a>
          <a
            href="#"
            className="text-gray-800 text-base hover:text-blue-700 hidden 2xl:inline"
          >
            تماس با ما
          </a>
        </nav>

        <div className={`${classes.headerMobile_left} hidden lg:flex`}>
          <a href="">
            <Button
              className="bg-white !text-blue-500 h-full transition hover:bg-blue-700 hover:!text-white"
              onClick={onLoginHandler}
            >
              ورود
            </Button>
          </a>
          <a href="">
            <Button className="h-full" onClick={onRegisterHandler}>
              ثبت نام
            </Button>
          </a>
          <div className="hidden lg:flex items-center justify-center w-20 hover:bg-slate-100">
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faSun} className="text-2xl" />
              {/* <FontAwesomeIcon icon={faMoon} className="text-2xl" /> */}
            </span>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      {menuOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-[1000] bg-white p-6 flex flex-col">
          {/* آیکون بستن */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">منو</span>
            <span
              className="cursor-pointer text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>

          {/* خط جداکننده */}
          <hr className="mb-4 border-gray-300" />

          {/* آیتم‌های منو */}
          <nav className="flex flex-col gap-8 mb-6">
            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4"
            >
              قیمت لحظه ای
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4"
            >
              {" "}
              معامله فوری{" "}
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4"
            >
              {" "}
              اعتبار معاملاتی{" "}
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4"
            >
              {" "}
              اعتبار خرید کالا{" "}
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4"
            >
              {" "}
              بلاگ{" "}
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4"
            >
              {" "}
              سوالات متداول{" "}
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4 text-base"
            >
              {" "}
              قوانین و مقررات{" "}
            </a>

            <a
              href="#"
              className="text-gray-800 border-b border-slate-100 pb-4 text-base"
            >
              تماس با ما
            </a>
          </nav>

          {/* دکمه‌های ورود و ثبت نام */}
          <div className="mt-auto flex flex-col gap-3">
            {/* <div className=" leading-loose hover:bg-slate-100 flex justify-end"> */}
            <span className="cursor-pointer leading-loose hover:bg-slate-100 flex justify-end">
              <FontAwesomeIcon icon={faSun} className="text-2xl" />
              {/* <FontAwesomeIcon icon={faMoon} className="text-2xl" /> */}
            </span>
            {/* </div> */}
            <Button
              className="w-full h-full bg-white text-black border-none cursor-pointer leading-loose"
              onClick={onLoginHandler}
            >
              <span className="cursor-pointer leading-loose hover:bg-slate-100 flex justify-end">
                <FontAwesomeIcon icon={faSun} className="text-2xl" />
                {/* <FontAwesomeIcon icon={faMoon} className="text-2xl" /> */}
              </span>
            </Button>
            <a href="">
              <Button
                className="w-full bg-white !text-blue-500 h-full transition hover:bg-blue-700 hover:!text-white leading-loose"
                onClick={onLoginHandler}
              >
                ورود
              </Button>
            </a>
            <a href="">
              <Button
                className="w-full bg-blue-700 text-white leading-loose"
                onClick={onRegisterHandler}
              >
                ثبت نام
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
