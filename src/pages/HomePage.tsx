import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { GroupProducts } from "../components/GroupProducts";
SwiperCore.use([Autoplay]);
const products: any = [
	{
		id: 1,
		name: "Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
		alias: "du-lich-nam-phi-[johannesburg-pretoria-soweto-cape-town]",
		newPrice: 61990000,
		price: 75000000,
		start: "Thứ 7 hằng tuần",
		totalTime: "5 ngày 4 đêm",
		thumbnail: "https://trendy.w2.exdomain.net/image/cache/catalog/tour-nuoc-ngoai/du-lich-chau-my/helicopter-view-cape-town-e1521821219262-350x233.jpg",
		moveBy: [
			{
				id: 1,
				name: "Ô tô",
			},
			{
				id: 2,
				name: "Tàu thủy",
			},
			{
				id: 3,
				name: "Máy bay",
			},
		],
	},
	{
		id: 2,
		name: "Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
		alias: "du-lich-nam-phi-[johannesburg-pretoria-soweto-cape-town]",
		newPrice: 61990000,
		price: 75000000,
		start: "Thứ 7 hằng tuần",
		totalTime: "5 ngày 4 đêm",
		thumbnail: "https://trendy.w2.exdomain.net/image/cache/catalog/tour-nuoc-ngoai/du-lich-chau-my/helicopter-view-cape-town-e1521821219262-350x233.jpg",
		moveBy: [
			{
				id: 1,
				name: "Ô tô",
			},
			{
				id: 2,
				name: "Tàu thủy",
			},
			{
				id: 3,
				name: "Máy bay",
			},
		],
	},
	{
		id: 3,
		name: "Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
		alias: "du-lich-nam-phi-[johannesburg-pretoria-soweto-cape-town]",
		newPrice: 61990000,
		price: 75000000,
		start: "Thứ 7 hằng tuần",
		totalTime: "5 ngày 4 đêm",
		thumbnail: "https://trendy.w2.exdomain.net/image/cache/catalog/tour-nuoc-ngoai/du-lich-chau-my/helicopter-view-cape-town-e1521821219262-350x233.jpg",
		moveBy: [
			{
				id: 1,
				name: "Ô tô",
			},
			{
				id: 2,
				name: "Tàu thủy",
			},
			{
				id: 3,
				name: "Máy bay",
			},
		],
	},
	{
		id: 4,
		name: "Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
		alias: "du-lich-nam-phi-[johannesburg-pretoria-soweto-cape-town]",
		newPrice: 61990000,
		price: 75000000,
		start: "Thứ 7 hằng tuần",
		totalTime: "5 ngày 4 đêm",
		thumbnail: "https://trendy.w2.exdomain.net/image/cache/catalog/tour-nuoc-ngoai/du-lich-chau-my/helicopter-view-cape-town-e1521821219262-350x233.jpg",
		moveBy: [
			{
				id: 1,
				name: "Ô tô",
			},
			{
				id: 2,
				name: "Tàu thủy",
			},
			{
				id: 3,
				name: "Máy bay",
			},
		],
	},
	{
		id: 5,
		name: "Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
		alias: "du-lich-nam-phi-[johannesburg-pretoria-soweto-cape-town]",
		newPrice: 61990000,
		price: 75000000,
		start: "Thứ 7 hằng tuần",
		totalTime: "5 ngày 4 đêm",
		thumbnail: "https://trendy.w2.exdomain.net/image/cache/catalog/tour-nuoc-ngoai/du-lich-chau-my/helicopter-view-cape-town-e1521821219262-350x233.jpg",
		moveBy: [
			{
				id: 1,
				name: "Ô tô",
			},
			{
				id: 2,
				name: "Tàu thủy",
			},
			{
				id: 3,
				name: "Máy bay",
			},
		],
	},
	{
		id: 6,
		name: "Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
		alias: "du-lich-nam-phi-[johannesburg-pretoria-soweto-cape-town]",
		newPrice: 61990000,
		price: 75000000,
		start: "Thứ 7 hằng tuần",
		totalTime: "5 ngày 4 đêm",
		thumbnail: "https://trendy.w2.exdomain.net/image/cache/catalog/tour-nuoc-ngoai/du-lich-chau-my/helicopter-view-cape-town-e1521821219262-350x233.jpg",
		moveBy: [
			{
				id: 1,
				name: "Ô tô",
			},
			{
				id: 2,
				name: "Tàu thủy",
			},
			{
				id: 3,
				name: "Máy bay",
			},
		],
	},
];

const categories1: any = [
	{
		id: 1,
		name: "Miền Bắc",
		alias: "du-lich-mien-bac",
	},
	{
		id: 2,
		name: "Miền Trung",
		alias: "du-lich-mien-trung",
	},
	{
		id: 3,
		name: "Miền Nam",
		alias: "du-lich-mien-nam",
	},
];
const categories2: any = [
	{
		id: 4,
		name: "Du lịch Châu Á",
		alias: "du-lich-chau-a",
	},
	{
		id: 5,
		name: "Du lịch Châu Âu",
		alias: "du-lich-chau-au",
	},
	{
		id: 6,
		name: "Du lịch Châu Mỹ",
		alias: "du-lich-chau-my",
	},
	{
		id: 7,
		name: "Du lịch Châu Úc",
		alias: "du-lich-chau-uc",
	},
];
const slides: any = [
	"https://trendy.w2.exdomain.net/image/cache/catalog/slider/slider-trendy-1-1920x1100.jpg",
	"https://trendy.w2.exdomain.net/image/cache/catalog/slider/slider-trendy-2-1920x1100.jpg",
	"https://trendy.w2.exdomain.net/image/cache/catalog/slider/slider-trendy-3-1920x1100.jpg",
	"https://trendy.w2.exdomain.net/image/cache/catalog/slider/slider-trendy-4-1920x1100.jpg",
];

export const HomePage = () => {
	return (
		<main>
			<Swiper
				slidesPerView={1}
				modules={[Pagination]}
				pagination={{
					enabled: true,
					clickable: true,
				}}
				autoplay={{ delay: 3333 }}
			>
				{slides.map((slide: any) => {
					return (
						<SwiperSlide key={slide}>
							<div
								style={{
									background: `url(${slide}) center no-repeat`,
									width: "100%",
									height: 840,
								}}
							></div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<GroupProducts
				title="Tour Mới Nhất"
				description="Hệ thống đặt Tour hàng đầu Việt Nam. Hơn 300 tours du lịch ở Việt Nam và Quốc tế"
				products={products}
				layout="row-col"
			/>
			<GroupProducts
				title="Tour Trong Nước"
				backgroundUrl="https://trendy.w2.exdomain.net/image/cache/catalog/background/sec_inbound_tour_bg-1800x1108.jpg"
				products={products}
				layout="slider"
				categories={categories1}
			/>
			<GroupProducts title="Tour Nước Ngoài" products={products} layout="slider" categories={categories2} />
		</main>
	);
};
