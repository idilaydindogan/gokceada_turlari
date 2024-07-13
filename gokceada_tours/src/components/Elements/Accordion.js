"use client";
import React, { useState } from "react";

import Link from "next/link";
import { FaPhoneVolume, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

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
				{children.map((child, index) => (
					<div
						key={index}
						className="flex space-x-4 space-y-2 items-center text-blue"
					>
						{child.icon}
						<p>{child.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
