import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center grid gap-3 py-20">
      <h1 className="text-3xl font-bold">404 - Không tìm thấy trang</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Liên kết bạn truy cập không tồn tại.
      </p>
      <Link className="text-brand hover:underline" to={"/"}>
        Về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
