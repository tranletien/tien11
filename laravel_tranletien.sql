-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 11, 2023 lúc 03:15 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `laravel_tranletien`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(8, 'Boss ăn gì', 'boss-an-gi', 'boss-an-gi.jpg', 0, 'Boss ăn gì', 'sản phẩm cho thú cưng', '2023-06-09 00:25:49', '2023-09-28 00:54:12', 1, 1, 1),
(9, 'chăm sóc boss', 'cham-soc-boss', 'cham-soc-boss.jpg', 0, 'chăm sóc boss', 'chăm sóc boss', '2023-06-15 19:23:25', '2023-09-28 03:22:28', 1, 1, 1),
(10, 'Phụ kiện', 'phu-kien', 'shiba.jpg', 0, 'Phụ kiện', 'Phụ kiện', '2023-06-16 00:52:58', '2023-10-04 04:01:23', 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(5, 'Boss ăn gì', 'boss-an-gi', 'boss-an-gi.jpg', 0, 0, 'Boss ăn gì', 'thực phẩm cho boss', '2023-06-14 03:13:05', '2023-09-28 00:51:02', 1, 1, 1),
(6, 'chăm sóc boss', 'cham-soc-boss', 'cham-soc-boss.jpg', 0, 0, 'chăm sóc boss', 'chăm sóc boss', '2023-06-15 01:35:07', '2023-09-28 03:23:54', 1, 1, 1),
(7, 'Phụ kiện', 'phu-kien', 'shiba.jpg', 0, 0, 'Phụ kiện', 'Phụ kiện', '2023-06-16 00:52:31', '2023-10-04 04:02:05', 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `zalo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) NOT NULL,
  `updated_by` int(10) DEFAULT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(4, 1, 'tien', 'tien0366788877@gmail.com', '1122233444', 'Shop thu cung', 'đsdsdsdsdsd', 1, NULL, NULL, 1, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_id` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `position` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) NOT NULL,
  `sort_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `table_id`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `position`, `parent_id`, `sort_order`) VALUES
(1, 'Trang chủ', '/', 0, 'ssss', NULL, NULL, 1, NULL, 1, 'mainmenu', 0, 0),
(2, 'sản phẩm', 'san-pham', 1, 'ssss', NULL, NULL, 1, NULL, 1, 'mainmenu', 3, 0),
(3, 'Tất cả sản phẩm', 'ddd', 0, '0', '2023-06-16 08:30:32', '2023-06-16 08:30:32', 1, NULL, 1, 'mainmenu', 0, 0),
(4, 'danh mục sản phẩm', 'danh-muc-san-pham/corgi', 0, '0', '2022-10-10 03:20:19', '2022-10-10 03:20:19', 1, NULL, 1, 'mainmenu', 0, 0),
(5, 'liên hệ', 'lien-he', 0, '0', NULL, NULL, 1, NULL, 1, 'mainmenu', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `product_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `price` int(10) UNSIGNED NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `amount` int(10) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `metakey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(17, 4, 'ssss', 'ssss', 'ssdsdsdsd', 'ssss.jpg', '1', '1', '1', '2023-10-09 20:50:58', '2023-10-09 20:50:58', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `price_sale` double(8,2) NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `detail` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `metakey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `image`, `qty`, `detail`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(21, 5, 8, 'sipi', 'sipi', 30000.00, 27000.00, 'sipi.jpg', 1, 'Husky1', 'boss ăn gì', 'thức ăn cho thú cưng', '2023-09-28 00:57:33', '2023-09-28 00:57:33', 1, NULL, 1),
(22, 5, 8, 'sii', 'sii', 30000.00, 28000.00, 'sii.jpg', 1, 'màu trắng, mắt nâu đỏ', 'boss ăn gì', 'thức ăn cho pet', '2023-09-28 03:18:16', '2023-09-28 03:18:16', 1, NULL, 1),
(23, 5, 8, 'sic', 'sic', 30000.00, 25000.00, 'sic.jpg', 1, 'màu nâu đậm, mắt đen', 'boss ăn gì', 'thức ăn cho thú cưng', '2023-09-28 03:19:14', '2023-09-28 03:19:14', 1, NULL, 1),
(24, 5, 8, 'ics', 'ics', 30000.00, 27000.00, 'ics.jpg', 1, 'thức ăn cho thú cưng', 'boss ăn gì', 'năng động, khỏe mạnh, màu cơ bản (trắng đen), mắt xanh', '2023-09-28 03:19:49', '2023-09-28 03:19:49', 1, NULL, 1),
(25, 6, 9, 'Dầu tắm olive', 'dau-tam-olive', 35000.00, 27000.00, 'dau-tam-olive.jpg', 1, 'sản phẩm cho thú cưng', 'Dầu tắm olive', 'Dầu tắm olive', '2023-10-04 03:55:11', '2023-10-04 03:55:11', 1, NULL, 1),
(29, 7, 10, 'Chuồng cỡ lớn', 'chuong-co-lon', 40000.00, 37000.00, 'chuong-co-lon.jpg', 1, 'Chuồng cỡ lớn', 'Chuồng cỡ lớn', 'Chuồng cỡ lớn', '2023-10-04 04:00:20', '2023-10-04 04:00:20', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_productsale`
--

CREATE TABLE `db_productsale` (
  `product_id` int(11) NOT NULL,
  `price_sale` double NOT NULL,
  `qty` int(11) NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_slider`
--

CREATE TABLE `db_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_slider`
--

INSERT INTO `db_slider` (`id`, `name`, `link`, `sort_order`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `image`) VALUES
(12, 'ssđ', 'sss', 0, 'sss', '2023-09-28 00:44:10', '2023-09-28 00:44:10', 1, NULL, 1, 'ssđ.jpg'),
(13, 'sss', 'sss', 1, 'sss', '2023-09-28 00:44:55', '2023-09-28 00:44:55', 1, NULL, 1, 'sss.png'),
(14, 'ssc', 'sss', 2, 'sss', '2023-09-28 00:45:25', '2023-09-28 00:45:25', 1, NULL, 1, 'ssc.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(4, 'sss', 'sss', 0, 'sss', 'sdadsada', '2023-10-09 20:44:02', '2023-10-09 20:44:02', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `phone`, `email`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `gender`) VALUES
(3, 'tien', '123456789', 'tien1152003@gmail.com', 'tien11', '1152003', 'số 12 đường 147 hoa cau ', '', 'đd', NULL, NULL, 1, NULL, 2, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_06_08_172551_create_brand_table', 1),
(3, '2023_06_08_172551_create_category_table', 1),
(4, '2023_06_08_172552_create_contact_table', 1),
(5, '2023_06_08_172552_create_menu_table', 1),
(6, '2023_06_08_172553_create_order_table', 1),
(7, '2023_06_08_172553_create_orderdetail_table', 1),
(8, '2023_06_08_172554_create_post_table', 1),
(9, '2023_06_08_172554_create_product_table', 1),
(10, '2023_06_08_172554_create_slider_table', 1),
(11, '2023_06_08_172555_create_topic_table', 1),
(12, '2023_06_08_172555_create_user_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_slider`
--
ALTER TABLE `db_slider`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `db_slider`
--
ALTER TABLE `db_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
