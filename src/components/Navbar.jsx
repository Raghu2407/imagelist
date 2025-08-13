import React from 'react';
import {Link ,NavLink } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="bg-white">
            <el-dialog>
                <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
                    <el-dialog-backdrop className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"></el-dialog-backdrop>
                    <div tabindex="0" className="fixed inset-0 flex focus:outline-none">
                        <el-dialog-panel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full">
                            <div className="flex px-4 pt-5 pb-2">
                                <button type="button" command="close" commandfor="mobile-menu" className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Close menu</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                        <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>


                            <el-tab-group className="mt-2 block">
                                <div className="border-b border-gray-200">
                                    <el-tab-list className="-mb-px flex space-x-8 px-4">
                                        <button className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 aria-selected:border-indigo-600 aria-selected:text-indigo-600">Women</button>
                                        <button className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 aria-selected:border-indigo-600 aria-selected:text-indigo-600">Men</button>
                                    </el-tab-list>
                                </div>
                                <el-tab-panels>
                                    <div className="space-y-10 px-4 pt-10 pb-8">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            <div className="group relative text-sm">
                                                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                                    <span aria-hidden="true" className="absolute inset-0 z-10"></span>
                                                    New Arrivals
                                                </a>
                                                <p aria-hidden="true" className="mt-1">Shop now</p>
                                            </div>
                                            <div className="group relative text-sm">
                                                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                                    <span aria-hidden="true" className="absolute inset-0 z-10"></span>
                                                    Basic Tees
                                                </a>
                                                <p aria-hidden="true" className="mt-1">Shop now</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
                                            <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Tops</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Dresses</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Pants</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Denim</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Sweaters</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">T-Shirts</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Jackets</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Activewear</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Browse All</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
                                            <ul role="list" aria-labelledby="women-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Watches</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Wallets</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Bags</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Sunglasses</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Hats</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Belts</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="women-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
                                            <ul role="list" aria-labelledby="women-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Full Nelson</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">My Way</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Counterfeit</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Significant Other</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div hidden className="space-y-10 px-4 pt-10 pb-8">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            <div className="group relative text-sm">
                                                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                                    <span aria-hidden="true" className="absolute inset-0 z-10"></span>
                                                    New Arrivals
                                                </a>
                                                <p aria-hidden="true" className="mt-1">Shop now</p>
                                            </div>
                                            <div className="group relative text-sm">
                                                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                                    <span aria-hidden="true" className="absolute inset-0 z-10"></span>
                                                    Artwork Tees
                                                </a>
                                                <p aria-hidden="true" className="mt-1">Shop now</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
                                            <ul role="list" aria-labelledby="men-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Tops</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Pants</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Sweaters</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">T-Shirts</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Jackets</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Activewear</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Browse All</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
                                            <ul role="list" aria-labelledby="men-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Watches</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Wallets</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Bags</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Sunglasses</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Hats</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Belts</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p id="men-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
                                            <ul role="list" aria-labelledby="men-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Counterfeit</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">Full Nelson</a>
                                                </li>
                                                <li className="flow-root">
                                                    <a href="#" className="-m-2 block p-2 text-gray-500">My Way</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </el-tab-panels>
                            </el-tab-group>

                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Company</a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Stores</a>
                                </div>
                            </div>

                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Create account</a>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-6">
                                <a href="#" className="-m-2 flex items-center p-2">
                                    <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
                                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>

            <header className="relative bg-white">
                {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p> */}

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button type="button" command="show-modal" commandfor="mobile-menu" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>


                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <span className="sr-only">Your Company</span>
                                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                                </Link>
                            </div>


                            <el-popover-group className="group/popover-group hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    <div className="group/popover flex">
                                        <div className="relative flex">
                                            <Link to='./about' popovertarget="desktop-menu-women" className="relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out group-not-has-open/popover:text-gray-700 group-has-open/popover:text-indigo-600 group-not-has-open/popover:hover:text-gray-800">
                                                About
                                                <span aria-hidden="true" className="absolute inset-x-0 -bottom-px z-30 h-0.5 bg-transparent duration-200 ease-in group-has-open/popover:bg-indigo-600 group-has-open/popover-group:duration-150 group-has-open/popover-group:ease-out"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div className="group/popover flex">
                                        <div className="relative flex">
                                            <button popovertarget="desktop-menu-men" className="relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out group-not-has-open/popover:text-gray-700 group-has-open/popover:text-indigo-600 group-not-has-open/popover:hover:text-gray-800">
                                                Men
                                                <span aria-hidden="true" className="absolute inset-x-0 -bottom-px z-30 h-0.5 bg-transparent duration-200 ease-in group-has-open/popover:bg-indigo-600 group-has-open/popover-group:duration-150 group-has-open/popover-group:ease-out"></span>
                                            </button>
                                        </div>
                                        <el-popover id="desktop-menu-men" anchor="bottom" popover className="w-full overflow-visible bg-white text-sm text-gray-500 transition transition-discrete [--anchor-gap:1px] backdrop:bg-transparent open:block data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">

                                            <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm"></div>
                                            <div className="relative bg-white">
                                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                            <div className="group relative text-base sm:text-sm">
                                                                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                                                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                                                    <span aria-hidden="true" className="absolute inset-0 z-10"></span>
                                                                    New Arrivals
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">Shop now</p>
                                                            </div>
                                                            <div className="group relative text-base sm:text-sm">
                                                                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                                                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                                                    <span aria-hidden="true" className="absolute inset-0 z-10"></span>
                                                                    Artwork Tees
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">Shop now</p>
                                                            </div>
                                                        </div>
                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                            <div>
                                                                <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                                                                <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Tops</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Pants</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Sweaters</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">T-Shirts</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Jackets</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Activewear</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Browse All</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                                                                <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Watches</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Wallets</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Bags</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Sunglasses</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Hats</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Belts</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                                                                <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Re-Arranged</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Counterfeit</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">Full Nelson</a>
                                                                    </li>
                                                                    <li className="flex">
                                                                        <a href="#" className="hover:text-gray-800">My Way</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-popover>
                                    </div> */}

                                    <Link to="/home" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Home</Link>
                                    {/* <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a> */}
                                </div>
                            </el-popover-group>




                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200"></span>
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>

                                {/* <!-- Search --> */}
                                <div className="flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                            <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                {/* <!-- Cart --> */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 flex items-center p-2">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500">
                                            <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

    )
}

export default Navbar