"use client";
import React from "react";
import logo from "../../public/Keci_logo_removebg.png";

import { useState } from "react";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const headers = [
	{ id: 3, name: "Gökçeada Hakkında", href: "/about" },
	{ id: 4, name: "Biz Kimiz", href: "/about" },
	{ id: 5, name: "İletişim", href: "/about" },
];
const products = [
	{
		name: "Analytics",
		description: "Get a better understanding of your traffic",
		href: "#",
		icon: ChartPieIcon,
	},
	{
		name: "Engagement",
		description: "Speak directly to your customers",
		href: "#",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "Security",
		description: "Your customers’ data will be safe and secure",
		href: "#",
		icon: FingerPrintIcon,
	},
	{
		name: "Integrations",
		description: "Connect with third-party tools",
		href: "#",
		icon: SquaresPlusIcon,
	},
	{
		name: "Automations",
		description: "Build strategic funnels that will convert",
		href: "#",
		icon: ArrowPathIcon,
	},
];
const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="bg-beige text-blue text-base">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between py-8 lg:px-8 px-4"
			>
				<div className="flex lg:flex-1 items-center space-x-4">
					<Link className="" href="/">
						<Image
							src={logo}
							alt="gokceada turlari brand logo"
							className="w-40 h-40 lg:w-44 lg:h-44"
						/>
					</Link>
					<div className="flex flex-col items-start font-semibold text-2xl md:text-3xl xl:text-4xl space-y-2">
						<h2>GÖKÇEADA</h2>
						<h2>TURLARI</h2>
					</div>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-8 w-8" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex gap-x-8 xl:gap-x-12">
					<Link href="/">
						<h4 className="font-semibold leading-6">Anasayfa</h4>
					</Link>
					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1  font-semibold leading-6 ">
							Turlarımız
							<ChevronDownIcon
								aria-hidden="true"
								className="h-5 w-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="p-4">
								{products.map((item) => (
									<div
										key={item.name}
										className="group relative flex items-center gap-x-6 rounded-lg p-4  leading-6 hover:bg-gray-50"
									>
										<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<item.icon
												aria-hidden="true"
												className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
											/>
										</div>
										<div className="flex-auto">
											<a href={item.href} className="block font-semibold ">
												{item.name}
												<span className="absolute inset-0" />
											</a>
											<p className="mt-1 text-gray-600">{item.description}</p>
										</div>
									</div>
								))}
							</div>
							<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
								{callsToAction.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="flex items-center justify-center gap-x-2.5 p-3  font-semibold leading-6  hover:bg-gray-100"
									>
										<item.icon
											aria-hidden="true"
											className="h-5 w-5 flex-none text-gray-400"
										/>
										{item.name}
									</a>
								))}
							</div>
						</PopoverPanel>
					</Popover>

					{headers.map((header) => (
						<Link key={header.id} href={header.href}>
							<h4 className="font-semibold leading-6">{header.name}</h4>
						</Link>
					))}
				</PopoverGroup>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden "
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="bg-beige  fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between border-b border-blue">
						<Link className="" href="/">
							<Image
								src={logo}
								alt="gokceada turlari brand logo"
								className="w-40 h-40 md:w-44 md:h-44"
							/>
						</Link>

						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 "
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-8 w-8 text-blue" />
						</button>
					</div>
					<div className="mt-8 flow-root">
						<div className="">
							<div className="text-blue">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="pb-4 group flex w-full items-center justify-between rounded-lg pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-gray-50">
										Turlarımız
										<ChevronDownIcon
											aria-hidden="true"
											className="h-5 w-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{[...products, ...callsToAction].map((item) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-lg py-2 pl-6 pr-3  font-semibold leading-7  hover:bg-gray-50"
											>
												{item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<div className="">
									{headers.map((header) => (
										<Link key={header.id} href="/" className="">
											<h4 className="pb-4 font-semibold leading-6">
												{header.name}
											</h4>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Navbar;

// <Link className="" href="/">
// <Image
//     src={logo}
//     alt="gokceada turlari brand logo"
//     className="w-36 h-36"
// />
// </Link>
