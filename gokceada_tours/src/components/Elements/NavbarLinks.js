"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const headers = [
	{ id: 3, name: "Gökçeada Hakkında", href: "/about" },
	{ id: 4, name: "Biz Kimiz", href: "/aboutUs" },
	{ id: 5, name: "İletişim", href: "/contact" },
];
const NavbarLinks = ({ data, setOpen, open }) => {
	const [linkOpen, setLinkOpen] = useState(false);
	const close = () => {
		setLinkOpen(false);
		setOpen(false);
	};
	return (
		<React.Fragment>
			{/*MOBILE SCREEN */}
			<div className="flex lg:hidden flex-col  space-y-4 z-50">
				<div className="">
					<button
						onClick={() => setLinkOpen(!linkOpen)}
						className="flex items-center"
					>
						<h4 className="font-semibold leading-6 pl-8 pr-12">Turlarımız</h4>

						{!linkOpen ? <FaChevronDown /> : <FaChevronUp />}
					</button>

					{linkOpen && (
						<div className=" pl-12 pt-4">
							<button onClick={close}>
								<Link
									href="/allTours"
									className=" font-semibold hover:decoration hover:underline cursor-pointer"
								>
									Tüm Turlar
								</Link>
							</button>

							{data.map((item) => (
								<div key={item.id} className=" pt-4 ">
									<button onClick={close}>
										<Link
											href={`/allTours/${item.id}`}
											className="space-y-4 font-semibold hover:decoration hover:underline cursor-pointer"
										>
											{item.fields.Name}
										</Link>
									</button>
								</div>
							))}
						</div>
					)}
				</div>
				{headers.map((header) => (
					<button key={header.id} onClick={() => setOpen(false)}>
						<Link href={header.href}>
							<h4 className="font-semibold leading-6 pl-8">{header.name}</h4>
						</Link>
					</button>
				))}
			</div>

			{/*LG SCREEN */}
			<div className="hidden lg:flex lg:flex-row  lg:gap-x-4 lg:relative ">
				<div className="">
					<div className="flex items-center">
						<button onClick={() => setOpen(false)}>
							<h4 className="font-semibold leading-6 lg:px-2 xl:pl-4 pr-6">
								Turlarımız
							</h4>
						</button>

						<button onClick={() => setLinkOpen(!linkOpen)}>
							{!linkOpen ? <FaChevronDown /> : <FaChevronUp />}
						</button>
					</div>

					<div className=" h-full absolute top-12 z-50 ">
						{linkOpen && (
							<div className="bg-lightBlue p-4 shadow-xl">
								<button onClick={() => setLinkOpen(false)}>
									<Link
										href="/allTours"
										className="p-2 block font-semibold hover:decoration hover:underline cursor-pointer"
									>
										Tüm Turlar
										<span className="absolute inset-0" />
									</Link>
								</button>

								{data.map((item) => (
									<div key={item.id} className=" p-2">
										<button onClick={() => setLinkOpen(false)}>
											<Link
												href={`/allTours/${item.id}`}
												className="flex flex-col items-start  font-semibold hover:decoration hover:underline cursor-pointer"
											>
												{item.fields.Name}
											</Link>{" "}
										</button>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				{headers.map((header) => (
					<button
						onClick={() => setOpen(false)}
						key={header.id}
						className="block font-semibold leading-6 pl-4"
					>
						<Link href={header.href}>{header.name}</Link>
					</button>
				))}
			</div>
		</React.Fragment>
	);
};

export default NavbarLinks;
