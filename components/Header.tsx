import { GetServerSideProps } from 'next';

const Header = () => {
    return (
        <div className="mx-0 box-border">
            {/*header1*/}
            <div className="flex flex-col items-center justify-center bg-[#ae070b] pt-10 pb-[15px] px-[15px]">
            <div className="mx-0 box-border">
                <div className="relative box-border min-h-[1px] px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/4" />
                <div className="relative float-left box-border min-h-[1px] w-full px-3.5 md:float-left md:w-2/3 lg:float-left lg:w-1/2">
                <a
                    className="box-border bg-transparent text-white"
                    title="home"
                    href="index.php"
                >
                    <img
                    className="box-border align-middle"
                    width="100%"
                    src="https://www.cola.kku.ac.th/cola/web/admin/images/article/2020-09-221600758719.png"
                    />
                </a>
                </div>
                <div className="relative box-border min-h-[1px] px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/4" />
                <div className="relative float-left box-border min-h-[1px] w-full px-3.5 md:float-left md:w-full lg:float-left lg:w-full">
                <div className="box-border font-[Noto_Sans_Thai] float-right text-xs text-[#F2F4F9] mr-[5px] mt-[5px]">
                    <a
                    className="box-border bg-transparent text-[#F2F4F9] no-underline"
                    title="Change Language"
                    href="../eng/"
                    >
                    TH/EN
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="mx-0 box-border h-[0.8px] bg-[#6a0306]" />
            <div className="mx-0 box-border h-[0.8px] bg-[#e70c11]" />
            <div className="flex flex-col items-center justify-center bg-[#ae070b]">
            <div className="mx-0 box-border">
                <div className="relative float-left box-border min-h-[1px] w-full px-3.5 md:float-left md:w-full lg:float-left lg:w-full">
                {/*Main menu*/}
                <div className="relative mb-0 box-border md:rounded">
                    <div className="static box-border hidden overflow-x-visible pl-2.5 pr-0 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_0px_inset] md:block md:h-auto md:w-auto md:overflow-visible md:pb-0 md:shadow-[none]">
                    <ul className="static my-0 box-border pl-0 md:float-left">
                        {/* Classic list */}
                        <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            Home
                        </a>
                        </li>
                        <li className="dropdown static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            หมวดวิชา
                            <b className="inline-block w-0 h-0 align-middle text-[#ffc74c] ml-0.5 border-t-4 border-t-[\9] border-x-4 border-x-transparent border-dashed" />
                        </a>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className="">
                                <a
                                    className="rounded-t bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    ภาษา
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    เทคโนโลยี
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    การจัดการ
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    ศิลปะและการพัฒนาตนเอง
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    สุขภาพ
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="rounded-b bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    คอร์สทั้งหมด
                                </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            ประเภทผู้เรียน
                            <b className="inline-block w-0 h-0 align-middle text-[#ffc74c] ml-0.5 border-t-4 border-t-[\9] border-x-4 border-x-transparent border-dashed" />
                        </a>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className="">
                                <a
                                    className="rounded-t bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    นิสิตและบุคลากรจุฬาฯ
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    บุคคลทั่วไป
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="rounded-b bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    Partner
                                </a>
                            </li>
                        </ul>
                        </li>
                        <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            คลังความรู้
                        </a>
                        </li>
                        <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            ข่าวประชาสัมพันธ์
                        </a>
                        </li>
                        <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            คำถามที่พบบ่อย
                        </a>
                        </li>
                        <li className="dropdown static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2">
                        <a
                            className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                            href="#"
                        >
                            เกี่ยวกับเรา
                            <b className="inline-block w-0 h-0 align-middle text-[#ffc74c] ml-0.5 border-t-4 border-t-[\9] border-x-4 border-x-transparent border-dashed" />
                        </a>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className="">
                                <a
                                    className="rounded-t bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    เกี่ยวกับเรา
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    ติดต่อเรา
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="rounded-b bg-pink-200 hover:bg-pink-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    คลิปอื่น
                                </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*END Main menu*/}
            </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default Header