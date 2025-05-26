"use client";
import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
          <div className={`${classes.headerMobile_menu} md:hidden`}>
            <span
              className="cursor-pointer block md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="absolute h-full w-full top-0 right-0"
              />
            </span>
          </div>

          {/* لوگو */}
          <div className={classes.headerMobile_logo}>
            <a href="" className="h-full w-full cursor-pointer">
              <Image
                src="/img/primary-icon.svg"
                alt="header Mobile logo"
                fill
                className="absolute h-full w-full"
              />
            </a>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#" className="text-gray-800">
            قیمت لحظه‌ای
          </a>
          <a href="#" className="text-gray-800">
            معامله فوری
          </a>
          <a href="#" className="text-gray-800">
            اعتبار معاملاتی
          </a>
          <a href="#" className="text-gray-800">
            اعتبار خرید کالا
          </a>
          <a href="#" className="text-gray-800">
            بلاگ
          </a>
          <a href="#" className="text-gray-800">
            سوالات متداول
          </a>
          <a href="#" className="text-gray-800">
            قوانین
          </a>
          <a href="#" className="text-gray-800">
            تماس با ما
          </a>
        </nav>

        <div className={`${classes.headerMobile_left} hidden md:flex`}>
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
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              قیمت لحظه ای
            </a>
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              {" "}
              معامله فوری{" "}
            </a>
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              {" "}
              اعتبار معاملاتی{" "}
            </a>
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              {" "}
              اعتبار خرید کالا{" "}
            </a>
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              {" "}
              بلاگ{" "}
            </a>
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              {" "}
              سوالات متداول{" "}
            </a>
            <a href="#" className="text-gray-800 border-b border-slate-100 pb-4">
              {" "}
              قوانین و مقررات{" "}
            </a>
            <a href="#" className="text-gray-800">
              تماس با ما
            </a>
          </nav>

          {/* دکمه‌های ورود و ثبت نام */}
          <div className="mt-auto flex flex-col gap-3">
            <a href="">
              <Button className="w-full bg-white text-blue-500 border-blue-700 leading-loose" onClick={onLoginHandler}>ورود</Button>
            </a>
            <a href="">
              <Button className="w-full bg-blue-700 text-white leading-loose"  onClick={onRegisterHandler}>
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
