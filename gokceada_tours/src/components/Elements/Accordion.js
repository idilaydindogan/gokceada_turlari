"use client";
import React, { useState } from "react";

import Link from "next/link";
import { FaPhoneVolume, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Accordion = (props) => {
	const { title, children, slug, className } = props;

	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};
	return (
		<div>
			<div
				onClick={toggle}
				aria-hidden="true"
				className={`flex justify-between w-full items-center transition delay-50 duration-300 + ${className}`}
			>
				{slug ? (
					<Link href={slug}>
						<p>{title}</p>
					</Link>
				) : (
					<p onClick={toggle} aria-hidden="true">
						{title}
					</p>
				)}

				<div onClick={toggle} aria-hidden="true" className=" justify-self-end">
					{!open ? (
						<FaPlus
							size={16}
							className={`${
								open ? "rotate-180" : "rotate-0"
							} transform duration-300 ease ml-auto`}
						/>
					) : (
						<FaMinus
							size={16}
							className={`${
								open ? "rotate-180" : "rotate-0"
							} transform duration-300 ease ml-auto`}
						/>
					)}
				</div>
			</div>

			<div
				className={`my-2 overflow-auto transition-max-height delay-50 duration-300 ease-in-out ${
					open ? "max-h-64 border rounded-md px-2 py-8 border-blue" : "max-h-0"
				}`}
			>
				<div className="flex flex-col space-y-2 items-start pl-2 text-blue">
					<Link
						href="tel:00905383537454"
						className="flex items-center space-x-2"
					>
						<FaPhoneVolume size={20} />
						<p>+90 538 353 74 54</p>
					</Link>
					<Link
						href="mailto:gokceadaturlari@gmail.com"
						className="flex items-center space-x-2"
					>
						<MdAlternateEmail size={20} />
						<p>gokceadaturlari@gmail.com</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
