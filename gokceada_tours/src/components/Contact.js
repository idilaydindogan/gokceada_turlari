import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import contact from "../../public/contact.png";

const Contact = () => {
	return (
		<div className="min-h-screen px-12">
			<div className="flex justify-center my-12 border border-lightBlue rounded-md ">
				<Image
					src={contact}
					alt="gokceada tours"
					className="opacity-90 text-center"
					width={500}
					height={300}
				/>
			</div>
			<div className="bg-beige text-blue h-48 rounded-md">
				<div className=" h-full flex flex-col space-y-4 items-center justify-center">
					<div className="flex items-center space-x-2">
						<FaUser size={20} />
						<p>Ayşegül Tekin</p>
					</div>
					<div className="flex items-center space-x-2 hover:scale-110 cursor-pointer">
						<FaPhoneVolume size={20} />
						<p>+90 0538 353 74 54</p>
					</div>
					<Link
						href="mailto:gokceadaturlari@gmail.com"
						className="flex items-center space-x-2 hover:scale-110 cursor-pointer"
					>
						<MdAlternateEmail size={20} />
						<p>gokceadaturlari@gmail.com</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
