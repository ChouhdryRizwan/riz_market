
export default function Footer() {
    return (
        <>
            <div className="mt-14 border-t-[1px] border-gray-800 py-10">
                <div className="flex gap-7">
                    <div className="w-[40%]">
                        <div>Logo</div>
                        <div className="py-7">Small, artisan label that offers a thoughtfully <br /> curated collection of high quality everyday <br />  essentials made.</div>
                        <div className="flex">
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </div>
                    </div>
                    <div className="w-[20%]">
                        <span className="font-bold text-2xl text-gray-400">Company</span>
                        <ul className="font-lg text-gray-500 space-y-2 mt-3">
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Contact Us</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Terms of Use</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <span className="font-bold text-2xl text-gray-400">Support</span>
                        <ul className="font-lg text-gray-500 space-y-2 mt-3">
                            <li className="cursor-pointer">Support Center</li>
                            <li className="cursor-pointer">24/7 Service</li>
                            <li className="cursor-pointer">Customer Support</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <span className="font-bold text-2xl text-gray-400">Contact</span>
                        <ul className="font-lg text-gray-500 space-y-2 mt-3">
                            <li className="cursor-pointer">WhatsApp</li>
                            <li className="cursor-pointer">Support 24hr</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}